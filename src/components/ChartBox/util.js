/**
 * Created by lenovo on 2019/10/31.
 */
const splitJointTip = function (params) {
  return params.reduce((pre, curr) => {
    return `${pre}${curr.seriesName}: ${curr.value || '-'} <br/>`
  }, params[0].axisValue ? `${params[0].axisValue} <br/>` : '');
};

export {
  splitJointTip,
}