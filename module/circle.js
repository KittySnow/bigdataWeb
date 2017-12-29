var myCharts2 = echarts.init(document.getElementById("mineBox2"));
var optioned = {
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
            name: '访问来源',
            type: 'pie',
            radius: ['20%', '60%'],
            data:[
                {value:990, name:'使用中34211'},
                {value:650, name:'空瓶1123'},
                {value:820, name:'满瓶32561'}

            ],
            zlevel:3,
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            itemStyle: {
                normal: {
                }
            }
        }
    ]
};
myCharts2.setOption(optioned);
