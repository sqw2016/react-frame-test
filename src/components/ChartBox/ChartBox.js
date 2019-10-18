/**
 * Created by lenovo on 2019/9/29.
 */
import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/graphic';
import 'echarts/lib/chart/gauge';

import styles from './ChartBox.less';
import CornerBorderBox from '../CornerBorderBox';

const FONTCOLOR = '#eee';

const fontSize = 20;

class ChartBox extends React.Component {

  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.doChart();
  }

  componentDidUpdate() {
    this.doChart();
  }

  doChart() {
    const { type } = this.props;
    switch (type) {
      case 'basic': {
        this.basicGaugeChart();
        break;
      }

      case 'line': {
        this.lineChart();
        break;
      }

      default: {
        this.chart();
        break;
      }
    }
  }

  chart() {
    const {chartOptions: {title, min, max, name, splitNum, splitColors, data}} = this.props;
    const myChart = echarts.init(this.chartRef.current);

    myChart.setOption({
      backgroundColor: '#212123',
      title: {
        text: title,
        left: 'center',
        textStyle: {
          color: FONTCOLOR,
          fontSize: 25,
        },
      },
      tooltip : {
        formatter: "{a}: {c}"
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name:name,
          type:'gauge',
          center : ['50%', '55%'],    // 默认全局居中
          min:min,
          max:max,
          splitNumber: splitNum,
          radius: '80%',
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              color: splitColors,
              width: 3,
              shadowColor : '#fff', //默认透明
              shadowBlur: 10
            }
          },
          axisLabel: {            // 坐标轴小标记
            textStyle: {       // 属性lineStyle控制线条样式
              fontWeight: 'bolder',
              color: '#fff',
              fontSize,
              shadowColor : '#fff', //默认透明
              shadowBlur: 10
            }
          },
          axisTick: {            // 坐标轴小标记
            length :15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto',
              shadowColor : '#fff', //默认透明
              shadowBlur: 10
            }
          },
          splitLine: {           // 分隔线
            length :20,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              width:3,
              color: '#fff',
              shadowColor : '#fff', //默认透明
              shadowBlur: 10
            }
          },
          pointer: {           // 控制指针的宽度
            width: 5
          },
          title : {
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 25,
              fontStyle: 'italic',
              color: '#fff',
              shadowColor : '#fff', //默认透明
              shadowBlur: 10
            }
          },
          detail : {
            backgroundColor: 'rgba(30,144,255,0.8)',
            borderWidth: 1,
            borderColor: '#fff',
            shadowColor : '#fff', //默认透明
            shadowBlur: 5,
            offsetCenter: [0, '50%'],       // x, y，单位px
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontSize: 25,
              color: '#fff'
            }
          },
          data:data
        },
      ]
    });
  }

  basicGaugeChart() {
    const {chartOptions: {title, min, max, name, splitNum, splitColors, data}} = this.props;
    const myChart = echarts.init(this.chartRef.current);

    myChart.setOption({
      backgroundColor: '#212123',
      title: {
        text: title,
        left: 'center',
        textStyle: {
          color: FONTCOLOR,
        },
      },
      tooltip : {
        formatter: "{a}: {c}"
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name:name,
          type:'gauge',
          center : ['50%', '55%'],    // 默认全局居中
          min:min,
          max:max,
          pointer: {           // 控制指针的宽度
            width: 5
          },
          title : {
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 15,
              fontStyle: 'italic',
              color: '#fff',
              shadowColor : '#fff', //默认透明
              shadowBlur: 10
            }
          },
          splitNumber: splitNum,
          axisLine: {            // 坐标轴线
            lineStyle: {
              color: splitColors,// 属性lineStyle控制线条样式
              width: 15
            }
          },
          splitLine: {           // 分隔线
            length: 15,         // 属性length控制线长
          },
          radius: '80%',
          data:data
        },
      ]
    });
  }

  lineChart() {
    const { title, xData, series, color, showToolTipOver } = this.props;

    const myChart = echarts.init(this.chartRef.current);

    myChart.setOption({
      backgroundColor: '#212123',
      title: {
        text: title,
        left: 'center',
        textStyle: {
          color: FONTCOLOR,
          fontSize: 25,
        },
      },
      legend: {
        zlevel: 1111,
        itemWidth: 30,
        icon: 'roundRect',
        textStyle: {
          color: FONTCOLOR,
          fontSize,
        },
        bottom: 10
      },
      color,
      tooltip: {
        trigger: 'axis',
        textStyle: {
          fontSize
        },
        // alwaysShowContent: true,
        axisPointer: {
          type: 'shadow'
        },
        formatter: function(params) {
          showToolTipOver(params)
          return `${params[0].axisValue} <br/>
          ${params[0].seriesName}: ${params[0].value} <br/>
          ${params[1].seriesName}: ${params[1].value} <br/>
          ${params[2].seriesName}: ${params[2].value}
          `
        }
      },
      grid: {
        left: '8%',
        right: '8%',
        top: 70,
        bottom: 70
      },
      itemStyle: {
        opacity: 0,
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {show: false},
          axisLine: {
            lineStyle: {
              color: FONTCOLOR,
            },
          },
          axisLabel: {
            fontSize,
          },
          interval: 2,
          data: xData,
        }
      ],
      yAxis: {
        name: 'mg/m³',
        nameTextStyle: {
          fontSize,
        },
        axisLabel: {
          fontSize,
        },
        type: 'value',
        splitLine: {
          lineStyle: {
            color: '#37333a',
            type: 'dashed'
          }
        },
        axisLine: {
          lineStyle: {
            color: FONTCOLOR,
          },
        },
      },
      series,
    });
  }

  render() {
    const { className } = this.props;
    return (
      <CornerBorderBox className={className}>
        <div ref={this.chartRef} className={styles.chartBox}>

        </div>
      </CornerBorderBox>
    );
  }
}

export default ChartBox;