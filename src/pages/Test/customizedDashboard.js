/**
 * Created by lenovo on 2019/11/25.
 */
import React from 'react';

import DragContainer from '../../components/DragContainer';
import { Button, Modal, Input, Form, Icon, Row, Col } from 'antd';

import { LineChart, ShadowGauge } from '../../components/ChartBox';

import styles from './index.less';
const color = ['#63DA5E', '#8179D7', '#EB7960'];

const sulfData1 = [5, 5, 5.2, 5.3, 5, 5.1, 5.2, 7, 9, 15, 25, 25, 25, 28, 30, 35, 38,
  37, 35, 30, 25, 20, 15, 10, 5];
const sulfData2 = [0, 1, 1.2, 1.3, 1, 1.1, 1.2, 3, 6, 12, 22, 22, 22, 26, 26, 28, 32,
  32, 28, 26, 20, 14, 10, 5, 0];
const sulfData3 = [13, 13.2, 13.3, 13.4, 13.3, 13.2, 13.1, 13, 13, 13, 13, 18, 18, 18, 18, 18, 25,
  20, 18, 13, 13, 13, 13, 13, 13];

const xData = ['0h', '1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h',
  '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h', '24h'];

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

const fulLayout = {
  wrapperCol: {
    xs: { span: 24 },
  },
};

const monitorTargets = [
  {
    name: '二氧化硫',
    markLine: 35,
    lineData: [sulfData1, sulfData2, sulfData3],
    max: 50,
    split: 0.7
  },
];

const FormItem = Form.Item;

class CustomizedDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      chartSeries: [0],
      maxLayoutPointer: {
        x: 0,
        y: 0,
      }
    }
  }

  showModal = () => {
    this.setState({
      modalShow: true
    })
  };

  addSeries = () => {
    const { validateFields } = this.props.form;
    const { chartSeries } = this.state;
    const len = chartSeries.length;
    validateFields([`chartName${chartSeries[len-1]}`, `chartType${chartSeries[len-1]}`, `chartDataIndex${chartSeries[len-1]}`], (errs, val) => {
      console.log(errs)
      if (errs) return;
      chartSeries.push( (chartSeries[len - 1] + 1) );
      this.setState({
        chartSeries: [...chartSeries]
      })
      console.log(val);
    });
  };

  delSeries = (index) => {
    const { chartSeries } = this.state;
    chartSeries.splice(index, 1);
    this.setState({
      chartSeries: [...chartSeries]
    })
  };

  hideModal = () => {
    this.setState({
      modalShow: false,
    })
  };

  configOk = () => {
    const { validateFields, getFieldsValue } = this.props.form;
    validateFields((err, val) => {
      if (err) return;
      const { chartSeries } = this.state;
      const obj = {
        api: val.api,
        chartTitle: val.chartTitle,
        xAisDataIndex: val.xAisDataIndex,
        yAisUnit: val.yAisUnit,
        series: [],
      };
      chartSeries.forEach(item => {
        obj.series.push({
          chartName: val[`chartName${item}`],
          chartType: val[`chartType${item}`],
          chartDataIndex: val[`chartDataIndex${item}`],
        })
      });
      console.log(obj);
    })

  };

  render() {
    const { modalShow, chartSeries } = this.state;

    const { getFieldDecorator } = this.props.form;

    const target = monitorTargets[0];

    return (
      <div>
        <div>
          <Button onClick={this.showModal} type="primary">新增</Button>
        </div>
        <DragContainer
          cols={12}
          rowHeight={100}
          onResizeStop={() => {this.setState({resize: 1})}}
          width={'100%'}
        >
          <div
            key="1"
            data-grid={{x: 0, y: 0, w: 8, h: 6}}
          >
            <LineChart
              title={`A厂区浓度监测`}
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
              color={color}
            />
          </div>
          <div
            key="2"
            data-grid={{x: 8, y: 0, w: 2, h: 3}}
          >
            123
          </div>
          <div
            key="3"
            data-grid={{x: 10, y: 0, w: 2, h: 3}}
          >
            123
          </div>
          <div
            key="4"
            data-grid={{x: 8, y: 2, w: 2, h: 3}}
          >
            1234
          </div>
        </DragContainer>
        <Modal
          title="配置dashboard面板"
          visible={modalShow}
          onOk={this.configOk}
          onCancel={this.hideModal}
        >
          <Form
            {...formItemLayout}
          >
            <FormItem label="请输入取数API">
              {
                getFieldDecorator('api', {
                  rules: [
                    {
                      required: true,
                      message: '请输入取数API'
                    }
                  ]
                })(<Input placeholder="请输入取数API" />)
              }
            </FormItem>
            <FormItem label="图表标题">
              {
                getFieldDecorator('chartTitle', {
                })(<Input placeholder='请输入图表标题' />)
              }
            </FormItem>
            <FormItem label="x轴取数字段">
              {
                getFieldDecorator('xAisDataIndex', {
                  rules: [
                    {
                      required: true,
                      message: '请输入x轴取数字段'
                    }
                  ]
                })(<Input placeholder='请输入x轴取数字段' />)
              }
            </FormItem>
            <FormItem label="y轴单位">
              {
                getFieldDecorator('yAisUnit', {
                })(<Input placeholder='请输入y轴单位' />)
              }
            </FormItem>
            {
              chartSeries.map((item, index) => (
                <Row key={item}>
                  <Col className={styles.chartContentItemTitle} style={{color: 'black', textAlign: 'right'}} span={6}>
                    图表内容：
                  </Col>
                  <Col span={18} className={styles.chartContentForm}>
                    <Row gutter={5} >
                      <Col span={7}>
                        <FormItem {...fulLayout}>
                          {
                            getFieldDecorator(`chartName${item}`, {
                              rules: [
                                {
                                  required: true,
                                  message: '请输入名称'
                                }
                              ]
                            })(<Input placeholder='请输入名称' />)
                          }
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem  {...fulLayout}>
                          {
                            getFieldDecorator(`chartType${item}`, {
                            })(<Input placeholder='请选择类型' />)
                          }
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem  {...fulLayout}>
                          {
                            getFieldDecorator(`chartDataIndex${item}`, {
                              rules: [
                                {
                                  required: true,
                                  message: '请输入取数字段'
                                }
                              ]
                            })(<Input placeholder='请输入取数字段' />)
                          }
                        </FormItem>
                      </Col>
                      <Col className={styles.chartContextAdd} span={3}>
                        {
                          index === chartSeries.length - 1 ? <Icon onClick={this.addSeries} className={styles.iconBtn} style={{color: "#52c41a", verticalAlign: 'middle'}} type="plus-circle" /> :
                            <Icon onClick={this.delSeries.bind(null, index)} className={styles.iconBtn} style={{color: "grey", verticalAlign: 'middle'}} type="minus-circle" />
                        }
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ))
            }
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create()(CustomizedDashboard);