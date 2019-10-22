/**
 * Created by lenovo on 2019/10/21.
 */
import axios from 'axios';

const ax = axios.create({
  baseURL: 'https://www.sumeishop.net/wx/',
  timeout: 6000,
  headers: {}
});

const request = function (url, method = 'GET', params) {
  return ax.request({
    url,
    method,
    ...params
  }).then(res => {
    if (res.status === 200) { // 请求成功返回
      return res.data;
    } else {
      throw new Error('error', res)
    }
  }).catch(err => {
    console.log(err);
  });
};

export default request;