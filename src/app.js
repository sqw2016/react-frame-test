/**
 * Created by lenovo on 2019/9/23.
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

import BasicLayout from './layouts/BasicLayout';

function BasicRouter() {
  return (
    <Router>
      <Route path="/" component={BasicLayout} />
    </Router>
  );
}

export default BasicRouter;