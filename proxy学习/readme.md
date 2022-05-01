## proxy代理 基本理解
---
1. proxy 是一种对象的代理工具
2. 简单理解， a 是一个对象 ， b = new proxy (b, handler)
   2.1  那么我们 直接 调用 b， 其实也是调用 a, 但是我们可以对 b进行二次加工
   2. 那么我们 直接 调用 b， 其实也是调用 a, 但是我们可以对 b进行二次加工

```var origin = {"b":1}

var obj = new Proxy(origin, {
    get:function(target, propKey, receiver){
        console.log(target, propKey, receiver);
        if(propKey in target){
            return target[propKey];
        }else{
            throw new ReferenceError("属性不存在");
        }
    },

})
console.log(obj.b)
console.log(obj.a)
```
