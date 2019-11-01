/**
 * Created by lenovo on 2019/10/30.
 */
import React from 'react';
import { Select, DatePicker, Button, Radio } from 'antd';
import { BarChart } from '../../components/ChartBox';
import DragContainer from '../../components/DragContainer';
import CardPanel from '../../components/CardPanel';

import styles from './EnergyConsumptionStatistic.less';

const { Option } = Select;


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
              xData={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
              ]}
              color={['#003366', '#4cabce']}
              unit="度"
              series={[
                {
                  type: 'bar',
                  name: '同期用电',
                  barGap: 0,
                  barWidth: '30%',
                  data: [
                    111, 102, 130, 124, 145, 116, 107, 118, 129, 110,
                    111, 102, 130, 124, 145, 116, 107, 118, 129, 110,
                    100, 110, 100, 124, 115, 116, 137, 128, 110, 130, 130,
                  ]
                },
                {
                  type: 'bar',
                  name: '用电情况',
                  barWidth: '30%',
                  data: [
                    115, 100, 110, 120, 105, 136, 117, 100, 119, 120,
                    100, 110, 100, 124, 115, 116, 137, 128, 110, 130,
                    null, null, null, null, null, null, null, null, null, null, null
                  ]
                }
              ]}
            />
          </CardPanel>
        </DragContainer>
      </div>
    );
  }
}

export default EnergyConsumptionStatistic;