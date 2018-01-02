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
            color: '#5ADBFF',
            fontSize:14*fontSize
        },
        itemGap:24
    },
        graphic:{
    	type:'text',
    	left:$('#mineBox').width()*0.58-20*fontSize,
    	top:'center',
    	z:2,
    	zlevel:21,
    	style:{
    		text:'预警\n原因',
    		fontSize:20*fontSize,
    		textAlign:'center',
    		fill:'#5ADBFF'
    	}
    },
    series: [{
            name:'访问来源',
            type:'pie',
            radius: ['50%', '85%'],
        	center: ['58%', '50%'],
            zlevel:20,
            avoidLabelOverlap: false,
            data:[
                {value:740, name:'灶具老化'},
                {value:200, name:'操作不规范'},
                {value:800, name:'设备故障'},
                {value:460, name:'其他'}

            	],
            label: {
                normal: {
                    textStyle: {
                        fontSize:14*fontSize
                    }
                }
            },
            	color:['#02D5B5','#2895FE','#1142FF','#6A63F8']

	}]
};
myCharts1.setOption(option2);
window.onresize = myCharts1.resize;
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
            color: '#5ADBFF',
            fontSize:14*fontSize
        },
        itemGap:24
    },
    graphic:{
    	type:'text',
    	left:'33%',
    	top:'center',
    	z:2,
    	zlevel:21,
    	style:{
    		text:'离线\n原因',
    		fontSize:20*fontSize,
    		textAlign:'center',
    		fill:'#5ADBFF'
    	}
    },
    series: [{
            name:'访问来源',
            type:'pie',
            radius: ['50%', '85%'],
            center: ['39%', '50.5%'],
            data:[
                {value:740, name:'人为拔电'},
                {value:200, name:'停电'},
                {value:800, name:'SIM卡欠费'},
                {value:800, name:'设备故障'},
                {value:460, name:'其他'}

            	],
        	label: {
                normal: {
                    textStyle: {
                        fontSize:14*fontSize
                    }
                }
            },
        	zlevel:20,
        	color:['#02D5B5','#2895FE','#1142FF','#8A43FF','#6A63F8']

	}]
};
myCharts5.setOption(option4);
window.onresize = myCharts5.resize;

$(function(){
	var widthS = $(window).width()*0.98*0.32/2;
	var heightT = $("#mineBox-s").height();	
	var radius = heightT;
	$('#mineBox-s').css({'left':widthS*0.58-radius/2+'px',width:heightT});
	
	$('#mineBoxed-s').css({'left':widthS*0.39-radius/2+widthS+'px',width:heightT});
	
})


