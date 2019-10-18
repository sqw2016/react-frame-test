/**
 * Created by lenovo on 2019/10/15.
 */
const gl = [
  {
    id: 1,
    name: '天神水',
    desc: '一滴即可让你晋升天神之境^_^',
    num: 0,
    price: 110
  }, {
    id: 2,
    name: '生命之泉',
    num: 0,
    desc: '一滴可枯骨生肉',
    price: 10
  }, {
    id: 3,
    name: '天堂之剑',
    num: 0,
    desc: '上帝曾经使用过的剑器',
    price: 11110
  }, {
    id: 4,
    name: '盘古斧',
    num: 0,
    desc: '盘古大神开天所用之器',
    price: 9999999999
  }
];
const goodsList = (state = [], action) => {
  switch(action.type) {
    case 'GOODS_ADD': {
      gl[action.index].num++;
      return [...gl];
    }
    case 'GOODS_MINUS': {
      if (gl[action.index].num) {
        gl[action.index].num--;
      }
      return [...gl];
    }
    case 'GOODS_CHANGE': {
      if (action.num) {
        gl[action.index].num = Number(action.num).toString();
      } else {
        gl[action.index].num = 0;
      }
      return [...gl];
    }
    default:
      return gl;
  }
};

export default goodsList;