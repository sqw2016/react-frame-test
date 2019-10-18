/**
 * Created by lenovo on 2019/9/29.
 */
import React from 'react';
import { Select, Button, DatePicker } from 'antd';
import moment from 'moment';

import styles from './GasBlowdown.less';
import ChartBox from '../../components/ChartBox/ChartBox';

const { Option } = Select;

const color = ['#63DA5E', '#8179D7', '#EB7960'];

const PHOption = {
  title: '硫酸雾PH值',
  min: 0,
  max: 14,
  name: '硫酸雾PH值',
  splitNum: 14,
  splitColors: [[0.43, '#ff4500'],[0.64, 'lime'],[1, '#ff4500']],
  data: [{value: 7, name: ''}]
};

/**
 * 0-35：优
 * 35-75： 良
 * 75-115：轻度污染
 * 115-150：中度污染
 * 150-250：重度污染
 * 250-：严重污染
 *
 */
const SuspendedSolidsOption = {
  title: 'PM2.5',
  min: 0,
  max: 300,
  name: 'PM2.5',
  splitNum: 10,
  splitColors: [
    [0.117, '#31cf2d'],
    [0.25, '#ffce26'],
    [0.383, '#ff8100'],
    [0.50, '#ff0000'],
    [0.833, '#a8004e'],
    [1, '#6a00e6']
  ],
  data: [{value: 70, name: 'μg/m³'}]
};

/**
 *      时均    日均    年均
 * 一级：0.15    0.1   0.05
 * 二级：0.15    0.1   0.05
 * 三级：0.3     0.15  0.1
 *
 */
const nitrogenOption = {
  title: '一氧化氮',
  min: 0,
  max: 0.5,
  name: '一氧化氮',
  splitNum: 10,
  splitColors: [[0.2, 'lime'],[1, '#ff4500']],
  data: [{value: 0.08, name: 'mg/m³'}]
};

/**
 * 最高： 0.015
 *
 * 监控极限值：0.0015
 */
const phosphorusOption = {
  title: '汞',
  min: 0,
  max: 0.015,
  name: '汞',
  splitNum: 10,
  splitColors: [[0.1, 'lime'],[1, '#ff4500']],
  data: [{value: 0.03, name: 'mg/m³'}]
};

const option0 = {
  title: '氯化氰',
  min: 0,
  max: 2.3,
  name: '氯化氰',
  splitNum: 5,
  splitColors: [[0.013, 'lime'],[1, '#ff4500']],
  data: [{value: 0.005, name: 'mg/m³'}]
};

const option1 = {
  title: '氨',
  min: 0,
  max: 50,
  name: '氨',
  splitNum: 10,
  splitColors: [[0.6, 'lime'],[1, '#ff4500']],
  data: [{value: 28, name: 'mg/m³'}]
};

/**
 * 最高：生产：1200，使用：700
 *
 * 监测点：0.5
 */
const option2 = {
  title: '二氧化硫',
  min: 0,
  max: 1200,
  name: '二氧化硫',
  splitNum: 5,
  splitColors: [[0.0042, 'lime'],[1, '#ff4500']],
  data: [{value: 1.0, name: 'mg/m³'}]
};

/**
 *最高：0.5
 *
 *监测点： 0.01
 */
const option3 = {
  title: '苯并芘',
  min: 0,
  max: 0.5,
  name: '苯并芘',
  splitNum: 5,
  splitColors: [[0.02, 'lime'],[1, '#ff4500']],
  data: [{value: 0.01, name: 'ug/m³'}]
};

const xData = ['0h', '1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h',
  '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h', '24h'];

const sulfData1 = [5, 5, 5.2, 5.3, 5, 5.1, 5.2, 7, 9, 15, 25, 25, 25, 28, 30, 35, 38,
  37, 35, 30, 25, 20, 15, 10, 5];
const sulfData2 = [0, 1, 1.2, 1.3, 1, 1.1, 1.2, 3, 6, 12, 22, 22, 22, 26, 26, 28, 32,
  32, 28, 26, 20, 14, 10, 5, 0];
const sulfData3 = [13, 13.2, 13.3, 13.4, 13.3, 13.2, 13.1, 13, 13, 13, 13, 18, 18, 18, 18, 18, 25,
  20, 18, 13, 13, 13, 13, 13, 13];


const NOData1 = [0, 2, 3, 5, 4, 2, 4, 10, 30, 50, 70, 70, 70, 80, 90, 100, 110,
  100, 95, 75, 60, 45, 30, 20, 5];
const NOData2 = [30, 32, 33, 35, 34, 32, 34, 50, 60, 72, 78, 79, 79, 83, 85, 90, 90,
  90, 85, 75, 65, 55, 40, 30, 25];
const NOData3 = [10, 12, 13, 15, 14, 12, 14, 13, 14, 15, 14, 30, 31, 30, 31, 30, 40,
  38, 32, 29, 25, 20, 15, 16, 15];

const PMData1 = [0, 0.4, 0.5, 0.5, 0.4, 0.5, 0.4, 0.3, 0.4, 1.2, 5, 8, 8, 12, 14, 18, 18,
  18, 16, 10, 6, 3, 1, 0.5, 0.2];
const PMData2 = [2.4, 2.6, 2.7, 2.6, 2.8, 2.5, 2.4, 3.3, 3.4, 6.2, 8, 10, 12, 14, 18, 20, 20,
  20, 20, 16, 12, 8, 4, 2, 0];
const PMData3 = [4, 4.4, 4.6, 4.5, 4.3, 4.5, 4.4, 4.3, 4.4, 5.2, 5.5, 6, 6, 7, 8, 8, 8,
  7, 6, 5.5, 5, 4, 3.5, 3, 2.8];

const monitorTargets = [
  {
    name: '二氧化硫',
    markLine: 35,
    lineData: [sulfData1, sulfData2, sulfData3],
    max: 50,
    split: 0.7
  },
  {
    name: '氮氧化物',
    markLine: 100,
    lineData: [NOData1, NOData2, NOData3],
    max: 150,
    split: 0.66
  },
  {
    name: '颗粒物',
    markLine: 10,
    lineData: [PMData1, PMData2, PMData3],
    max: 20,
    split: 0.5
  },
];

class FireControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      time: '2019-09-08',
      currOver: [0, 0, 0] // 三厂当前选中的时间点的二氧化硫浓度
    }
  }

  // 二氧化硫图鼠标悬浮时触发的事件
  sulfurMouseOver = (data) => {
    const { currOver } = this.state;
    if (currOver[0] === data[0].data &&
      currOver[1] === data[1].data &&
      currOver[2] === data[2].data
    ) {
      return;
    }
    currOver[0] = data[0].value;
    currOver[1] = data[1].value;
    currOver[2] = data[2].value;
    this.setState({
      currOver: [...currOver]
    });
  };

  tabChange = (index) => {
    this.setState({
      tabIndex: index,
    })
  };

  render() {
    const { currOver, tabIndex, time } = this.state;

    const target = monitorTargets[tabIndex];

    return (
      <div className={styles.main}>
        <div style={{width: '100%', marginBottom: 20}}>
          <span>请选择厂区：</span>
          <Select defaultValue="1">
            <Option value="1">A厂区</Option>
            <Option value="2">B厂区</Option>
            <Option value="3">C厂区</Option>
          </Select>
          <span style={{paddingLeft: 20}}>
            请选择时间段：
          </span>
          <DatePicker
            defaultValue={moment(time)}
          />
          <Button style={{marginLeft: 20}} type="primary">确定</Button>
        </div>
        {/*<ChartBox
          chartWidth={200}
          chartHeight={200}
          className={styles.chartBox}
          chartOptions={PHOption}
        />
        <ChartBox
          chartWidth={200}
          chartHeight={200}
          className={styles.chartBox}
          type="basic"
          chartOptions={SuspendedSolidsOption}
        />
        <ChartBox
          chartWidth={200}
          chartHeight={200}
          className={styles.chartBox}
          chartOptions={nitrogenOption}
        />
        <ChartBox
          chartWidth={200}
          chartHeight={200}
          className={styles.chartBox}
          chartOptions={phosphorusOption}
        />
        <ChartBox
          chartWidth={200}
          chartHeight={200}
          className={styles.chartBox}
          chartOptions={option1}
        />
        <ChartBox
          chartWidth={200}
          chartHeight={200}
          className={styles.chartBox}
          chartOptions={option2}
        />
        <ChartBox
          chartWidth={200}
          chartHeight={200}
          className={styles.chartBox}
          chartOptions={option3}
        />
        <ChartBox
          chartWidth={200}
          chartHeight={200}
          className={styles.chartBox}
          chartOptions={option0}
        />*/}
        <div className={styles.tabContainer}>
          <ul>
            <li onClick={this.tabChange.bind(null, 0)} className={ tabIndex === 0 ? styles.tabActive : styles.liColor}>二氧化硫</li>
            <li onClick={this.tabChange.bind(null, 1)} className={ tabIndex === 1 ? styles.tabActive : styles.liColor}>氮氧化物</li>
            <li onClick={this.tabChange.bind(null, 2)} className={ tabIndex === 2 ? styles.tabActive : styles.liColor}>颗粒物</li>
          </ul>
        </div>
        <div className={styles.lineChartContainer}>
          <ChartBox
            type="line"
            title={`${time} A厂区${target.name}浓度监测`}
            className={styles.lineChartBox}
            xData={xData}
            series={[
              {
                name: '一厂',
                type: 'line',
                data: target.lineData[0],
                markLine: {
                  silent: true,
                  label: {
                    textStyle: {
                      fontSize: 20
                    }
                  },
                  symbolSize: 15,
                  lineStyle: {
                    color: 'red',
                    type: 'dashed',
                    width: 1.5
                  },
                  data: [{
                    yAxis: target.markLine
                  }]
                }
              },
              {
                name: '二厂',
                type: 'line',
                data: target.lineData[1]
              },
              {
                name: '三厂',
                type: 'line',
                data: target.lineData[2]
              },
            ]}
            showToolTipOver={this.sulfurMouseOver}
            color={color}
          />
          <div className={styles.lineChartDetail}>
            <ChartBox
              className={styles.chartBox}
              chartOptions={{
                title: `一厂${target.name}浓度`,
                min: 0,
                max: target.max,
                splitNum: 5,
                splitColors: [[target.split, 'lime'],[1, '#ff4500']],
                data: [{value: currOver[0], name: 'mg/m³'}]
              }}
            />
            <ChartBox
              className={styles.chartBox}
              chartOptions={{
                title: `二厂${target.name}浓度`,
                min: 0,
                max: target.max,
                splitNum: 5,
                splitColors: [[target.split, 'lime'],[1, '#ff4500']],
                data: [{value: currOver[1], name: 'mg/m³'}]
              }}
            />
            <ChartBox
              className={styles.chartBox}
              chartOptions={{
                title: `三厂${target.name}浓度`,
                min: 0,
                max: target.max,
                splitNum: 5,
                splitColors: [[target.split, 'lime'],[1, '#ff4500']],
                data: [{value: currOver[2], name: 'mg/m³'}]
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FireControl;