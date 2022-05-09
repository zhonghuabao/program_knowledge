class Bvue{
     constructor(options){
           this.$el = options.el
           this.$data = options.data
           
           this.$options = options

           if(this.$el){
               new Compile(this.$el, this)
           }
     }
}

//指令解析器
class Compile{
    constructor(el, vm){
        // console.log(el, vm)
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        this.vm = vm
    }


    //是否为node节点 ，就是有标签的内容
    isElementNode(node){
        // let a = document.getElementById("app")
        // console.log(a.nodeType)
        // console.log(a.childNodes)
        return node.nodetype === 1
    }


}