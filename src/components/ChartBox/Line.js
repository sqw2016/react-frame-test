/**
 * Created by lenovo on 2019/10/31.
 */
import React from 'react';
import ChartBox from './ChartBox';
import { fontColor, fontSize } from './theme';


class LineChart extends React.Component {

  chart(props) {
    const { xData, series, unit = 'mg/m³' } = props;


    return {
      itemStyle: {
        opacity: 0,
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {show: false},
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

export default LineChart;