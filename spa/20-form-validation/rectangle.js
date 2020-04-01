function roundFrectional(x,n){
    return Math.round(x*Math.pow(10,n))/Math.pow(10,n);
}
$(function(){
    //get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $btn = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
    $btn.click(function(){
        //校验数据合法性
        //如果数据错误 return
        if(!validate('#width') || !validate('#height'))
            return;
        //get value
        var w  = Number($width.val()),
            h = Number($height.val());
        //calculate
        var p = 2*(roundFrectional(w+h,2 )),
            a = roundFrectional(w * h,2);
        //output
        $perimeter.val(p);
        $area.val(a);
    });
    
    $width.focusout(function(){
        if(!validate('#width'))
            $width.select();
    });
    $height.focusout(function(){
        if(!validate('#height'))
            $height.select();
    })
    function validate(field){
        //var DOM error message
        var $date = $(field),
            $msg = $(field +'-msg');
        
        //validate null
        if($date.val()===''){
            $msg.html('不能为空！');
            $date.select();
            return false;

        }
        //validate number
        if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($date.val())){
            $msg.html('必须是数值！');
            $date.select();
            return false;

        }
        //validate > 0
        if(Number($date.val())<0){
            $msg.html('必须大于0');
            $date.select();
            return false;

        }
        //prompt error message
            //return error
        $msg.html('');
        return true;
    }
        
       
})