$(function(){
    var $btn  = $('#timer-button'),
        count = 6,
        timer;
    timer = setInterval(function(){
        count --;

        if(count == 0){
            clearInterval(timer);
            $btn.val('同意');
            $btn.removeAttr('disabled')
        }else{
            $btn.val('同意'+count + 's')
        }
    },1000)
    $btn.click(function(){
        alert("确定同意！")
    })
})