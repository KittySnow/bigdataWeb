 var myChart = echarts.init(document.getElementById('main'));
        var myChart1 = echarts.init(document.getElementById('main0'));

        var valueJson = [{value:1536,name:'查询次数'},{value:365,name:'发现问题数'}];
        var legendValue = [];var valuedata = [];
        for(let i = 0; i < valueJson.length; i ++){
       			legendValue.push(valueJson[i].name +':'+valueJson[i].value);
       			valuedata.push({
       				value:valueJson[i].value,
       				name:valueJson[i].name +':'+valueJson[i].value
       			});
        }
        console.log(legendValue);
        // 指定图表的配置项和数据
       option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{b}"
		    },
		   grid:{
		    	top:0,
			   left:0
		   },
		    legend: {
		        orient: 'vertical',
		        bottom: 10,
		        left: 'center',
		        data:legendValue,
		                textStyle:{
            			color: '#396EFF'
        				},
		        
		    },
		    series: [
		       {
		            name:'访问来源',
		            type:'pie',
		            radius: ['40%', '55%'],
		            center:['50%','34%'],
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
		            data:valuedata,
		            color:['#5ADBFF','#396EFF','#5942FF','#F8E71C']
		        },
		        {
		            name:'访问来源',
		            type:'pie',
		            selectedMode: 'single',
		            radius: [0, '30%'],
		               center:['50%','34%'],
		           
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
		            data:[
		                {value:120, name:'已整改'},
		                {value:80, name:'未整改'}
		            ],
		             color:['#5ADBFF','#396EFF','#5942FF','#F8E71C']
		        }
		    ]
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
		    window.onresize = myChart.resize;
		    window.onresize = myChart1.resize;