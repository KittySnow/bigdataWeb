$(document).ready(function(){
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '',
        formattingFn:function(value){
            value = ""+value;
            if(value.length<4){
                var html = '';
                for(var i=0;i<4-value.length;i++){
                    html+= '0'
                }
                html += value;
                console.log(html);
                return  html;
            }else{
                return value;
            }
        }
    };

    demo5 = new CountUp('dpbox5Num', 0, 1793, 0, 1, options);
    demo6 = new CountUp('dpbox6Num', 0, 1033, 0, 1, options);
    setTimeout(function(){
        demo5.start();
        demo6.start();
    },500)

});
