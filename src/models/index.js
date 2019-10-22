/**
 * Created by lenovo on 2019/10/22.
 */
import { getRequest } from '../services/main';

export default {
  namespace: 'requestData',
  state: {
    rd: [],
  },
  effects: {
    *fetchRequestData(action, {call, put}) {
      console.log(arguments)
      const data = yield call(getRequest);
      yield put({
        type: 'requestData/saveRequest',
        data,
      })
    }
  },
  reducers: {
    saveRequest(state, {data}) {
      return {
        ...state,
        rd: data ? data.data.hotGoodsList : []
      }
    }
  }
}