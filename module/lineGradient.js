var myCharts3 = echarts.init(document.getElementById("mineBox3"));
var option3={
    title: {
        show: false,
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量'],
        textStyle:{
            fontSize: 16,
            color: '#fff'
        },
        left:'78%'
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
        axisLabel: {
            textStyle: {
                color: 'rgba(255, 255, 255,1)', //刻度颜色
                fontSize: 14  //刻度大小
            }
        }
    },
    yAxis: {
        axisLabel: {
            textStyle: {
                color: 'rgba(255, 255, 255,1)', //刻度颜色
                fontSize: 14  //刻度大小
            }
        }
    },
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#99d9ea'
                }, {
                    offset: 1,
                    color: '#3fa7dc'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20
            }
        }
    }],


    animationEasing: 'elasticOut',
    animationEasingUpdate: 'elasticOut',
    animationDelay: function (idx) {
        return idx * 20;
    },
    animationDelayUpdate: function (idx) {
        return idx * 20;
    }
};
myCharts3.setOption(option3)
