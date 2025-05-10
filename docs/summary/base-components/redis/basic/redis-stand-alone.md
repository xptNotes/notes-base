# Redis单机原理知识总结

# 一、Redis简介

## Redis为什么这么快?

redis为什么这么快的原因主要取决于以下几个方面:

- Redis的操作是完全基于内存完成的.
- Redis高效的数据结构,整体来说可以是理解为是一个大的HashMap,查找操作复杂度为O(1)
- Redis处理客户端请求是单线程的,避免了多线程的上下文切换和线程竞争开销
- 网络层面,底层采取了select和epoll多路复用的高效非阻塞IO模型
- Redis协议RESP比较简单,避免了复杂请求的解析开销.



# 二、Redis 架构





# 三、Redis数据结构和对象





# 四、Redis内存管理

## 内存淘汰策略

当Redis内存不够用时,redis会根据设置的淘汰策略,进行对应操作对:

- no-eviction: 写操作拒绝,读操作继续提供
- 设置过期时间的key
  - Volatile-random : 随机删除
  - Volatile-lru: 近似lru算法删除
  - Volatile-ttl : 将要临近过期的key删除
- 未设置过期时间的key
  - allkey-random: 所有key随机删除
  - allkey-lru: 所有key根据近似lru算法删除

后续又新增了两种:

- allkey-lfu: 所有key空间lfu算法删除
- Volatile-lfu:设置了过期key空间lfu算法删除



## Redis键删除策略

Redis键过期后支持三种删除策略:

- 定时删除:设置了定时器,键过期了,定时器立即删除改键,
  - 优点: 对内存友好
  - 缺点: 对cpu不友好,如果过期键太多,cpu消耗大
- 定期删除
  - Redis默认每隔100ms就会随机抽取一些设置过期时间的key进行检测,如果过期就会删除
- 惰性删除
  - 键过期时,留在内存不做处理,当有请求访问该key时,如果过期就删除,否则返回key对应的信息.

redis默认采用定期+惰性删除.



# 五、Redis持久化



Redis持久化的方式支持三种:RDB、AOF、混合持久化.

在4.X版本之前`Redis`只支持`AOF`以及`RDB`两种形式持久化，但是因为`AOF`与`RDB`都存在各自的缺陷，所以在`4.x`版本之后`Redis`还提供一种新的持久化机制：混合型持久化（但是最终生成的文件还是`.AOF`）



## RDB

### RDB设置



### RDB原理





### RDB优缺点







## AOF





## 混合持久化



































