var demo5,
    demo6,
    demo71,
    demo72,
    demo4,
    demo41,
    demo42,
    demo43,
    demo40;
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
                return  html;
            }else{
                return value;
            }
        }
    };

    var optionOther = $.extend(options,{
        formattingFn:function(value){
            value = ""+value;
            if(value.length<3){
                var html = '';
                for(var i=0;i<3-value.length;i++){
                    html+= '0'
                }
                html += value;
                return  html;
            }else{
                return value;
            }
        }
    });
    demo5 = new CountUp('dpbox5Num', 0, 1793, 0, 1, options);
    demo6 = new CountUp('dpbox6Num', 0, 1033, 0, 1, options);
    demo71 = new CountUp('dpbox7Num1', 0, 1033, 0, 1, options);
    demo72 = new CountUp('dpbox7Num2', 0, 1033, 0, 1, options);
    demo4 = new CountUp('dpbox4Num', 0, 333, 0, 1, optionOther);
    demo41 = new CountUp('dpbox4Num1', 0, 333, 0, 1, optionOther);
    demo42 = new CountUp('dpbox4Num2', 0, 333, 0, 1, optionOther);
    demo43 = new CountUp('dpbox4Num3', 0, 333, 0, 1, optionOther);
    demo40 = new CountUp('dpbox4Num4', 0, 222, 0, 1, optionOther);

    setTimeout(function(){
        demo5.start();
        demo6.start();
        demo71.start();
        demo72.start();
        demo4.start();
        demo41.start();
        demo42.start();
        demo43.start();
        demo40.start();


        var $this = $(".dp-box2-ul");
        var scrollTimer;

        $this.hover(function() {
            clearInterval(scrollTimer);
        }, function() {
            scrollTimer = setInterval(function() {
                scrollNews($this);
            }, 2000);
        }).trigger("mouseleave");


        function scrollNews(obj) {
            var $self = obj.find("ul");
            var lineHeight = $self.find("li:first").height();
            $self.animate({
                "marginTop": -lineHeight + "px"
            }, 600, function() {
                $self.css({
                    marginTop: 0
                }).find("li:first").appendTo($self);
            })
        }

    },500);





});
