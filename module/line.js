// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('mineBox1'));
// 指定图表的配置项和数据
var option = {
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
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
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
        data: [5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20]
    }]
};
myChart.setOption(option);
