var myCharts2 = echarts.init(document.getElementById("mineBox2"));
var optioned = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius :['15%','60%'],
         /*   center:['55%','50%'],*/
            data:[
                {value:450, name:'使用中34211'},
                {value:274, name:'空瓶1123'},
                {value:310, name:'满瓶32561'},

            ],
            zlevel:20,
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

/*ed2*/
var myCharts7 = echarts.init(document.getElementById("mineBoxed2"));
var optioned1 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
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

/*new*/
var myCharts7 = echarts.init(document.getElementById("mineBoxed21"));
var option5 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"

    },
    series: [{
            name:'访问来源',
            type:'pie',
            radius: ['5%', '10%'],
            data:[
                {value:740, name:'人为拔电'},
                {value:200, name:'停电'},
                {value:800, name:'SIM卡欠费'},
                {value:800, name:'设备故障'},
                {value:460, name:'其他'}

            	],
            	zlevel:20,
            	color:['#02D5B5','#2895FE','#1142FF','#8A43FF','#6A63F8']

	}]
};
myCharts7.setOption(option5);

