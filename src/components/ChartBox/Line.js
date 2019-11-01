/**
 * Created by lenovo on 2019/10/31.
 */
import React from 'react';
import ChartBox from './ChartBox';
import { fontColor, fontSize } from './theme';
import { splitJointTip } from './util';

class LineChart extends React.Component {

  chart(props) {
    const { xData, series, color, showToolTipOver, unit = 'mg/m³' } = props;


    return {
      legend: {
        zlevel: 1111,
        itemWidth: 30,
        icon: 'roundRect',
        textStyle: {
          color: fontColor,
          fontSize,
        },
        bottom: 10
      },
      color,
      tooltip: {
        trigger: 'axis',
        textStyle: {
          fontSize,
        },
        // alwaysShowContent: true,
        axisPointer: {
          type: 'shadow'
        },
        formatter: function(params) {
          showToolTipOver && showToolTipOver(params);
          return splitJointTip(params);
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