# 日志配置

# Slf4j和log4j,logback,jdk logging的关系



Slf4j官方

https://www.slf4j.org/manual.html



# Slf4j+Logback

`slf4j`+`logback`是这些组合中最常见的日志搭配。总结起来起核心的优势有：（1）使用`slf4j`+`logback`的性能更高；（2）`slf4j`和`logback`框架的作者是同一个，所以兼容性更好。



## pom



```
<dependency> 
  <groupId>ch.qos.logback</groupId>
  <artifactId>logback-classic</artifactId>
  <version>1.2.3</version>
</dependency>

<!--支持注解-->
<dependency>
  <groupId>org.projectlombok</groupId>
  <artifactId>lombok</artifactId>
  <version>1.18.10</version>
  <scope>provided</scope>
</dependency>


```



## configuration配置

```
<?xml version="1.0" encoding="UTF-8"?>
<!-- 一般根节点不需要写属性了，使用默认的就好 -->
<configuration>
 
    <contextName>demo</contextName>
    
    <!-- 该变量代表日志文件存放的目录名 -->
    <property name="log.dir" value="logs"/>
    <!-- 该变量代表日志文件名 -->
	<property name="log.appname" value="eran"/>
    
    <!--定义一个将日志输出到控制台的appender，名称为STDOUT -->
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <!-- 内容待定 -->
    </appender>
    
    <!--定义一个将日志输出到文件的appender，名称为FILE_LOG -->
    <appender name="FILE_LOG" class="ch.qos.logback.core.FileAppender">
        <!-- 内容待定 -->
    </appender>
  
    <!-- 指定com.demo包下的日志打印级别为INFO，但是由于没有引用appender，所以该logger不会打印日志信息，日志信息向上传递 -->
    <logger name="com.demo" level="INFO"/>
  
    <!-- 指定最基础的日志输出级别为DEBUG，并且绑定了名为STDOUT的appender，表示将日志信息输出到控制台 -->
    <root level="debug">
        <appender-ref ref="STDOUT" />
    </root>
</configuration>

```

