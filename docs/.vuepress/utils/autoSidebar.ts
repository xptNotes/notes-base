import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface SidebarItem {
  text: string;
  link?: string;
  icon?: string;
  prefix?: string;
  collapsible?: boolean;
  children?: SidebarItem[];
}

/**
 * 读取markdown文件的frontmatter
 */
function readFrontMatter(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(content);
  return data;
}

/**
 * 格式化文件名为显示文本
 */
function formatText(name: string): string {
  return name
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace('.md', '');
}

/**
 * 生成侧边栏配置
 */
function generateSidebar(rootPath: string, relativePath: string = "/"): SidebarItem[] {
  const absolutePath = path.join(rootPath, relativePath);
  const items: SidebarItem[] = [];

  if (!fs.existsSync(absolutePath)) {
    return items;
  }

  const files = fs.readdirSync(absolutePath)
    .filter(file => !file.startsWith('.')) // 过滤隐藏文件
    .sort((a, b) => {
      // README.md 始终排在最前面
      if (a === 'README.md') return -1;
      if (b === 'README.md') return 1;
      return a.localeCompare(b);
    });

  for (const file of files) {
    const fullPath = path.join(absolutePath, file);
    const stat = fs.statSync(fullPath);
    const relativeLink = path.join(relativePath, file).replace(/\\/g, '/');

    if (stat.isDirectory()) {
      // 处理目录
      const children = generateSidebar(rootPath, relativeLink);
      if (children.length > 0) {
        // 检查是否存在目录下的README.md
        const readmePath = path.join(fullPath, 'README.md');
        let text = formatText(file);
        let icon = 'folder';

        if (fs.existsSync(readmePath)) {
          const frontMatter = readFrontMatter(readmePath);
          if (frontMatter.title) {
            text = frontMatter.title;
          }
          if (frontMatter.icon) {
            icon = frontMatter.icon;
          }
        }

        items.push({
          text,
          icon,
          prefix: `${relativeLink}/`,
          collapsible: true,
          children
        });
      }
    } else if (file.endsWith('.md')) {
      // 处理Markdown文件
      const frontMatter = readFrontMatter(fullPath);
      const isReadme = file === 'README.md';
      
      if (!isReadme) { // 不处理README.md，因为它会被作为目录的配置
        items.push({
          text: frontMatter.title || formatText(file),
          icon: frontMatter.icon || 'page',
          link: relativeLink.replace(/\.md$/, ''),
        });
      }
    }
  }

  return items;
}

/**
 * 生成完整的侧边栏配置
 */
export function generateFullSidebar(docsRoot: string): Record<string, SidebarItem[]> {
  const summaryPath = path.join(docsRoot, 'summary');
  
  return {
    '/summary/': generateSidebar(summaryPath)
  };
} 