var myCharts2 = echarts.init(document.getElementById("mineBox2"));
var optioned = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    series : [
        {
            name:'访问来源',
            type:'pie',
            radius :['15%','60%'],
            data:[
                {value:450, name:'使用中34211'},
                {value:274, name:'空瓶1123'},
                {value:310, name:'满瓶32561'}

            ],
            zlevel:20,
            label: {
                normal: {
                    textStyle: {
                        fontSize:14*fontSize
                    }
                }
            },
            roseType: 'radius',
            color:['#00A8FF','#96E441','#F5A623'],

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
myCharts2.setOption(optioned);
window.onresize = myCharts2.resize;

/*ed2*/
var myCharts7 = echarts.init(document.getElementById("mineBoxed2"));
var optioned1 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    series : [
        {
            name:'访问来源',
            type:'pie',
            radius :['15%','60%'],
            zlevel:20,
/*            center:['46%','50%'],*/
            data:[
                {value:450, name:'5kg:32180'},
                {value:274, name:'15kg:234'},
                {value:310, name:'5kg:1234'},

            ],
            label: {
                normal: {
                    textStyle: {
                        fontSize:14*fontSize
                    }
                }
            },
            roseType: 'radius',
            color:['#00A8FF','#96E441','#F5A623'],

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
myCharts7.setOption(optioned1);

