在学怎么写插件，想着写好的东西总要找个地方存一下呀，虽然现在写的都是很简单的东西

## tabs 选项卡

#### 思路：
* 在页面刚加载时，选型1应该为选中状态 对应显示 1
* 点击时，选中的选项应该呈现选中状态，所以循环将所有的选项都变为未选中状态，点击的那个选项 添加 选中样式
* 其中，再选选项时，会有一个问题，就是不管你选哪个选项卡 都会报错，因为里面涉及到闭包问题，所以代码中将 for(var i = 0; i < tabItems.length ;i++)变为for(let i = 0 ;i < tabItems.length ;i++)，这是解决这个问题的最快方法，原因是let 声明的变量只在块级作用域中有效，其他用立即执行函数也能解决这个问题
  
#### tabs.html
```html
     <div class="tabs-wrapper">
        <div class="tab">
            <div class="tab-item cur">
                <a href="javascript:;">
                    选项1
                </a>
            </div>
            <div class="tab-item">
                <a href="javascript:;">
                    选项2
                </a>
            </div>
        </div>
        <div class="pages">
            <div class="page-item active">
                1
            </div>
            <div class="page-item">
                2
            </div>
        </div>
    </div>
```
#### tabs.js
```js
    let tabItems = document.getElementsByClassName('tab-item'),
    pageItems = document.getElementsByClassName('page-item')

    for(let i = 0 ;i < tabItems.length ;i++){
        tabItems[i].onclick = function () {
            console.log(i)
            for(let j = 0; j < tabItems.length; j++){
                tabItems[j].className = 'tab-item'
                pageItems[j].className = 'page-item'
            }
            this.className = 'tab-item cur'
            pageItems[i].className = 'page-item active'

        }
    }
```

#### tabs.html
```css
    body{
        margin: 0;
        padding: 0;
    }
    a{
        display: block;
        height: 100%;
        text-decoration: none;
        color: black;
        line-height: 50px;
    }
    .tab-item{
        width: 100px;
        text-align: center;
    }
    .tab{
        display: flex;
        width: 100%;
    }
    .tabs-wrapper{
        margin: 50px;
    }
    .pages{
        border: 1px solid black;
        position: relative;
        width: 100%;
        height: 500px;
    }
    .page-item{
        height: 100%;
        width: 100%;
        position: absolute;
        font-size: 50px;
        display: none;
    }
    .cur a{
        background-color: black;
        
    }
    .cur a{
        color: white;
    }
    .active{
        display: block;
    }
```
#### 上述只是实现了选项卡的效果，接下来通过tabs.js文件进行修改,将其封装成为一个插件

tabs.js
```js
;(function() {
    //创建Tab构造函数
    let Tab = function (obj){
        this.tabs = document.getElementsByClassName(obj.tabItems)
        this.pages = document.getElementsByClassName(obj.pageItems)
        this.bindClick(obj.tabItems,obj.pageItems,obj.cur,obj.active)
    }
    //将方法挂载到Tab原型上
    Tab.prototype = {
        bindClick: function(tabItems,pageItems,cur,active){
            let tabs = this.tabs,
                pages = this.pages
            for(let i = 0; i < tabs.length; i++){
                tabs[i].onclick = function (){
                    for(let j = 0; j < tabs.length; j++){
                        tabs[j].className = tabItems
                        pages[j].className = pageItems
                    }
                    this.className = `${tabItems} ${cur}`
                    pages[i].className = `${pageItems} ${active}`
                }
            }
            
        }
    }
    //抛到window下
    window.Tab = Tab
})()
```
#### 在tabs.html中需要new一个对象
```html
<script type="text/javascript">
    var tab = new Tab({
        tabItems: 'tab-item',
        pageItems: 'page-item',
        cur: 'cur',
        active: 'active'
    })
</script>
```

#### 大功告成