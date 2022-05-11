const comileUtil = {
    getVal(expr,vm){
        let arr = expr.split(".")
        // console.log("arr = ",arr)

        //这里不理解
        let re = arr.reduce((data,currentval)=>{
            // console.log(data)
            return data[currentval]
        },vm.$data)

        // console.log(vm.$data)

        return re
    },

    text(node, expr, vm){
        let val;
        
        if(expr.indexOf("{{") !== -1){
            val = expr.replace(/\{\{(.+?)\}\}/g, (...args)=>{
                return this.getVal(args[1], vm)
            })
        }else{
            val = this.getVal(expr,vm)
        }

        this.update.textUpdate(node,val)
    },

    update:{
        textUpdate(node,value){
            node.textContent = value
        }
    }


}

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

        //1.获取文档碎片对象
        const frament = this.node2Fragment(this.el)

        // document.getElementById("app").appendChild(frament)
        //2.编译模板
        this.compile(frament)

        //3.把子元素的所有内容添加到根元素中
        this.el.appendChild(frament)
    }
    //编译模板
    compile(fragment){
        const childNodes = fragment.childNodes;
        // console.log(fragment)
        // console.log(childNodes);
        [...childNodes].forEach(child => {
            //  console.log(child)
             if(this.isElementNode(child)){
                 //元素节点
                 this.compileElement(child)
             }else{
                 //txt
                 this.compileText(child)
             }

             //子节点递归 
             if(child.childNodes && child.childNodes.length){
                 this.compile(child)
             }
        })
    }

    compileElement(node){
        const attributes = node.attributes;
        // console.log("attributes=",attributes)
        [...attributes].forEach(attr => {

        })

    }

    compileText(node){
         const content = node.textContent;
         if(/\{\{(.+?)\}\}/.test(content)){
             comileUtil['text'](node,content,this.vm)
         }
    }






    //获取文档碎片对象
    node2Fragment(el){
        //创建一个虚拟节点对象
        const fragment = document.createDocumentFragment()
        // console.log(fragment)

        let firstChild;
 
        while(firstChild = el.firstChild){
            //依次取 节点
            // console.log("firstChild==",firstChild)
            fragment.appendChild(firstChild)
        }
        // console.log("fragment=",fragment)
        return fragment
    }



    //是否为node节点 ，就是有标签的内容
    isElementNode(node){
        // let a = document.getElementById("app")
        // console.log(a.nodeType)
        // console.log(a.childNodes)
        return node.nodetype === 1
    }


}


