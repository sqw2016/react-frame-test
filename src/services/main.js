/**
 * Created by lenovo on 2019/10/21.
 */
import request from '../utils/request';

export function getRequest() {
  return request('home/index');
}


// https://www.sumeishop.net/wx/goods/category?id=1036012

export function getGoodsList(id) {
  return request('goods/category', 'GET', { params: {id}});
}