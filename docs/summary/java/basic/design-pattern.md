# 设计模式

> 摘抄至https://www.runoob.com/design-pattern/singleton-pattern.html

设计模式分类:创建型、结构型、行为型.



创建型:

- 单例模式
- 工厂模式
- 抽象工厂模式
- 建造者模式
- 原型模式

结构型:

- 适配器
- 桥接模式
- 过滤器模式
- 组合模式
- 装饰器模式
- 外观模式
- 享元模式
- 代理模式

行为模式:

- 责任链模式
- 命令模式
- 解释器模式
- 迭代器模式
- 中介模式
- 备忘录模式
- 状态模式
- 空对象模式
- 策略模式
- 模版模式
- 访问者模式







# 常用设计模式详解

## 单例模式



### 懒汉模式,线程不安全

```java
public class SingletonObj {

    private  static SingletonObj instance;

    private SingletonObj(){
    }
    public static SingletonObj getInstance(){
        if(instance==null){
            instance = new SingletonObj();
        }
        return instance;
    }
}
```

缺点:多线程不安全



### 懒汉模式,线程安全



```java

public class SingletonObj {

    private  static SingletonObj instance;

    private SingletonObj(){
    }
    public static synchronized SingletonObj getInstance(){
        if(instance==null){
            instance = new SingletonObj();
        }
        return instance;
    }
}
```

优点：第一次调用才初始化，避免内存浪费。
缺点：必须加锁 synchronized 才能保证单例，但加锁会影响效率。





### 饿汉模式

```java

public class SingletonObj {

    private  static SingletonObj instance = new SingletonObj();

    private SingletonObj(){
    }
    public static  SingletonObj getInstance(){
        return instance;
    }
}

```

优点:无锁,执行效率会高

缺点:类加载时就会初始化,浪费内存.

它基于 classloader 机制避免了多线程的同步问题，不过，instance 在类装载时就实例化，虽然导致类装载的原因有很多种，在单例模式中大多数都是调用 getInstance 方法， 但是也不能确定有其他的方式（或者其他的静态方法）导致类装载，这时候初始化 instance 显然没有达到 lazy loading 的效果。



### 双检锁/双重校验锁(DCL,即double-checked locking)

```java
public class SingletonObj {

    private volatile static SingletonObj instance;

    private SingletonObj(){
    }
    public static SingletonObj getInstance(){
        if(instance==null){
            synchronized (SingletonObj.class){
                if(instance==null){
                    instance = new SingletonObj();
                }
            }
        }
        return instance;
    }
}

```

**是否 Lazy 初始化：**是

**是否多线程安全：**是

**实现难度：**较复杂

这种方式采用双锁机制，安全且在多线程情况下能保持高性能。





### 登记式/静态内部类

```java
public class SingletonObj {
    private static class SingletonObjHolder{
        private final  static SingletonObj INSTANCE = new SingletonObj();
    }
    private SingletonObj(){}
    public static  SingletonObj getInstance(){
        return SingletonObjHolder.INSTANCE;
    }
}

```

**是否 Lazy 初始化：**是

**是否多线程安全：**是

和DCL达到同样效果.利用了classloader来确保初始化instance线程安全.

因为SingletonObjHolder在SingletonObj初始化时并没有被初始化,而是在getInstance()方法调用时才执行初始化,所以这时才去初始化SingletonObjHolder,通过class保证线程安全,正确初始化SingletonObjHolder.INSTANCE属性.



### 枚举

```java
public enum  SingletonObj {

   INSTANCE;
   
   
   public void method(){
       
   }
}
```

**JDK 版本：**JDK1.5 起

**是否 Lazy 初始化：**否

**是否多线程安全：**是

**描述：**这种实现方式还没有被广泛采用，但这是实现单例模式的最佳方法。它更简洁，自动支持序列化机制，绝对防止多次实例化。
这种方式是 Effective Java 作者 Josh Bloch 提倡的方式，它不仅能避免多线程同步问题，而且还自动支持序列化机制，防止反序列化重新创建新的对象，绝对防止多次实例化。不过，由于 JDK1.5 之后才加入 enum 特性，用这种方式写不免让人感觉生疏，在实际工作中，也很少用。
不能通过 reflection attack 来调用私有构造方法。

### 总结

一般情况下，不建议使用第 1 种和第 2 种懒汉方式，建议使用第 3 种饿汉方式。只有在要明确实现 lazy loading 效果时，才会使用第 5 种登记方式。如果涉及到反序列化创建对象时，可以尝试使用第 6 种枚举方式。如果有其他特殊的需求，可以考虑使用第 4 种双检锁方式。



## 工厂模式









## 建造者模式



## 适配器模式



## 装饰器模式





## 责任链模式





## 策略模式



## 模版模式











