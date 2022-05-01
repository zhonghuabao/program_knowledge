# es6简明概要

### proxy 数据代理
   1. 也可以说是数据劫持
### 对象解构
   1. 就是 把对象的属性直接赋值给变量，方便使用

### Symbol 独一无二的值
   1. Symbol的值是不可见的， let s = Symbol("牛逼")， 牛逼 只是它的备注，不是它的值

### set 新的数据结构，类似数组，但值是唯一的
   1. const set = new Set([1, 2, 3, 4, 4]);  输出 [...set]
   2. 可以用来给数组去重 [...new Set(array)]


### Object.defineProperty 对象属性操作的工具
``` javascript
    let a = {age:10}  //一个简单对象
    Object.defineProperty(a, {sex:'女'})  //给它增加 性别 = 女
```

### Reflect 新的对象操作工具， 用来替代Object.defineProperty 
``` javascript
    //一切对象属性的操作都是 函数行为，比旧的更先进
    let a = {age:10}  //一个简单对象
    Reflect.defineProperty(a, {sex:'女'})  //给它增加 性别 = 女, 仔细看有很多不同
```

### Iterator 和 for...of 循环 , 都是数据遍历的手段

### Promise 数据异步操作的方法
``` javascript
   //以前异步操作 ajax为例, 多个请求，只能多层嵌套
   
   $.post(xxx,xxx,xx(data){
        data 必须在这里处理 
        //再来一个嵌套
         $.post(xxx,xxx,xx(data){
                data 必须在这里处理 
                return 
        }) 
   })

   // 现在的方式， 就是它把嵌套问题给解决了
   let  abc =  new Promise(http请求)
   abc.then(function(data){
       data在这里处理
   }).then(function(data){
       第二层嵌套处理
   })

```


### Generator 函数 也是异步编程的方法， 比Promise还要强大

### async 函数是什么？一句话，它就是 Generator 函数的语法糖。

