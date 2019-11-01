/**
 * Created by lenovo on 2019/9/29.
 */
import React from 'react';
import { Select, Button } from 'antd';

import styles from './FluidBlowDown.less';
import { BasicGauge, ShadowGauge } from '../../components/ChartBox';
import DragContainer from '../../components/DragContainer';

const { Option } = Select;


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

class FluidBlowDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 200
    }
  }

  resizeOver = (layout) => {
    this.setState({
      width: this.state.width + 1
    })
  };

  render() {
    return (
      <div className={styles.main}>
        <div style={{width: '100%', marginBottom: 20}}>
          <span>请选择厂区：</span>
          <Select defaultValue="1">
            <Option value="1">北京丰台厂区</Option>
            <Option value="2">上海浦东厂区</Option>
            <Option value="3">深圳龙华厂区</Option>
          </Select>
          <span style={{paddingLeft: 15}}>请选择厂房：</span>
          <Select defaultValue="1">
            <Option value="1">丰台一厂</Option>
            <Option value="2">丰台二厂</Option>
            <Option value="3">丰台三厂</Option>
          </Select>
          <span style={{paddingLeft: 15}}>请选择产线：</span>
          <Select defaultValue="1">
            <Option value="1">产线一</Option>
            <Option value="2">产线二</Option>
            <Option value="3">产线三</Option>
          </Select>
          <span style={{paddingLeft: 15}}>请选择机台：</span>
          <Select defaultValue="1">
            <Option value="1">机台一</Option>
            <Option value="2">机台二</Option>
            <Option value="3">机台三</Option>
          </Select>
          <Button style={{marginLeft: 20}} type="primary">确定</Button>
        </div>
        <DragContainer
          rowHeight={100}
          // className={styles.layout}
          onResizeStop={this.resizeOver}
          cols={12}
          width={'100%'}
        >
          <div
            key="a"
            data-grid={{x: 0, y: 0, w: 2, h: 2}}
          >
            <ShadowGauge
              {...PHOption}
            />
          </div>
          <div
            key="b"
            data-grid={{x: 2, y: 0, w: 2, h: 2}}
          >
            <BasicGauge
              {...SuspendedSolidsOption}
            />
          </div>
          <div
            key="c"
            data-grid={{x: 4, y: 0, w: 2, h: 2}}
          >
            <ShadowGauge
              {...nitrogenOption}
            />
          </div>
          <div
            key="d"
            data-grid={{x: 6, y: 0, w: 2, h: 2}}
          >
            <ShadowGauge
              {...phosphorusOption}
            />
          </div>
          <div
            key="e"
            data-grid={{x: 8, y: 0, w: 2, h: 2}}
          >
            <ShadowGauge
              {...option1}
            />
          </div>
          <div
            key="f"
            data-grid={{x: 10, y: 0, w: 2, h: 2}}
          >
            <ShadowGauge
              {...option2}
            />
          </div>
          <div
            key="g"
            data-grid={{x: 0, y: 2, w: 2, h: 2}}
          >
            <ShadowGauge
              {...option3}
            />
          </div>
          <div
            key="h"
            data-grid={{x: 2, y: 2, w: 2, h: 2}}
          >
            <ShadowGauge
              {...option0}
            />
          </div>
        </DragContainer>
      </div>
    );
  }
}

export default FluidBlowDown;