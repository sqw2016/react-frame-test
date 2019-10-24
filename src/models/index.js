/**
 * Created by lenovo on 2019/10/22.
 */
import { getRequest, getGoodsList } from '../services/main';

export default {
  namespace: 'requestData',
  state: {
    rd: [],
    gl: {}
  },
  effects: {
    *fetchRequestData(action, {call, put}) {
      const data = yield call(getRequest);
      yield put({
        type: 'saveRequest',
        data,
      })
    },
    *fetchGoodsList(action, {call, put}) {
      const data = yield call(getGoodsList, action.id);
      yield put({
        type: 'saveGoodsList',
        data
      })
    }
  },
  reducers: {
    saveRequest(state, {data}) {
      return {
        ...state,
        rd: data ? data.data.hotGoodsList : []
      }
    },
    saveGoodsList(state, {data}) {
      return {
        ...state,
        gl: data
      }
    }
  }
}