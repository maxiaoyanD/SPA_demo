var $dlgGoto = (function(){
    var html ='<div class="notepade-dlg-goto">'
        +'<div class="dialogbox">'
            +'<div class="titlebar">'
                +'<p class=" title">转到指定行</p>'
                +'<span class="close-btn">×</span>'

            +'</div>'
            +'<div class="main">'
                +'<label>行号(L):</label>'
                +'<br>'
                +'<input class="txt-line-num" type="text" autofocus>'
                +'<br>'
                +'<input class="btn-goto" type="button" value="转到">'
                +'<input class="btn-cancel" type="button" value="取消">'
            +'</div>'
        +'</div>'
    +'</div>';
    var $dlg = $(html);
        var  cfg={
            container:'body',
            count:6,
            title:   '同意',
            onClick:  null
        };
    function show(conf){ 
        //1-DOM 绘制
        $(cfg.container).append($dlg);
        $.extend(cfg,conf);
        $dlg.val(cfg.title+'('+cfg.count+'s)');

        //2-event bind
        $dlg.click(cfg.onClick);
        
    }
    return{
        show:show
    }
}());

//不用 page load event

//封装成对象，有几种方法
//1.简单对象字面量，不完全是面向对象，不能包括私有方法{
//     show:function()
// }

//2.工厂函数，一个函数返回值是一个简单对象
// var timerBtn = (function(){
//     return {
//         show:function(){

//         }
//     }
// }())

// 3.构造函数：function TimerBtn(){

// }
// var tb = new TimerBtn();