/**
 * Created by lenovo on 2019/10/31.
 */
/**
 * Created by lenovo on 2019/10/31.
 */
import React from 'react';
import ChartBox from './ChartBox';
import { fontColor, fontSize } from './theme';
import { splitJointTip } from './util';

class BarChart extends React.Component {

  chart(props) {
    const { xData, series, color, unit = 'mg/m³' } = props;


    return {
      grid: {
        left: '8%',
        right: '8%',
        top: 70,
        bottom: 70
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      color,
      xAxis: [
        {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: fontColor,
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
        name: unit,
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
            color: fontColor,
          },
        },
      },
      series,
    };
  }

  render() {
    return (
      <ChartBox chart={this.chart} {...this.props} />
    );
  }
}

export default BarChart;