/**
 * Created by lenovo on 2019/9/29.
 */
import React from 'react';
import { Select, Radio, DatePicker, Button } from 'antd';

import BarChart from '../../components/MyEcharts/BarChart';

import styles from './ElectricManage.less';

const xData = ['1月', '2月', '3月', '4月', '5月'];

const ele1 = [320, 332, 301, 334, 390]; // 产线1用电量
const ele2 = [220, 182, 191, 234, 290]; // 产线2用电量
const ele3 = [150, 232, 250, 154, 190]; // 产线3用电量

const prod1 = [3200, 3300, 3000, 3342, 3890]; // 产线1产量
const prod2 = [2200, 1820, 1910, 2340, 2900]; // 产线2产量
const prod3 = [1500, 2320, 1980, 1540, 1900]; // 产线3产量

const prodMaxAndMin = {min: 0, max: 8000,}; // 产能坐标值

const color = ['#003366', '#006699', '#4cabce'];
const subColor = ['#155c8a', '#73f358', 'red'];

const { Option } = Select;
const { RangePicker } = DatePicker;
class ElectricManage extends React.Component {

  constructor(props) {
    super(props);
  }

  getEnergyConsumptionProportion(prods, eles) {
    const r  = [];
    for (let i = 0, len = prods.length; i < len; i++) {
      r.push((eles[i]*10000 / prods[i]).toFixed(2))
    }
    return r;
  }

  render() {
    return (
      <div>
        <div>
          <span>请选择厂区：</span>
          <Select defaultValue="1">
            <Option value="1">A厂区</Option>
            <Option value="2">B厂区</Option>
            <Option value="3">C厂区</Option>
          </Select>
          <span style={{paddingLeft: 20}}>
            请选择时间段：
          </span>
          <RangePicker />
          <Button style={{marginLeft: 20}} type="primary">确定</Button>
        </div>
        <div className={styles.chartTypeRadio}>
          <Radio.Group defaultValue={2}>
            <Radio value={1}>天</Radio>
            <Radio value={2}>月</Radio>
            <Radio value={3}>季</Radio>
            <Radio value={4}>年</Radio>
          </Radio.Group>
        </div>
        <BarChart
          title="A厂区用电记录(万千瓦时)"
          xData={xData}
          color={color}
          series={[
            {
              name: '产线一',
              type: 'bar',
              barWidth: 40,
              barGap: 0,
              data: ele1
            },
            {
              name: '产线二',
              type: 'bar',
              barWidth: 40,
              data: ele2
            },
            {
              name: '产线三',
              type: 'bar',
              barWidth: 40,
              data: ele3
            },
          ]}
        />
        <div className={styles.subChartContainer}>
          <BarChart
            title="产线一用电量及产量"
            xData={xData}
            className={styles.subChart}
            color={subColor}
            sYAxis={prodMaxAndMin}
            series={[
              {
                name: '用电量',
                type: 'line',
                data: ele1
              },
              {
                name: '产量',
                type: 'line',
                yAxisIndex: 1,
                itemStyle: {
                  grid: {
                    left: 5
                  }
                },
                data: prod1
              },
              {
                name: '能耗比例',
                type: 'line',
                yAxisIndex: 1,
                lineStyle: {
                  type: 'dashed',
                },
                itemStyle: {
                  grid: {
                    left: 5
                  }
                },
                data: this.getEnergyConsumptionProportion(prod1, ele1)
              }
            ]}
          />
          <BarChart
            title="产线二用电量及产量"
            xData={xData}
            className={styles.subChart}
            color={subColor}
            sYAxis={prodMaxAndMin}
            series={[
              {
                name: '用电量',
                type: 'line',
                data: ele2
              },
              {
                name: '产量',
                type: 'line',
                yAxisIndex: 1,
                data: prod2
              },
              {
                name: '能耗比例',
                type: 'line',
                yAxisIndex: 1,
                lineStyle: {
                  type: 'dashed',
                },
                itemStyle: {
                  grid: {
                    left: 5
                  }
                },
                data: this.getEnergyConsumptionProportion(prod2, ele2)
              }
            ]}
          />
          <BarChart
            title="产线三用电量及产量"
            xData={xData}
            className={styles.subChart}
            color={subColor}
            sYAxis={prodMaxAndMin}
            series={[
              {
                name: '用电量',
                type: 'line',
                markArea: {
                  label: {
                    color: 'rgba(248, 35, 28, 1)'
                  },
                  itemStyle: {
                    color: 'rgba(108, 35, 28, 0.5)',
                  },
                  data: [
                    [{
                      name: '能耗异常',
                      label: {
                        position: 'insideTop',
                        fontSize: 18
                      },
                      x: '42%'
                    }, {
                      x: '58%'
                    }]
                  ]
                },
                data: ele3
              },
              {
                name: '产量',
                type: 'line',
                yAxisIndex: 1,
                data: prod3
              },
              {
                name: '能耗比例',
                type: 'line',
                yAxisIndex: 1,
                lineStyle: {
                  type: 'dashed',
                },
                itemStyle: {
                  grid: {
                    left: 5
                  }
                },
                data: this.getEnergyConsumptionProportion(prod3, ele3)
              }
            ]}
          />

        </div>
      </div>
    )
  }
}

export default ElectricManage;