/**
 * Created by lenovo on 2019/9/23.
 */
import React from 'react';
import ReactDom from 'react-dom';

import BasicRouter from './app';
import './global.less';

ReactDom.render(
  <BasicRouter />,
  document.getElementById('root')
);