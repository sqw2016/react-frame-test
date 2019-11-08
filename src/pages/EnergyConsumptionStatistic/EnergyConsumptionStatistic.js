/**
 * Created by lenovo on 2019/10/30.
 */
import React from 'react';
import { Select, DatePicker, Button, Radio } from 'antd';
import { BarChart, LineChart } from '../../components/ChartBox';
import DragContainer from '../../components/DragContainer';
import CardPanel from '../../components/CardPanel';
import CornerBorderBox from '../../components/CornerBorderBox';

import styles from './EnergyConsumptionStatistic.less';

const { Option } = Select;

const xData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
];
const barData = {
  data1: [
    1110, 1002, 1300, 1204, 1450, 1106, 1070, 1180, 1209, 1100,
    1101, 1020, 1300, 1240, 1405, 1106, 1007, 1018, 1290, 1100,
    1000, 1100, 1200, 1024, 1105, 1016, 1370, 1280, 1010, 1300, 1300,
  ],
  data2: [
    1150, 1000, 1010, 1020, 1050, 1306, 1170, 1000, 1190, 1200,
    1000, 1010, 1000, 1240, 1150, 1160, 1370, 1280, 1100, 1300,
    null, null, null, null, null, null, null, null, null, null, null
  ]
};
const lineData = {
  data1: [
    11, 11.2, 11.1, 11, 11, 11, 11, 11, 11, 11,
    11.1, 11.2, 11.3, 11.2, 11, 11, 11, 11, 11, 11,
    11, 11.1, 11.2, 11, 11, 11, 11, 11, 11, 11, 11.2
  ],
  data2: [
    11, 11.2, 11.5, 11, 11, 11, 11, 11, 11, 11,
    11.1, 11.4, 11.3, 11.2, 11, 11, 11, 11, 11,
    null, null, null, null, null, null, null, null, null, null, null
  ]
};

class EnergyConsumptionStatistic extends React.Component {
  constructor(props) {
    super(props);
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
        </div>
        <DragContainer
          rowHeight={100}
          onResizeStop={() => {this.setState({resize: 1})}}
          cols={12}
          width={'100%'}
        >
          <CardPanel
            title="用电能耗统计"
            leftTool={(
              <Radio.Group  className={styles.chartTypeRadio} defaultValue={2}>
                <Radio value={1}>周</Radio>
                <Radio value={2}>月</Radio>
                <Radio value={3}>季</Radio>
                <Radio value={4}>年</Radio>
              </Radio.Group>
            )}
            rightTool={(
              <div>
                <DatePicker />
                <Button style={{marginLeft: 10}} type="primary">确定</Button>
              </div>
            )}
            key="a"
            data-grid={{x: 0, y: 0, w: 12, h: 4}}
          >
            <BarChart
              xData={xData}
              color={['#003366', '#4cabce']}
              unit="度"
              series={[
                {
                  type: 'bar',
                  name: '同期用电',
                  barGap: 0,
                  barWidth: '30%',
                  data: barData.data1
                },
                {
                  type: 'bar',
                  name: '用电情况',
                  barWidth: '30%',
                  data: barData.data2
                }
              ]}
            />
          </CardPanel>
          <div
            key="b"
            data-grid={{x: 0, y: 4, w: 9, h: 3}}
          >
            <BarChart
              unit="度"
              title="能耗产出比"
              yAxisMin={10}
              color={['#003366', '#37d3ff']}
              xData={xData}
              series={[
                {

                  name: '2018年',
                  barWidth: '30%',
                  type: 'bar',
                  data: lineData.data1,
                },
                {
                  name: '2019年',
                  type: 'line',
                  data: lineData.data2,
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
                  }
                },
              ]}
            />
          </div>
          <div
            key="c"
            data-grid={{x: 9, y: 4, w: 3, h: 3}}
          >
            <CornerBorderBox className={styles.detailContainer}>
              <div className={styles.detailTips}>
                <div className={styles.detailTip}>
                  <span className={styles.tipNumUp}>11%</span>
                  <span>同比增加</span>
                </div>
                <div className={styles.detailTip}>
                  <span className={styles.tipNumDown}>-2%</span>
                  <span>环比增加</span>
                </div>
              </div>
              <BarChart
                xData={['']}
                xAxisShow={false}
                yAxisShow={false}
                grid={{
                  left: '8%',
                  top: 20,
                  right: '8%',
                  bottom: 70
                }}
                className={styles.detailChart}
                color={['#4cabce', '#003366']}
                hasCornerBorder={false}
                series={[
                  {
                    name: '今日能耗产出比',
                    barWidth: '20%',
                    label: {
                      show: true,
                      position: 'top',
                      color: 'white'
                    },
                    type: 'bar',
                    data: [11.2],
                  },
                  {

                    name: '去年同期',
                    barWidth: '20%',
                    label: {
                      show: true,
                      position: 'top',
                      color: 'white'
                    },
                    type: 'bar',
                    data: [11],
                  }
                ]}
              />
            </CornerBorderBox>
          </div>
        </DragContainer>
      </div>
    );
  }
}

export default EnergyConsumptionStatistic;