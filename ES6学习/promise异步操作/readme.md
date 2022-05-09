## promise 流程

```
1. new promise() 执行异步操作
2. 执行成功：执行 resolve()  回调 then ->onResolve -> 生成新的promise对象
3. 执行失败：执行 reject() 回调 then ->onReject [可以执行 then -> catch()] -> 生成新的promise对象

```

![流程图](./images/liucheng.png)
