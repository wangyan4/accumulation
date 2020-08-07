// 仪表盘
const option = {
  backgroundColor: "#ffffff",
  color: ["#37A2DA", "#32C5E9", "#67E0E3"],
  series: [{
      name: '业务指标',
      type: 'gauge',
      detail: {
          formatter: '{value}%'
      },
      axisLine: {
          show: true,
          lineStyle: {
              width: 30,
              shadowBlur: 0,
              color: [
                  [0.3, '#E34B41'],
                  [0.7, '#FEA72D'],
                  [1, '#02C0A7']
              ]
          }
      },
      data: [{
          value: 18.3,
          name: '',
      }]

  }]
};
// 漏斗图
const option = {
  backgroundColor: '',

  tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c}%"
  },
  color: ['#FF5947', '#FF8347', '#FFAF49', '#75DD99', '#39E3FF', '#39C3FF', ],

  series: [

      {
          name: '阶段',
          type: 'funnel',
          left: 'center',
          width: '60%',
          minSize:'10%',
          // sort: 'ascending',
          label: {
              normal: {
                  show:true,
                //   color:'#fff',
                  fontSize:12,
                  formatter: params => {
                    return  params.name+'  ●';
                  },
              },

          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          itemStyle: {
              normal: {
                  opacity: 0.3
              }
          },
          tooltip: {
              show: true
          },

          data: [{
                  value: 18,
                  name: '第六阶段'
              }, {
                  value: 36,
                  name: '第五阶段'
              },
              {
                  value: 52,
                  name: '第四阶段'
              },
              {
                  value: 68,
                  name: '第三阶段'
              },
              {
                  value: 84,
                  name: '第二阶段'
              },
              {
                  value: 100,
                  name: '第一阶段'
              }
          ]
      },

      {
          name: '阶段',
          type: 'funnel',
          left: 'center',
          width: '65%',
          maxSize: '78%',
          minSize:'3%',
          // sort: 'ascending',
          label: {
              normal: {
                  position: 'inside',
                  formatter: '{c}%',
                  textStyle: {
                      color: '#fff',
                      fontSize:10,
                      fontWeight:100
                  },
              }
          },
          
          itemStyle: {
              normal: {
                  opacity: .9
              }
          },

          data: [{
                  value: 10,
                  name: '第六阶段'
              }, {
                  value: 20,
                  name: '第五阶段'
              },
              {
                  value: 30,
                  name: '第四阶段'
              },
              {
                  value: 50,
                  name: '第三阶段'
              },
              {
                  value: 80,
                  name: '第二阶段'
              },
              {
                  value: 100,
                  name: '第一阶段'
              }
          ]
      }
  ]
};
// 环形图
let echartData = [{
  name: "品鉴会",
  value: "36%",
  text:423
},
{
  name: "宴席活动",
  value: "24%",
  text:240
},
{
  name: "终端活动",
  value: "20.3%",
  text:203
},
{
  name: "订货会",
  value: "19.7%",
  text:197
}];
const option = {
  backgroundColor: '',
  tooltip: {
      trigger: 'item'
  },
  data:[{
      name: "品鉴会",
      value: "36%",
      text:423
  },
  {
      name: "宴席活动",
      value: "24%",
      text:240
  },
  {
      name: "终端活动",
      value: "20.3%",
      text:203
  },
  {
      name: "订货会",
      value: "19.7%",
      text:197
  }
],
  legend: {
      orient: 'vertical',
      icon: 'roundRect',
      x: '5%',
      y: 'center',
      itemWidth: 14,
      itemHeight: 14,
      align: 'left',
      textStyle: {
          rich: {
              name: {
                  fontSize: 15,
                  color:'#75849F',
                  padding:[10,0,20,8]
              },
              value: {
                  fontSize: 16,
                  padding: [0, 5, 0, 15],
                  color:'#3AD6FF'
              },
              text:{
                  fontSize:14,
                  color:'#AFBDD1'
              }
          }
      },
      formatter: function(name) {
          let res = echartData.filter(v => v.name === name);
          res = res[0] || {};
          let unit = res.unit || '';
          return '{name|' + name + '}'+'\n{text|  '+res.text+'}' +'\t\t\t\t{value|' + res.value + '}{unit|' + unit + '}'
      }
  },
  series: [{
      type: 'pie',
      radius: ['50%', '70%'],
      center: ['70%', '53%'],
      data: [{
              name: "品鉴会",
              value: "36",
              itemStyle:{
                  color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#6A4FF1'
                    }, {
                        offset: 1,
                        color: '#1D97FB'
                    }])
              }
          },
          {
              name: "宴席活动",
              value: "24",
              itemStyle:{
                  color:new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: '#FA704D'
                    }, {
                        offset: 1,
                        color: '#E53447'
                    }])
              }
          },
          {
              name: "终端活动",
              value: "20.3",
              itemStyle:{
                  color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FA704D'
                    }, {
                        offset: 1,
                        color: '#FFD100'
                    }])
              }
          },
          {
              name: "订货会",
              value: "19.7",
              itemStyle:{
                  color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#19BEAF'
                    }, {
                        offset: 1,
                        color: '#8CD66F'
                    }])
              }
          }
      ],
      hoverAnimation: false,
      labelLine: {
          normal: {
              show: false,
              length: 20,
              length2: 120,
              lineStyle: {
                  color: '#e6e6e6'
              }
          }
      },
      label: {
          normal: {
              position: 'inner',
              formatter: params => {
                  return (
                      '{value|' +
                      params.value + '%}'
                  );
              },
              rich: {
                  icon: {
                      fontSize: 16,
                      
                  },
                  name: {
                      fontSize: 14,
                      padding: [0, 10, 0, 4],
                      color: '#666666'
                  },
                  value: {
                      fontSize: 12,
                      color: '#fff'
                  }
              }
          }
      },
  }]
};
// 柱状图
const option = {
  backgroundColor:'transparent',
  tooltip: {
    trigger: 'axis'
  },
  legend: {
     data: ['投入', '产出','ROI'],
     left: 140,
     top:50,
     textStyle: {
         color: "#fff",
         fontSize:14
     },
     itemWidth: 14,
     itemHeight: 10,
     itemGap:100
 },
  xAxis: {
    type: 'category',
    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    axisLine: {
      lineStyle: {
        color: 'white'

      }
    },
    axisTick:{
        show:false
    },
    axisLabel: {
      textStyle: {
        fontFamily: 'Microsoft YaHei'
      }
    },
  },

  yAxis: [{
    type: 'value',
    max:'1800',
    min:'0',
    axisTick:{
        show:false
    },
    splitNumber:9,
    axisLine: {
      show: true,
      lineStyle: {
        color: 'white'
      }
    },
    splitLine: {
      show: false
    },
    axisLabel: {}
  },
  {
    type: 'value',
    max:'4.5',
    min:'0',
    axisTick:{
        show:false
    },
    splitNumber:9,
    axisLine: {
      show: false,
      lineStyle: {
        color: 'white'
      }
    },
    splitLine: {
      show: false
    },
    axisLabel: {
        show:true
    }
  }],
  series: [{
    name: '投入',
    type: 'bar',
    barWidth: '18%',
    yAxisIndex:0,
    itemStyle: {
      normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#1D97FB'
          }, {
              offset: 1,
              color: '#6A4FF1'
          }]),
          barBorderRadius: 12,
      },
    },
    data: [600, 400, 300, 900, 300, 650, 400, 500, 300,878,400,579]
  },
  {
    name: '产出',
    type: 'bar',
    barWidth: '18%',
    yAxisIndex:0,
    itemStyle: {
      normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#8CD66F'
          }, {
              offset: 1,
              color: '#19BEAF'
          }]),
          barBorderRadius: 11,
      }
      
    },
    data: [400, 600, 500, 800, 500, 400,780, 900, 500,555,234,208]
  },
  {
  name: 'ROI',
    type: 'line',
  //  smooth:true,
    yAxisIndex:1,
    itemStyle: {
      normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#FA704D'
          }, {
              offset: 1,
              color: '#E53447'
          }]),
          barBorderRadius: 14,
      }
      
    },
    data: [1, 2,1.5,2.5,1,1,2.5,1,0.5,1.5,0.5,0.8]
  }
]};
// 饼图（图例）
let echartData = [{
    name: "餐饮",
    value: "35%",
    text: 224
},
{
    name: "商超",
    value: "40%",
    text: 256
},
{
    name: "烟酒",
    value: "25%",
    text: 96
}
];
option = {
backgroundColor: '',
tooltip: {
    trigger: 'item'
},
data: [{
    name: "餐饮",
    value: "35%",
    text: 224
},
{
    name: "商超",
    value: "40%",
    text: 256
},
{
    name: "烟酒",
    value: "25%",
    text: 96
}],
legend: {
    orient: 'vertical',
    icon: 'roundRect',
    x: '10%',
    y: 'center',
    itemWidth: 14,
    itemHeight: 14,
    align: 'left',
    textStyle: {
        rich: {
            name: {
                fontSize: 10,
                color: '#75849F',
                padding: [10, 0, 20, 8]
            },
            value: {
                fontSize: 16,
                padding: [0, 5, 0, 15],
                lineHeight: 1,
                color: '#AFBDD1'
            },
            text: {
                fontSize: 14,
                color: '#AFBDD1'
            }
        }
    },
    formatter: function(name) {
        let res = echartData.filter(v => v.name === name);
        res = res[0] || {};
        let unit = res.unit || '';
        return '{name|' + name + '}' + '\n{text|  ' + res.text + '}' + ' {value|' + res.value + '}{unit|' + unit + '}'
    }
},
series: [{
    type: 'pie',
    radius: '50%',
    startAngle:0,
    center: ['60%', '53%'],
    data: [{
            name: "餐饮",
            value: "35",
            itemStyle:{
                normal:{
                    color:new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                      offset: 0,
                      color: '#EE6660'
                  }, {
                      offset: 1,
                      color: '#FDAF8E'
                  }])
                }
            }
        },
        {
            name: "商超",
            value: "40",
            itemStyle:{
                normal:{
                    color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#81FBBB'
                  }, {
                      offset: 1,
                      color: '#28C76F'
                  }])
                }
            }
        },
        {
            name: "烟酒",
            value: "25",
            itemStyle:{
                normal:{
                    color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#E2B0FF'
                  }, {
                      offset: 1,
                      color: '#9F44D3'
                  }])
                }
            }
        }
    ],
    hoverAnimation: false,
    labelLine: {
        normal: {
            show: false,
            length: 20,
            length2: 120,
            lineStyle: {
                color: '#e6e6e6'
            }
        }
    },
    label: {
        normal: {
            position: 'inner',
            formatter: params => {
                return (
                    '{value|' +
                    params.value + '%}\n'+ '{name|' +
                    params.name + '}'
                );
            },
            rich: {
                icon: {
                    fontSize: 16,

                },
                name: {
                    fontSize: 10,
                    padding: [0, 10, 0, 4],
                    color: '#fff'
                },
                value: {
                    fontSize: 16,
                    color: '#fff'
                }
            }
        }
    },
}]
};
// 环形进度条
option = {
    backgroundColor: "",
    title: {
        text: '陈列合格终端',
        left: 'center'
    },
    series: [{
        name: 'HUAWEI',
        type: 'pie',
        clockWise: false,
        radius: [60, 100],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
            }
        },
        hoverAnimation: false,
        center: ['31%', '45%'],
        data: [{
            value: 80,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#79C2BC',
                            align: 'center',
                            fontSize: 25,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 16
                        }
                    },
                    formatter: function(params) {
                        return "{a|" + params.value + "%}";
                    },
                    position: 'center',

                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#79C2BC',
                    shadowColor: '#79C2BC',
                    shadowBlur: 3
                },
                barBorderRadius:[100,100,100,1000]
            }
        }, {
            value: 20,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#24375c'
                },
            }
        }]
    }]
}
// 柱状图
option = {
backgroundColor: '',
tooltip: {
    trigger: 'axis'
},
legend: {
    data: ['进货量', '存货量', '销量'],
    left: 140,
    top: 50,
    textStyle: {
        color: "#fff",
        fontSize: 14
    },
    itemWidth: 14,
    itemHeight: 14,
    itemGap: 100
},
xAxis: {
    type: 'category',
    data: ['窖藏', '金钻', '君品', '特许', '浓香', '头牌特曲', '头牌特曲','头牌特曲'],
    axisLine: {
        lineStyle: {
            color: 'white'

        }
    },
    axisTick: {
        show: false
    },
    axisLabel: {
        textStyle: {
            fontFamily: 'Microsoft YaHei'
        }
    },
},

yAxis: [{
        type: 'value',
        max: '1800',
        min: '0',
        axisTick: {
            show: false
        },
        splitNumber: 9,
        axisLine: {
            show: true,
            lineStyle: {
                color: 'white'
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {}
    }],
series: [{
        name: '进货量',
        type: 'bar',
        barWidth: '18%',
        yAxisIndex: 0,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#1D97FB'
                }, {
                    offset: 1,
                    color: '#6A4FF1'
                }]),
                barBorderRadius: 12,
            },
        },
        data: [1200, 1000, 900, 1500, 900, 1250, 1000, 1100, 900, 1478, 1000, 979]
    },
    {
        name: '存货量',
        type: 'bar',
        barWidth: '18%',
        yAxisIndex: 0,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#8CD66F'
                }, {
                    offset: 1,
                    color: '#19BEAF'
                }]),
                barBorderRadius: 11,
            }

        },
        data: [1000, 1200, 1100, 1400, 1100, 1000, 1380, 1500, 1100, 1155, 834, 808]
    },
    {
        name: '销量',
        type: 'line',
        symbolSize: 9,
        yAxisIndex: 0,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#FA704D'
                }, {
                    offset: 1,
                    color: '#E53447'
                }]),
                barBorderRadius: 14,
                borderWidth: 3
            }

        },
        lineStyle: {
            normal: {
                width: 4
            }
        },
        data: [1000, 1200, 1100, 1400, 1100, 1000, 1380]
    }
]
};
// 进度条
option = {
    backgroundColor: "gray",
    tooltip: {
        formatter(params) {
            return `<span style="color:"#FFF"">A：${params.marker}${params.value}个</span>`;
        }
    },
    legend: {
        data: ['A'],
        orient: 'vertical',
        itemWidth: 0,
        itemHeight: 0,
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 13,
            color: '#00D8FF'
        },
        formatter:'81%'
    },
    angleAxis: {
        max: 100,
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: false,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    polar: {
        radius: 120,
        center: ['50%', '50%'],
    },
    series: [{
        type: 'bar',
        roundCap: true,
        barWidth: 12,
        showBackground: true,
        backgroundStyle: {
            color: "#5C6891"
        },
        data: [60],
        coordinateSystem: 'polar',
        name: 'A',
        label: {
            show: true,
        },
        itemStyle: {
            normal: {
                opacity: 1,
                color: '#00D8FF'
            }
        }
    }],
};
// 2
option = {
    title: {
    text: '75%',
    textStyle: {
        color: '#00D8FF',
    //   color:'#E6A809',
        fontSize: 60
    },
    // subtext: '总分：100分',
    // subtextStyle: {
    //   color: '#909090',
    // },
    // itemGap: -10, // 主副标题距离
    left: 'center',
    top: 'center'
    },
    angleAxis: {
    max: 100, // 满分
    clockwise: false, // 逆时针
    // 隐藏刻度线
    axisLine: {
        show: false
    },
    axisTick: {
        show: false
    },
    axisLabel: {
        show: false
    },
    splitLine: {
        show: false
    }
    },
    radiusAxis: {
    type: 'category',
    // 隐藏刻度线
    axisLine: {
        show: false
    },
    axisTick: {
        show: false
    },
    axisLabel: {
        show: false
    },
    splitLine: {
        show: false
    }
    },
    polar: {
    center: ['50%', '50%'],
    radius: '100%' //图形大小
    },
    series: [{
    type: 'bar',
    data: [{
        name: '进度',
        value: 75,
        itemStyle: {
        normal: {
            color:'#00D8FF',
        //color:'#E6A809',
        }
        },
    }],
    coordinateSystem: 'polar',
    roundCap: true,
    barWidth: 40,
    barGap: '-100%', // 两环重叠
    z: 2,
    },{ // 灰色环
    type: 'bar',
    data: [{
        value: 100,
        itemStyle: {
        color: '#5D6894',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowBlur: 5,
        shadowOffsetY: 2
        }
    }],
    coordinateSystem: 'polar',
    roundCap: true,
    barWidth: 40,
    barGap: '-100%', // 两环重叠
    z: 1
    }]
};
// 转化率
option = {
    backgroundColor: '#000',
    angleAxis: {
        show: false,
        max: 100 * 360 / 270, //-45度到225度，二者偏移值是270度除360度
        type: 'value',
        startAngle: 225, //极坐标初始角度
        splitLine: {
            show: false
        }
    },
    barMaxWidth: 14, //圆环宽度
    radiusAxis: {
        show: false,
        type: 'category',
    },
    //圆环位置和大小
    polar: {
        center: ['50%', '50%'],
        radius: '180'
    }, 
    series: [{
            name: '线索总数',
            type: 'bar',
            data: [{ //上层圆环，显示数据
                value: 71,
                itemStyle: {
                    // color: { //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                    //     type: 'linear',
                    //     x: 0,
                    //     y: 0,
                    //     x2: 1, //从左到右 0-1
                    //     y2: 0,
                    //     colorStops: [{
                    //         offset: 0,
                    //         color: '#00D8FF'
                    //     }, {
                    //         offset: 1,
                    //         color: '#00D8FF'
                    //     }],
                    // },
                    color: '#00D8FF'
                },
                
            }],
            barGap: '-100%', //柱间距离,上下两层圆环重合
            coordinateSystem: 'polar',
            roundCap: true, //顶端圆角
            z: 5 //圆环层级，同zindex
        },
        { //下层圆环，显示最大值
            type: 'bar',
            data: [{
                value: 100,
                itemStyle: {
                    color: '#5F6D97'
                }
            }],
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            z: 1
        },
        //仪表盘
        {
            name: '转化商机',
            type: 'gauge',
            startAngle: 225, //起始角度，同极坐标
            endAngle: -45, //终止角度，同极坐标
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLabel: {
                show: false
            },
            pointer: {
                show: true,
                length: '20%',

            },
            detail: {
                formatter: function(e) {
                    return e + '%';
                },
                fontSize: 26,
                offsetCenter: [0, 80],
                borderRadius: 8,
            },
            data: [{
                value: 71,
                name: ''
            }]
        }
    ]
}