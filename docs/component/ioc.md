# 容器周期
`aurora` 运行时的 Ioc 周期如下所示:
![](https://img-1252940994.cos.ap-nanjing.myqcloud.com/init.png)

`Run` 启动服务器之后，启动器调用Use方法，将服务器自身注册到Ioc中，随后执行 `Server()` 前面说到过该函数中通常用于进行初始化各种组件依赖,
其目的在于 函数调用的实际在 启动Ioc之前，整个项目运行中Ioc只会启动一次，成功启动完成之后，会进行 `Router()` 调用完成服务器启动