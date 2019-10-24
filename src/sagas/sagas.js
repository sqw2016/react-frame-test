/**
 * Created by lenovo on 2019/10/21.
 */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { getRequest } from '../services/main';

import model from '../models'


function *fetchRequestData() {
  const data = yield call(getRequest);
  yield put({
    type: 'requestData/saveRequest',
    data,
  })
}
//  注册执行异步请求的action，当有多个同样的请求发起时，互不影响
function *mySaga() {

  const effectNames = Object.keys(model.effects);

  for (let i = 0, len = effectNames.length; i < len; i++) {
    yield takeEvery(`${model.namespace}/${effectNames[i]}`, action => model.effects[effectNames[i]](action, {call, put: function(action) {
      action.type = model.namespace + '/' + action.type;
      return put(action);
    }}));
  }

  // yield takeEvery("REQUEST_DATA_FETCH", fetchRequestData);
}
//  注册执行异步请求的action，当有多个同样的请求发起时，会取消正在pending的其他请求，只保留最后一个
// function *mySaga() {
//   yield takeLatest("REQUEST_DATA_FETCH", fetchRequestData);
// }

export default mySaga;