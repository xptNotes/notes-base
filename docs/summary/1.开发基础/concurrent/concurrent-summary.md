并发总结





# 线程池

## 线程池基本信息

### 线程池参数和拒绝策略

```java
 public ThreadPoolExecutor(int corePoolSize,
                              int maximumPoolSize,
                              long keepAliveTime,
                              TimeUnit unit,
                              BlockingQueue<Runnable> workQueue,
                              ThreadFactory threadFactory,
                              RejectedExecutionHandler handler) {
        if (corePoolSize < 0 ||
            maximumPoolSize <= 0 ||
            maximumPoolSize < corePoolSize ||
            keepAliveTime < 0)
            throw new IllegalArgumentException();
        if (workQueue == null || threadFactory == null || handler == null)
            throw new NullPointerException();
        this.acc = System.getSecurityManager() == null ?
                null :
                AccessController.getContext();
        this.corePoolSize = corePoolSize;
        this.maximumPoolSize = maximumPoolSize;
        this.workQueue = workQueue;
        this.keepAliveTime = unit.toNanos(keepAliveTime);
        this.threadFactory = threadFactory;
        this.handler = handler;
    }


默认拒绝策略:
private static final RejectedExecutionHandler defaultHandler =
        new AbortPolicy();

```

ThreadPoolExecutor默认提供的拒绝策略:

- AbortPolicy: 直接丢弃并抛出异常
- CallerRunsPolicy: 主程序线程执行
- DiscardOldestPolicy: 丢弃最早的任务
- DiscardPolicy:丢弃当前任务





## 线程池参数设置

网上版本:

- I/O密集型: 2N+1
- CPU密集型: N+1



或者:

- CPU密集型: cpu+1
- IO密集型:  cpu*(1+平均等待时间/平均计算时间)



但是在实际开发中,如果设置?

结论:**没有固定答案，先设定预期，比如我期望的CPU利用率在多少，负载在多少，GC频率多少之类的指标后，再通过测试不断的调整到一个合理的线程数**

在真实业务环境中,当前应用不只是当前一个接口或者业务逻辑在运行,可能还会有其他线程,如tomcat线程、日志埋点线程、垃圾回收线程等等.

所以一般无法按上面的结论来设置.



所以真实环境一般是按照这样的思路来设置线程池参数:

- 分析当前主机上，有没有其他进程干扰
- 分析当前JVM进程上，有没有其他运行中或可能运行的线程
- 设定目标
- 目标CPU利用率 - 我最高能容忍我的CPU飙到多少？
- 目标GC频率/暂停时间 - 多线程执行后，GC频率会增高，最大能容忍到什么频率，每次暂停时间多少？
- 执行效率 - 比如批处理时，我单位时间内要开多少线程才能及时处理完毕
- 梳理链路关键点，是否有卡脖子的点，因为如果线程数过多，链路上某些节点资源有限可能会导致大量的线程在等待资源（比如三方接口限流，连接池数量有限，中间件压力过大无法支撑等）
- 不断的增加/减少线程数来测试，按最高的要求去测试，最终获得一个“满足要求”的线程数**



不同场景的业务对线程池的需求也不一样,如果只是一个简单的异步,也不需要性能,可能设置线程数为:CPU核数就行了























