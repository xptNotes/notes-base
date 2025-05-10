# jvm虚拟机知识梳理

# 一、类加载

## 1.1.类加载过程

### 1.1.1.什么是类加载

> java虚拟机把描述类的数据从class文件加载到内存,并经过校验、解析转换和初始化,最终形成可以被直接使用的java类型,这个过程称为java的类加载机制.
>
> 在java语言里面,类型的加载、连接、初始化过程都是在程序运行期间完成的,这种策略让java语言进行提前编译会面临额外的困难,也会让类加载时稍微增加一些性能开销,但是为java应用提供了极高的扩展性和灵活性,java天生可以动态扩展的语言特性就是依赖运行期动态加载和动态链接这个特点实现的.



### 1.1.2.类加载的主要内容

类加载的过程主要分为:

- 加载: 
- 连接
  - 验证
  - 准备
  - 解析
- 初始化
- 使用
- 卸载



#### 加载

在加载这一步主要做的工作有以下三部分:

- 根据类的全限定名找到二进制流
- 将该二进制流的静态数据结构转换为方法区的运行时数据结构
- 在内存中生成一个java.lang.Class对象,作为方法区这个类的各种数据访问入口



#### 连接

连接过程主要分为三部分: 验证、准备、解析

##### 验证

验证阶段主要是对文件格式、元数据、字节码、符号引用等方面按照一定的规则进行验证.

##### 准备:

 准备阶段主要是为类变量(静态变量)分配内存

```
public static Integer a = 123;

public static final Integer a = 123;
```

以上者两个的区别

```
public static Integer a = 123;
```

在准备阶段会将a初始化为0,然后在类构造器方法cinit中才能通过putstatic方法将a设置为123

```
public static final Integer a = 123;
```

它是ConstantValue ,在准备阶段就会被初始化为123.

##### 解析

解析阶段是java虚拟机将常量池的符号引用转化为直接引用的过程.



#### 初始化

执行类的cinit方法,该方法主要内容:

- 收集当前类,及父类的所有静态字段、静态方法块
- 然后按顺序执行
- 该方法是线程安全的



```
<clinit>()方法是由编译器自动收集类中的所有类变量的赋值动作和静态语句块（static{}块）中的语句合并产生的，编译器收集的顺序是由语句在源文件中出现的顺序决定的，静态语句块中只能访问到定义在静态语句块之前的变量，定义在它之后的变量，在前面的静态语句块可以赋值，但是不能访问，
```



### 1.1.3类加载时机

- 遇到`new`、`getstatic`、`putstatic`或`invokestatic`这四条字节码指令时，如果类没有进行过初始化，则需要先触发其初始化。生成这四条指令的最常见的 Java 代码场景是：使用`new`关键字实例化对象的时候、读取或设置一个类的静态字段（被`final`修饰、已在编译期把结果放入常量池的静态字段除外）的时候，以及调用一个类的静态方法的时候。
- 使用`java.lang.reflect`包的方法对类进行反射调用的时候，如果类没有进行过初始化，则需要先触发其初始化。
- 当初始化一个类的时候，如果发现其父类还没有进行过初始化，则需要先触发其父类的初始化。
- 当虚拟机启动时，用户需要指定一个要执行的主类（包含`main()`方法的那个类），虚拟机会先初始化这个主类。
- 当使用 JDK 7 新加入的动态语言支持时，如果一个`java.lang.invoke.MethodHandle`实例最后的解析结果是`REF_getStatic`、`REF_putStatic`、`REF_invokeStatic`的方法句柄，并且这个方法句柄所对应的类没有进行过初始化，则需要先触发其初始化。



## 1.2.类加载器和双亲委派模型

### 1.2.1.类加载器介绍

java类加载器分为以下几种:

- 启动类加载器（Bootstrap ClassLoader）
  - **实现方式**：由 C++ 实现，嵌套在 JVM 内部。
  - **加载路径**：负责加载`JAVA_HOME/lib`目录中的，或者被`-Xbootclasspath`参数所指定的路径中的，并且是虚拟机识别的（仅按照文件名识别，如`rt.jar`，名字不符合的类库即使放在`lib`目录中也不会被加载）类库到虚拟机的内存中。
  - **注意事项**：由于启动类加载器涉及到虚拟机本地实现细节，开发者无法直接获取到启动类加载器的引用，所以不允许直接通过引用进行操作。
- 扩展类加载器（Extension ClassLoader）
  - **实现方式**：由`sun.misc.Launcher$ExtClassLoader`实现。
  - **加载路径**：负责加载`JAVA_HOME/lib/ext`目录中的，或者被`java.ext.dirs`系统变量所指定的路径中的所有类库。开发者可以直接使用扩展类加载器。
- 应用程序类加载器（Application ClassLoader）
  - **实现方式**：由`sun.misc.Launcher$AppClassLoader`实现。
  - **加载路径**：负责加载用户类路径（`classpath`）上所指定的类库，开发者可以直接使用这个类加载器，如果应用程序中没有自定义过自己的类加载器，一般情况下这个就是程序中默认的类加载器。



### 1.2.2.双亲委派模型

#### 介绍

如果一个类加载器收到了类加载的请求，它首先不会自己去尝试加载这个类，而是把这个请求委派给父类加载器去完成，每一个层次的类加载器都是如此，因此所有的加载请求最终都应该传送到顶层的启动类加载器中，只有当父加载器反馈自己无法完成这个加载请求（它的搜索范围中没有找到所需的类）时，子加载器才会尝试自己去加载。



#### 源码

ClassLoader源码:

```java
public Class<?> loadClass(String name) throws ClassNotFoundException {
        return loadClass(name, false);
    }

    /**
     * Loads the class with the specified <a href="#binary-name">binary name</a>.  The
     * default implementation of this method searches for classes in the
     * following order:
     *
     * <ol>
     *
     *   <li><p> Invoke {@link #findLoadedClass(String)} to check if the class
     *   has already been loaded.  </p></li>
     *
     *   <li><p> Invoke the {@link #loadClass(String) loadClass} method
     *   on the parent class loader.  If the parent is {@code null} the class
     *   loader built into the virtual machine is used, instead.  </p></li>
     *
     *   <li><p> Invoke the {@link #findClass(String)} method to find the
     *   class.  </p></li>
     *
     * </ol>
     *
     * <p> If the class was found using the above steps, and the
     * {@code resolve} flag is true, this method will then invoke the {@link
     * #resolveClass(Class)} method on the resulting {@code Class} object.
     *
     * <p> Subclasses of {@code ClassLoader} are encouraged to override {@link
     * #findClass(String)}, rather than this method.  </p>
     *
     * <p> Unless overridden, this method synchronizes on the result of
     * {@link #getClassLoadingLock getClassLoadingLock} method
     * during the entire class loading process.
     *
     * @param   name
     *          The <a href="#binary-name">binary name</a> of the class
     *
     * @param   resolve
     *          If {@code true} then resolve the class
     *
     * @return  The resulting {@code Class} object
     *
     * @throws  ClassNotFoundException
     *          If the class could not be found
     */
    protected Class<?> loadClass(String name, boolean resolve)
        throws ClassNotFoundException
    {
        synchronized (getClassLoadingLock(name)) {
            // First, check if the class has already been loaded
            Class<?> c = findLoadedClass(name);
            if (c == null) {
                long t0 = System.nanoTime();
                try {
                    if (parent != null) {
                        c = parent.loadClass(name, false);
                    } else {
                        c = findBootstrapClassOrNull(name);
                    }
                } catch (ClassNotFoundException e) {
                    // ClassNotFoundException thrown if class not found
                    // from the non-null parent class loader
                }

                if (c == null) {
                    // If still not found, then invoke findClass in order
                    // to find the class.
                    long t1 = System.nanoTime();
                    c = findClass(name);

                    // this is the defining class loader; record the stats
                    PerfCounter.getParentDelegationTime().addTime(t1 - t0);
                    PerfCounter.getFindClassTime().addElapsedTimeFrom(t1);
                    PerfCounter.getFindClasses().increment();
                }
            }
            if (resolve) {
                resolveClass(c);
            }
            return c;
        }
    }
```









#### 优点

- **避免类的重复加载**：确保类在内存中只有一份，提高了内存的使用效率。
- **保证 Java 核心库的安全**：防止用户自定义的类替换 Java 的核心类，如`java.lang.Object`，保证了 Java 程序的安全性和稳定性。





### 1.2.3.打破双亲委派模型



#### 重写loadClass()方法(动态加载)

示例:

```java
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

public class CustomClassLoader extends ClassLoader {

    @Override
    public Class<?> loadClass(String name) throws ClassNotFoundException {
        // 不委派给父类加载器，直接自己加载
        if (name.startsWith("com.example")) {
            return findClass(name);
        }
        return super.loadClass(name);
    }

    @Override
    protected Class<?> findClass(String name) throws ClassNotFoundException {
        String path = name.replace('.', '/').concat(".class");
        try {
            // 从文件系统中读取类文件
            InputStream is = new FileInputStream(new File("classes/" + path));
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            byte[] buffer = new byte[1024];
            int len;
            while ((len = is.read(buffer)) != -1) {
                bos.write(buffer, 0, len);
            }
            byte[] classData = bos.toByteArray();
            return defineClass(name, classData, 0, classData.length);
        } catch (IOException e) {
            throw new ClassNotFoundException(name, e);
        }
    }
}
```



重写loadClass方法可以破坏双亲委派模型.

#### SPI机制

以JDBC的SPI机制为例:

当使用 `DriverManager` 来获取数据库连接时，`DriverManager` 会在初始化时通过 `ServiceLoader` 来查找所有的 JDBC 驱动实现。`ServiceLoader` 使用的是调用它的类的类加载器，这可能会导致在加载驱动类时不遵循双亲委派规则。



#### 线程上下文加载器

**核心原理：突破类加载器层级限制**

 **Java 类加载的默认规则**

- 在 Java 标准的**双亲委派模型**中，类加载器具有严格的层级关系（如 `Bootstrap` → `System` → 自定义加载器）。

- 子类加载器无法反向委托父类加载器加载的类去调用子类加载器的类

  。例如：

  - `SharedClassLoader`（父）加载了 Spring 框架，`WebappClassLoader`（子）加载了业务类。
  - 当 Spring 框架通过 `Class.forName("业务类")` 加载业务类时，**父加载器无法直接访问子加载器的类**，因为双亲委派模型下父加载器不会委托子加载器加载类。

2. **线程上下文加载器的作用**

- **为线程绑定一个自定义的类加载器**，允许父加载器加载的类（如 Spring 框架）通过当前线程的上下文加载器，**反向委托子加载器**（如 `WebappClassLoader`）加载目标类。

- 核心逻辑：

  ```java
  // 父加载器中的代码（如 Spring 框架）
  ClassLoader contextClassLoader = Thread.currentThread().getContextClassLoader();
  Class<?> clazz = contextClassLoader.loadClass("业务类全限定名");
  ```

- 通过将线程的上下文加载器设置为子加载器（如 `WebappClassLoader`），父加载器中的代码可以绕过双亲委派模型的限制，直接利用子加载器加载类。

**实现原理**

1. **线程的类加载器存储**

- 每个 `Thread` 对象内部维护了一个 `contextClassLoader` 字段（类型为 `ClassLoader`），默认继承自父线程（通常是主线程）。
- **默认情况下**，主线程的 `contextClassLoader` 是 `SystemClassLoader`（应用程序类加载器）。

2. **动态设置上下文加载器**

- 在需要跨加载器加载类的场景中，通过 `Thread.setContextClassLoader(ClassLoader loader)` 显式设置当前线程的上下文加载器。
- **典型场景**：Tomcat 启动每个 Web 应用时，会为处理请求的线程（如 `HttpWorker` 线程）设置 `WebappClassLoader` 作为上下文加载器。

**注意事项与最佳实践**

1. **线程安全问题**

- 上下文加载器是线程级别的状态，**避免在多线程环境中共享同一个加载器实例**（如 Tomcat 为每个 Web 应用创建独立的加载器实例）。

2. **显式清理上下文加载器**

- 在使用完自定义加载器后，建议恢复线程的默认上下文加载器，避免影响后续线程：

  ```java
  ClassLoader originalLoader = Thread.currentThread().getContextClassLoader();
  try {
      Thread.currentThread().setContextClassLoader(webappClassLoader);
      // 执行需要加载类的操作
  } finally {
      Thread.currentThread().setContextClassLoader(originalLoader);
  }
  ```

  

**与框架的兼容性**

部分框架（如 Tomcat、Spring）会自动管理上下文加载器，但自定义框架时需确保加载器的正确传递。





## ClassLoader应用

常见应用:

- 热部署
- java插件模块开发
- Tomcat类加载设计



# 二、内存模型和分区

- JDK8 Metaspace替代永久代原理
- 对象创建、内存分配、对象访问定位
- 逃逸分析、TLAB优化
- 美团面试题: "JDK8中Metaspace内存溢出的排查与解决方案"
- 高德面试题: "栈上分配与TLAB分配对比,逃逸分析在JIT中的作用"



## 2.1.jvm内存区域划分和变更

### java虚拟机规范的内存区域划分

| **内存区域**     | 线程可见性 | 作用描述                                                     | JDK 7 实现                 | JDK 8+ 实现                    |
| ---------------- | ---------- | ------------------------------------------------------------ | -------------------------- | ------------------------------ |
| **程序计数器**   | 线程私有   | 记录当前线程执行的字节码行号，用于线程切换恢复。             | 无变化                     | 无变化                         |
| **虚拟机栈**     | 线程私有   | 存储方法执行的栈帧（局部变量、操作数栈等），方法调用即栈帧入栈 / 出栈。 | 无变化                     | 无变化                         |
| **本地方法栈**   | 线程私有   | 为 Native 方法（非 Java 代码）服务，结构类似虚拟机栈。       | 无变化                     | 无变化                         |
| **堆（Heap）**   | 线程共享   | 对象实例和数组的分配区域，GC 主要管理区域。                  | 包含新生代、老年代、永久代 | 移除永久代，仅含新生代、老年代 |
| **方法区**       | 线程共享   | 存储类元数据、常量、静态变量等。                             | 永久代（PermGen，堆内存）  | 元空间（MetaSpace，本地内存）  |
| **运行时常量池** | 线程共享   | 存储编译期常量和符号引用，属于方法区的一部分。               | 永久代                     | 移至堆中                       |



### 运行时常量池和字符串常量池

#### 内容:

- **运行时常量池** 是方法区中存储类加载相关常量的区域，包含字符串、基本类型常量和符号引用。
- **字符串常量池** 是运行时常量池的子集，专门优化字符串存储，通过驻留机制避免重复创建。

#### 位置:

字符串常量池:在 JDK 7 之前，字符串常量池存储在 **永久代（PermGen）** 中；JDK 7 及之后，被移动到 **堆（Heap）** 中，以避免永久代的内存溢出问题。

运行时常量池:属于 JVM 内存结构中 **方法区（Method Area）** 的一部分（JDK 8 及之后，方法区的实现改为 **元空间 Metaspace**，但运行时常量池仍存在）。



# 二、垃圾回收

## 2.1.如何判断对象已死

### 2.1.1.引用计数法

引用计数法是一种用于判断对象是否存活（即是否已死）的算法，其核心思想是为每个对象配备一个引用计数器，该计数器会实时记录对象被引用的次数。当有新的引用指向对象时，计数器的值加 1；当指向对象的引用失效时，计数器的值减 1。当计数器的值为 0 时，就意味着该对象不再被任何地方引用，即对象已死，可以被垃圾回收器回收。

### 2.1.2.可达性分析法











jvm性能调优

















































