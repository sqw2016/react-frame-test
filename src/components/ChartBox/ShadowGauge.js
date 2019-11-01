/**
 * Created by lenovo on 2019/10/31.
 */
import React from 'react';
import ChartBox from './ChartBox';
import { fontColor, fontSize } from './theme';

class ShadowGauge extends React.Component {

  chart(props) {
    const { min, max, name, splitNum, splitColors, data } = props;

    return {
      tooltip: {
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
          name: name,
          type: 'gauge',
          center: ['50%', '55%'],    // 默认全局居中
          min: min,
          max: max,
          splitNumber: splitNum,
          radius: '80%',
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              color: splitColors,
              width: 3,
              shadowColor: '#fff', //默认透明
              shadowBlur: 10
            }
          },
          axisLabel: {            // 坐标轴小标记
            textStyle: {       // 属性lineStyle控制线条样式
              fontWeight: 'bolder',
              color: '#fff',
              fontSize,
              shadowColor: '#fff', //默认透明
              shadowBlur: 10
            }
          },
          axisTick: {            // 坐标轴小标记
            length: 15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto',
              shadowColor: '#fff', //默认透明
              shadowBlur: 10
            }
          },
          splitLine: {           // 分隔线
            length: 20,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              width: 3,
              color: '#fff',
              shadowColor: '#fff', //默认透明
              shadowBlur: 10
            }
          },
          pointer: {           // 控制指针的宽度
            width: 5
          },
          title: {
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 25,
              fontStyle: 'italic',
              color: '#fff',
              shadowColor: '#fff', //默认透明
              shadowBlur: 10
            }
          },
          detail: {
            backgroundColor: 'rgba(30,144,255,0.8)',
            borderWidth: 1,
            borderColor: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 5,
            offsetCenter: [0, '50%'],       // x, y，单位px
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontSize: 25,
              color: '#fff'
            }
          },
          data: data
        },
      ]
    };
  }

  render() {
    return (
      <ChartBox chart={this.chart} {...this.props} />
    );
  }
}

export default ShadowGauge;