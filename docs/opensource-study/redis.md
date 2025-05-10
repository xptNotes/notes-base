redis本机环境:

```
make CFLAGS="-g -O0" MALLOC=jemalloc



redis-server ./redis.conf --启动服务
./src/redis-cli -- 客户端连接
```



Clion 配置

![redis-clion](assets/redis-clion.png)





























