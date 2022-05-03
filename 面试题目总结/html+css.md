## css布局方式
```
1. table布局

2. flex布局

3. float布局

4. 响应式布局
```
## 标准盒子模型和IE盒子模型的区别
```
1. 一个元素的宽高判断不一样， IE是包括了padding 和 margin的

2. 标准盒子模型   with =  元素 width ,  heigth = 元素 heigth

3. IE盒子模型    with =  元素 width + padding+ margin ,  heigth = 元素 heigth  + padding+ margin
```

## html5新增标签
```
video    表示一段视频并提供播放的用户界面    

audio    表示音频    

canvas    表示位图区域    

source    为video和audio提供数据源    

track    为video和audio指定字母    

svg    定义矢量图    

code    代码段    

figure    和文档有关的图例    

figcaption    图例的说明    

main    

time    日期和时间值    

mark    高亮的引用文字    

datalist    提供给其他控件的预定义选项    

keygen    秘钥对生成器控件    

output    计算值    

progress    进度条    

menu    菜单    

embed    嵌入的外部资源    

menuitem    用户可点击的菜单项    

menu    菜单    

template    

section    

nav    

aside    

article    

footer    

header
```

## BFC
```
BFC（Block Formatting Context），即块级格式化上下文，它是页面中一个独立的容器，容器中的元素不会影响到外面的元素
```
```
# 触发条件
触发BFC的条件包含不限于：

根元素，即HTML元素
浮动元素：float值为left、right

overflow值不为 visible，为 auto、scroll、hidden

display的值为inline-block、inltable-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid

position的值为absolute或fixed
```

## 浏览器的运行机制
```
参考网址：https://blog.csdn.net/qq_18401691/article/details/118554555
```
```
1. 浏览器主进程：主要负责界面展示，用户交互，子进程管理，同时提供缓存功能

2. 渲染进程：解析，渲染页面，JS执行，合成网页图片，运行在沙箱环境中

3. 网络进程：负责网页的网络资源加载

4. 插件进程：负责插件的运行

5. GPU进程：进行页面绘制
```

## 上下居中的方法
```
1. flex布局 align-item:center

2. heigth 和 line-height 一样

其他的还有，但是没有验证过
```

## 左右居中的方法
```
1. flex布局 justify-content:center
2. text-align:center
3. margin:0 auto
```

## rem、em、vh、vw、px代表的含义
![单位图片](./images/%E5%8D%95%E4%BD%8D.png)
