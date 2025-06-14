# 容量评估

摘抄:https://www.cnblogs.com/zrbfree/p/5801488.html



## **一，需求缘起**

互联网公司，这样的场景是否似曾相识：

 

场景一：pm要做一个很大的运营活动，技术老大杀过来，问了两个问题：

（1）机器能抗住么？

（2）如果扛不住，需要加多少台机器？

 

场景二：系统设计阶段，技术老大杀过来，又问了两个问题：

（1）数据库需要分库么？

（2）如果需要分库，需要分几个库？

 

技术上来说，这些都是系统容量预估的问题，**容量设计是架构师必备的技能之一**。常见的容量评估包括数据量、并发量、带宽、CPU/MEM/DISK等，今天分享的内容，就以【并发量】为例，看看如何回答好这两个问题。

 

## **二，容量评估的步骤与方法**

**【步骤一：评估总访问量】**

如何知道总访问量？对于一个运营活动的访问量评估，或者一个系统上线后PV的评估，有什么好的方法？

答案是：询问业务方，询问运营同学，询问产品同学，看对运营活动或者产品上线后的预期是什么。

 

举例：58要做一个APP-push的运营活动，计划在30分钟内完成5000w用户的push推送，预计push消息点击率10%，求push落地页系统的总访问量？

回答：5000w*10% = 500w

 

**【步骤二：评估平均访问量QPS】**

如何知道平均访问量QPS？

答案是：有了总量，除以总时间即可，如果按照天评估，一天按照4w秒计算。

 

举例1：push落地页系统30分钟的总访问量是500w，求平均访问量QPS

回答：500w/(30*60) = 2778，大概3000QPS

 

举例2：主站首页估计日均pv 8000w，求平均访问QPS

回答：一天按照4w秒算，8000w/4w=2000，大概2000QPS

 

提问：为什么一天按照4w秒计算？

回答：一天共24小时*60分钟*60秒=8w秒，一般假设所有请求都发生在白天，所以一般来说一天只按照4w秒评估

 

**【步骤三：评估高峰QPS】**

系统容量规划时，不能只考虑平均QPS，而是要抗住高峰的QPS，如何知道高峰QPS呢？

答案是：根据业务特性，通过业务访问曲线评估

 

举例：日均QPS为2000，业务访问趋势图如下图，求峰值QPS预估？

![c-line](../images/c-line.jpg)





回答：从图中可以看出，峰值QPS大概是均值QPS的2.5倍，日均QPS为2000，于是评估出峰值QPS为5000。

 

说明：有一些业务例如“秒杀业务”比较难画出业务访问趋势图，这类业务的容量评估不在此列。

 

**【步骤四：评估系统、单机极限QPS】**

如何评估一个业务，一个服务单机能的极限QPS呢？

答案是：压力测试

 

在一个服务上线前，一般来说是需要进行压力测试的（很多创业型公司，业务迭代很快的系统可能没有这一步，那就悲剧了），以APP-push运营活动落地页为例（日均QPS2000，峰值QPS5000），这个系统的架构可能是这样的：

![c-2](../images/c-2.jpg)

1）访问端是APP

2）运营活动H5落地页是一个web站点

3）H5落地页由缓存cache、数据库db中的数据拼装而成

 

通过压力测试发现，web层是瓶颈，tomcat压测单机只能抗住1200的QPS（一般来说，1%的流量到数据库，数据库500QPS还是能轻松抗住的，cache的话QPS能抗住，需要评估cache的带宽，假设不是瓶颈），我们就得到了web单机极限的QPS是1200。一般来说，线上系统是不会跑满到极限的，打个8折，单机线上允许跑到QPS1000。

 

**【步骤五：根据线上冗余度回答两个问题】**

好了，上述步骤1-4已经得到了峰值QPS是5000，单机QPS是1000，假设线上部署了2台服务，就能自信自如的回答技术老大提出的问题了：

（1）机器能抗住么？ -> 峰值5000，单机1000，线上2台，扛不住

（2）如果扛不住，需要加多少台机器？ -> 需要额外3台，提前预留1台更好，给4台更稳

 

除了并发量的容量预估，数据量、带宽、CPU/MEM/DISK等评估亦可遵循类似的步骤。

 

## **三，总结**

互联网架构设计如何进行容量评估：

**【步骤一：评估总访问量】** -> 询问业务、产品、运营

**【步骤二：评估平均访问量QPS】**-> 除以时间，一天算4w秒

**【步骤三：评估高峰QPS】** -> 根据业务曲线图来

**【步骤四：评估系统、单机极限QPS】** -> 压测很重要

**【步骤五：根据线上冗余度回答两个问题】** -> 估计冗余度与线上冗余度差值