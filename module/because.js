var myCharts1 = echarts.init(document.getElementById("mineBox"));
var option2 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"

    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['灶具老化','操作不规范','设备故障','其它']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['32%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                   /* show: false,*/
                    textStyle: {
                         color: 'rgba(0, 215, 182, 1)'
                    }
                   /* position: 'center'*/
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                   /* show: false*/
                     lineStyle: {//将标签的视觉引导线的颜色设为浅色
                                color: 'rgba(40,149,255, 1)'
                            }
                }
            },
            data:[
                {value:335, name:'灶具老化'},
                {value:310, name:'操作不规范'},
                {value:234, name:'设备故障'},
                {value:135, name:'其它'}
            ],
                 itemStyle: {//阴影的配置,还可以设置扇形的颜色，在normal中编辑color来设置，设置后的扇形颜色是一样的
                        normal: {
                            // 阴影的大小
                            shadowBlur: 300,
                            // 阴影颜色
                            shadowColor: 'rgba(255, 255, 255, 0.5)'
                        }
                    }
        }
    ]
};
myCharts1.setOption(option2);/**
 * Created by yihua on 2017/12/28.
 */
