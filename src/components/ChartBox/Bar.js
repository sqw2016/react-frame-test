/**
 * Created by lenovo on 2019/10/31.
 */
import React from 'react';
import ChartBox from './ChartBox';
import { fontColor, fontSize } from './theme';

class BarChart extends React.Component {

  chart(props) {
    const {
      xData,
      series,
      xAxisShow = true,
      yAxisShow = true,
      unit = 'mg/m³',
      yAxisMin
    } = props;

    return {
      xAxis: [
        {
          type: 'category',
          show: xAxisShow,
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
        show: yAxisShow,
        type: 'value',
        min: yAxisMin,
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