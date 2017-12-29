var myCharts1 = echarts.init(document.getElementById("mineBox"));
var option2 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"

    },
       legend: {
        orient: 'vertical',
        top:'center',
        x: 'left',
        data: ['灶具老化','操作不规范','设备故障','其他'],
        textStyle:{
            color: '#5ADBFF'
        },
        itemGap:24
    },
    series: [{
            name:'访问来源',
            type:'pie',
            radius: ['30%', '60%'],
            center: ['54%', '50%'],
            zlevel:20,
            avoidLabelOverlap: false,
            data:[
                {value:740, name:'灶具老化'},
                {value:200, name:'操作不规范'},
                {value:800, name:'设备故障'},
                {value:460, name:'其他'}

            	],
            	color:['#02D5B5','#2895FE','#1142FF','#6A63F8']

	}]
};
myCharts1.setOption(option2);
var myCharts5 = echarts.init(document.getElementById("mineBoxed"));
var option4 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"

    },
       legend: {
        orient: 'vertical',
        top:'center',
        right:'right',
        data: ['人为拔电','停电','SIM卡欠费','设备故障','其他'],
        textStyle:{
            color: '#5ADBFF'
        },
        itemGap:24
    },
    series: [{
            name:'访问来源',
            type:'pie',
            radius: ['30%', '60%'],
            center: ['39%', '50%'],
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
myCharts5.setOption(option4);



