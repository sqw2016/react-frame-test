/**
 * Created by lenovo on 2019/10/9.
 */
import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/graphic';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/markArea';

const FONTCOLOR = '#eee';

import styles from './MyEcharts.less';

const fontSize = 20;

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.barRef = React.createRef();
  }

  componentDidMount() {
    this.chart();
  }

  componentDidUpdate() {
    this.chart();
  }

  chart() {

    const { title, xData, sYAxis, series, color } = this.props;

    const myChart = echarts.init(this.barRef.current);

    const sya = sYAxis ? {
      ...{
        type: 'value',
        axisLine: {
          lineStyle: {
            color: FONTCOLOR,
          },
        },
        axisLabel: {
          fontSize,
        },
      },
      ...sYAxis
    } : {};

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
        icon: 'roundRect',
        textStyle: {
          color: FONTCOLOR,
          fontSize,
        },
        bottom: 5
      },
      color,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '15%',
        right: '15%',
        top: 40,
        bottom: 70
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {show: false},
          axisLabel: {
            fontSize,
          },
          axisLine: {
            lineStyle: {
              color: FONTCOLOR,
            },
          },
          data: xData,
        }
      ],
      yAxis: [
        {
          type: 'value',
          min: 0,
          max: 400,
          axisLabel: {
            fontSize,
          },
          axisLine: {
            lineStyle: {
              color: FONTCOLOR,
            },
          },
        },
        sya
      ],
      series,
    });
  }

  render() {
    const { className } = this.props;

    return (
      <div ref={this.barRef} className={`${styles.chartContainer} ${className}`}>

      </div>
    );
  }
}

export default BarChart;