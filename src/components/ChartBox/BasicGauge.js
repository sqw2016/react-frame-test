/**
 * Created by lenovo on 2019/10/31.
 */
import React from 'react';
import ChartBox from './ChartBox';
import { fontColor, fontSize } from './theme';

class BasicGauge extends React.Component {

  chart(props) {
    const { min, max, name, splitNum, splitColors, data } = props;

    return {
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
    };
  }

  render() {
    return (
      <ChartBox chart={this.chart} {...this.props} />
    );
  }
}

export default BasicGauge;