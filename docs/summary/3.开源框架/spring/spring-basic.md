# Spring基础



# IOC





# spring-AOP原理

## AOP概念

aop核心概念:

- **切面（Aspect）**：
  横切关注点的模块化，通常是一个类，包含通知和切点。
- **通知（Advice）**：
  在切点执行的动作，包括：
  - **前置通知（Before）**：在方法执行前执行。
  - **后置通知（After）**：在方法执行后执行。
  - **返回通知（AfterReturning）**：在方法成功返回后执行。
  - **异常通知（AfterThrowing）**：在方法抛出异常后执行。
  - **环绕通知（Around）**：在方法执行前后都执行。
- **切点（Pointcut）**：
  定义通知在何处执行，通常通过表达式匹配方法。
- **连接点（Joinpoint）**：
  程序执行过程中的某个点，如方法调用或异常抛出。
- **织入（Weaving）**：
  将切面应用到目标对象的过程。

## Spring AOP实现原理

spring aop实现有两种方式: JDK动态代理和CGLIB代理实现.



### JDK动态代理

- **适用场景**：
  目标类实现了接口。
- **实现机制**：
  - 通过`java.lang.reflect.Proxy`创建代理对象。
  - 代理对象实现目标接口，并在方法调用时通过`InvocationHandler`执行通知逻辑。

```java
public interface UserService {
    void save();
}

public class UserServiceImpl implements UserService {
    public void save() {
        System.out.println("保存用户");
    }
}

public class JdkProxy implements InvocationHandler {
    private Object target;

    public JdkProxy(Object target) {
        this.target = target;
    }

    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println("前置通知");
        Object result = method.invoke(target, args);
        System.out.println("后置通知");
        return result;
    }
}

public class Main {
    public static void main(String[] args) {
        UserService target = new UserServiceImpl();
        UserService proxy = (UserService) Proxy.newProxyInstance(
            target.getClass().getClassLoader(),
            target.getClass().getInterfaces(),
            new JdkProxy(target)
        );
        proxy.save();
    }
}
```







### CGLIB代理

- **适用场景**：
  目标类没有实现接口。
- **实现机制**：
  - 通过CGLIB库生成目标类的子类。
  - 子类重写父类的方法，并在方法调用时执行通知逻辑。

```java
public class UserService {
    public void save() {
        System.out.println("保存用户");
    }
}

public class CglibProxy implements MethodInterceptor {
    public Object intercept(Object obj, Method method, Object[] args, MethodProxy proxy) throws Throwable {
        System.out.println("前置通知");
        Object result = proxy.invokeSuper(obj, args);
        System.out.println("后置通知");
        return result;
    }
}

public class Main {
    public static void main(String[] args) {
        Enhancer enhancer = new Enhancer();
        enhancer.setSuperclass(UserService.class);
        enhancer.setCallback(new CglibProxy());
        UserService proxy = (UserService) enhancer.create();
        proxy.save();
    }
}
```



## AOP配置

```java
@Aspect
@Component
public class LogAspect {
    @Pointcut("execution(* com.example.service.*.*(..))")
    public void pointcut() {}

    @Before("pointcut()")
    public void before(JoinPoint joinPoint) {
        System.out.println("前置通知：" + joinPoint.getSignature().getName());
    }

    @After("pointcut()")
    public void after(JoinPoint joinPoint) {
        System.out.println("后置通知：" + joinPoint.getSignature().getName());
    }
}
```





# spring启动流程





# springMVC原理





# spring事务





## 传播行为和隔离级别

spring事务的隔离级别:

- DEFAULT：使用数据库默认的隔离级别。
- READ_UNCOMMITTED：允许读取未提交的数据。
- READ_COMMITTED：只允许读取已提交的数据。
- REPEATABLE_READ：确保多次读取的结果是一致的。
- SERIALIZABLE：提供严格的事务隔离，以避免幻读。

spring事务的传播行为有以下7种:

- REQUIRED: 支持当前事务,如果当前没有事务则创建新事务
- REQUIRED_NEW: 创建新事务,如果当前有事务,则挂起
- SUPPORTS: 如果有事务则按事务执行,如果没有就以非事务形式执行
- MANDATORY: 支持当前事务,如果没有事务,抛出异常
- NOT_SUPPORTED: 不支持事务,如果有事务,挂起
- NEVER: 以非事务方式执行,如果有事务抛出异常
- NESTED: 如果存在事务,则执行一个嵌套事务,如果没有事务,等同于REQUIRED



## 事务原理

### 动态代理

spring事务是通过动态代理实现的,主要有以下两种方式:

- 当前方法是实现的接口方法,则用jdk动态代理实现
- 当前方法不是实现的接口方法,则用CGLIB实现



### 编程式事务原理



### SavePoint



### 回滚





## 事务失效的原因

spring事务失效的原因可能有:

- 自调用问题,同一个bean里面,一个事务方法,调用另外一个事务方法
- 非public方法注解
- 异常处理导致的失效,内部抛出异常,但是自己捕获了 
- 异常类型不匹配,默认处理RuntimeException和Error
- 事务配置问题
  - 传播行为
  - 未启用事务管理器
  - 多数据源未配置正确的事务管理器
  - 手动管理数据库连接
- 类没被spring管理
- 错误的事务管理器





### 异常处理不正确,例子:

```java
@Transactional
public void method() {
    try {
        // 数据库操作
    } catch (Exception e) {
        // 未抛出异常，事务不会回滚
        e.printStackTrace();
    }
}
```



### 异常不匹配:

```java
@Transactional
public void method() throws IOException {
    // 抛出IOException，默认不触发回滚
}

//解决方式
@Transactional(rollbackFor = Exception.class) // 显式指定回滚异常类型
public void method() throws IOException {
    // ...
}
```



## 排查事务失效原因

排查步骤:

1. **检查方法可见性**：确保事务方法为 public
2. **检查异常处理**：确认异常未被吞掉且类型匹配
3. **检查传播行为**：确认传播行为配置正确
4. **检查代理调用**：避免自调用，或通过 AopContext 获取代理
5. **检查事务管理器配置**：确保正确配置并启用
6. **检查数据库引擎**：确保使用支持事务的引擎
7. **查看日志**：开启 DEBUG 日志，查看 Spring 事务处理过程



## **最佳实践**

1. **使用 @Transactional 注解时**：
   - 优先标注在 public 方法上
   - 显式指定 rollbackFor 属性
   - 避免在方法内部捕获异常
2. **避免自调用**：通过注入自身代理或 AopContext 获取代理对象
3. **合理选择传播行为**：理解各种传播行为的差异，避免误用
4. **监控与测试**：
   - 编写事务相关的单元测试
   - 使用工具监控事务执行情况



















