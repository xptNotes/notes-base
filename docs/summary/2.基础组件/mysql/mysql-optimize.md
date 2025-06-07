# Mysql优化

# 优化架构图







# 缓存优化

## Buffer pool





## change buffer

change buffer优化点

- 大小
- 合并速率
- 禁用特定表的change buffer



### 大小设置

```sql
-- 设置 Change Buffer 最大占 Buffer Pool 的比例（默认 25%）
SET GLOBAL innodb_change_buffer_max_size = 50;  -- 写密集型场景可增大
```



### 合并速率

```sql
-- 控制磁盘 I/O 能力（影响合并和刷盘速度）
SET GLOBAL innodb_io_capacity = 2000;  -- SSD 可设更高值

-- 控制脏页比例阈值（超过时加速刷新）
SET GLOBAL innodb_max_dirty_pages_pct = 75;
```



### 禁用

```sql
-- 对特定表禁用 Change Buffer（适用于几乎不查询的日志表）
ALTER TABLE logs DISABLE KEYS;  -- 禁用二级索引更新，批量插入时优化
```



# 索引/SQL优化







