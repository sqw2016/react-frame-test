/**
 * Created by lenovo on 2019/10/21.
 */
let rd = [];
const requestData = (state = [], action) => {
  switch(action.type) {
    case 'GET_REQUEST': {
      rd = action.data ? action.data.data.hotGoodsList : [];
      return rd;
    }
    default:
      return rd;
  }
};

export default requestData;