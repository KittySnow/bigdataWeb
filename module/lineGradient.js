var myCharts3 = echarts.init(document.getElementById("mineBox3"));
var option3={
    title: {
        show: false,
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    grid:{
        left:"1%",
        right:"1%",
        bottom:"1%"
    } ,
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
        axisLabel: {
            textStyle: {
                color: 'rgba(255, 255, 255,1)', //刻度颜色
                fontSize: 0  //刻度大小
            }
        },
        minInterval: 0,
        show:false

    },
    yAxis: {
        axisLabel: {
            textStyle: {
                color: 'rgba(255, 255, 255,1)', //刻度颜色
                fontSize: 0  //刻度大小
            }
        },
        show:false
    },
    series: [{
        name: '销量',
        type: 'bar',
        data: [85, 80, 36, 80, 10, 20,85, 120, 136, 10, 10, 20,115, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#4cfafd'
                },{
                    offset: 0.5,
                    color: '#46a4f7'
                },{
                    offset: 1,
                    color: '#436df4'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20
            }
        }
    }]
    /*,
    animationEasing: 'elasticOut',
    animationEasingUpdate: 'elasticOut',
    animationDelay: function (idx) {
        return idx * 20;
    },
    animationDelayUpdate: function (idx) {
        return idx * 20;
    }*/
};
myCharts3.setOption(option3)
