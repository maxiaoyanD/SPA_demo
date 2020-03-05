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
        //get value
        var w  = Number($width.val()),
            h = Number($height.val());
        //calculate
        var p = 2*(roundFrectional(w+h,2 )),
            a = roundFrectional(w * h,2);
        //output
        $perimeter.val(p);
        $area.val(a);
    })
    
        
       
})