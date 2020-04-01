var $timerButton = (function(){
    function show(conf){
        var $btn = $('<input class="timer-button" type="button" disabled>');
        var  cfg={
            container:'body',
            count:6,
            title:   '同意',
            onClick:  null
        },
        timer;
        //1-DOM 绘制
        $(cfg.container).append($btn);
        $.extend(cfg,conf);
        $btn.val(cfg.title+'('+cfg.count+'s)');
        timer = setInterval(function(){
            cfg.count --;
            if(cfg.count == 0){
                clearInterval(timer);
                $btn.val(cfg.title);
                $btn.removeAttr('disabled')
            }else{
                $btn.val(cfg.title+'('+cfg.count + 's)')
            }
        },1000);
        $btn.click(cfg.onClick);
        //2-event bind
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