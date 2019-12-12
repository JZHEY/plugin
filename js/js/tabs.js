// let tabItems = document.getElementsByClassName('tab-item'),
//     pageItems = document.getElementsByClassName('page-item')

// for(let i = 0 ;i < tabItems.length ;i++){
//     tabItems[i].onclick = function () {
//         console.log(i)
//         for(let j = 0; j < tabItems.length; j++){
//             tabItems[j].className = 'tab-item'
//             pageItems[j].className = 'page-item'
//         }
//         this.className = 'tab-item cur'
//         pageItems[i].className = 'page-item active'

//     }
// }

;(function() {
    let Tab = function (obj){
        this.tabs = document.getElementsByClassName(obj.tabItems)
        this.pages = document.getElementsByClassName(obj.pageItems)
        this.bindClick(obj.tabItems,obj.pageItems,obj.cur,obj.active)
    }

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

    window.Tab = Tab
})()