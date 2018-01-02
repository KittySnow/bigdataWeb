// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('dpBox7'));
// 指定图表的配置项和数据
var option = {
    title: {
        text: '各区域属地巡查询进度',
        textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontSize: 14*fontSize,
            fontStyle: 'normal',
            fontWeight: 'normal',
            color:"#5adbff"
        },
    },
    tooltip: {},
    legend: {
        data:['已查询','待查询'],
        textStyle:{
            fontSize: 12*fontSize,
            paddingTop:12*fontSize,
            color: '#59d9fc'
        },
        left:'58%',
        top:2
    },
    grid:{
        left:"0%",
        right:"0%",
        top:35*fontSize,
        bottom:28*fontSize
    },
    xAxis: {
        data: ["鸿山","新安","梅村","三庄","江溪","收房"],
        axisLabel: {
            textStyle: {
                color: '#4ec0e5', //刻度颜色
                fontSize: 14*fontSize  //刻度大小
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color:'#307faa',
                width:'2'
            }
        }
    },
    yAxis: {
        axisLabel: {
            textStyle: {
                color: '#3080ac', //刻度颜色
                fontSize: 0  //刻度大小
            },
            show:false
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color:'#307faa',
                width:'1'
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color:'#bed3ec',
                width:'1',
                opacity:0.2
            }
        },
    },
    series: [{
        name: '已查询',
        type: 'bar',
        data: [620, 732, 701, 734, 1090, 1130],
        stack: '进度',
        barWidth : 30,//柱图宽度
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
    },{
        name:'待查询',
        type:'bar',
        stack: '进度',
        data:[620, 732, 701, 734, 1090, 1130],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(163,163,163, 0.6)'
                },{
                    offset: 1,
                    color: 'rgba(163,163,163, 0.6)'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20
            }
        }
    }]
};
myChart.setOption(option);
