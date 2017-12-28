var myCharts2 = echarts.init(document.getElementById("mineBox2"));
var option1={
    title:{
        show:false,
        text:'数据统计 饼状图'
    },
    tooltip:{
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['购物', '门店支付','转账','其他'],
        textStyle:{
            color: '#fff'
        }
    },
    series:[{
        name:"测试",
        type:'pie',
        radius:'60%',
        center: ['50%', '50%'],
        data:[
            {name:"购物",value:300},
            {name:"门店支付",value:100},
            {name:"转账",value:400},
            {name:"其他",value:60}
        ],
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
    }]
};
myCharts2.setOption(option1);/**
 * Created by yihua on 2017/12/28.
 */
