var myCharts1 = echarts.init(document.getElementById("mineBox"));
var option2 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"

    },
       legend: {
        orient: 'vertical',
        top:'center',
        left:'left',
        padding: [0,20,0,0],
        height:'500',
        data: ['灶具老化','操作不规范','设备故障','其他'],
        textStyle:{
            color: '#5ADBFF'
        }
    },
    series: [{
            name:'访问来源',
            type:'pie',
            radius: ['32%', '70%'],
            center: ['50%', '50%'],
            data:[
                {value:740, name:'灶具老化'},
                {value:200, name:'操作不规范'},
                {value:800, name:'设备故障'},
                {value:460, name:'其他'}

            	]

	}]
};
myCharts1.setOption(option2);

