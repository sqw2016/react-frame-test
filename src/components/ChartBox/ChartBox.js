/**
 * Created by lenovo on 2019/9/29.
 */
import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
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
import { fontColor, fontSize, bgColor } from './theme';
import { splitJointTip } from './util';

class ChartBox extends React.Component {

  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.state = {
      canvasWidth: 100,
    }
  }

  componentDidMount() {
    this.setState({
      canvasWidth: this.chartRef.current.parentNode.offsetWidth
    });
  }

  componentDidUpdate() {
    this.chart();
  }


  chart() {
    const {
      title,
      chart,
      resize = true,
      color,
      grid = {
        left: '8%',
        right: '8%',
        top: 70,
        bottom: 70
      },
      showToolTipOver
    } = this.props;
    const myChart = echarts.init(this.chartRef.current);

    myChart.setOption({
      backgroundColor: bgColor,
      title: {
        text: title,
        left: 'center',
        textStyle: {
          color: fontColor,
          fontSize: fontSize + 5,
        },
      },
      grid,
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
      ...chart(this.props),
    });
    resize && myChart.resize();
  }

  render() {
    const { hasCornerBorder = true, className, ...rest } = this.props;
    return hasCornerBorder ?(
      <CornerBorderBox className={ `${styles.chartBox} ${className}`} {...rest}>
        <div ref={this.chartRef} className={styles.chartBox}>

        </div>
      </CornerBorderBox>
    ) : (
      <div ref={this.chartRef} className={`${styles.chartBox} ${className}`}>

      </div>
    );
  }
}

export default ChartBox;