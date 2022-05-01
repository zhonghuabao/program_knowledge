var origin = {"b":1}

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
