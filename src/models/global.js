/**
 * Created by lenovo on 2019/11/5.
 */
export default {
  namespace: 'global',
  state: {
    language: 'CN'
  },
  reducers: {
    changeLanguage(state, { data }) {
      return {
        ...state,
        language: data
      }
    }
  }
}