var myChart = echarts.init(document.getElementById('main'));
var myChart1 = echarts.init(document.getElementById('main0'));

var valueJson = [{
	value: 1536,
	name: '查询次数'
}, {
	value: 1365,
	name: '发现问题数'
}];
var legendValue = [];
var valuedata = [];
for (let i = 0; i < valueJson.length; i++) {
	legendValue.push(valueJson[i].name + ':' + valueJson[i].value);
	valuedata.push({
		value: valueJson[i].value,
		name: valueJson[i].name + ':' + valueJson[i].value
	});
}
// 指定图表的配置项和数据
option = {
	tooltip: {
		trigger: 'item',
		formatter: "{b}"
	},
	legend: {
		orient: 'vertical',
		left: 'center',
		bottom: 0,
		data: [{name:"查询次数:1536",textStyle:{fontSize:12*fontSize,color:"#396eff"}}, {name:"发现问题数:1365",textStyle:{fontSize:12*fontSize,color:"#5adbff"}}],
	},
	series: [{
		name: '访问来源',
		type: 'pie',
		radius: ['70%', '50%'],
		center: ['50%', '35%'],
		avoidLabelOverlap: false,
		label: {
			normal: {
				show: false,
				position: 'center'
			},
			emphasis: {
				show: false,
				textStyle: {
					fontSize: '30',
					fontWeight: 'bold'
				}
			}
		},
		labelLine: {
			normal: {
				show: false
			}
		},
		data: valuedata,
		color: ['#396EFF', '#5ADBFF', '#5942FF', '#F8E71C']
	}, {
		name: '访问来源',
		type: 'pie',
		selectedMode: 'single',
		radius: ['0', '30%'],
		center: ['50%', '35%'],
		label: {
			normal: {
				show: false,
				position: 'inner'
			}
		},
		labelLine: {
			normal: {
				show: false
			}
		},
		data: [{
			value: 120,
			name: '已整改'
		}, {
			value: 80,
			name: '未整改'
		}],
		color: ['#5ADBFF', '#396EFF', '#5942FF', '#F8E71C']
	}]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
myChart1.setOption(option);

myChart.dispatchAction({
	type: 'highlight',
	seriesIndex: 0,
	dataIndex: 0
});
myChart1.dispatchAction({
	type: 'highlight',
	seriesIndex: 0,
	dataIndex: 0
});