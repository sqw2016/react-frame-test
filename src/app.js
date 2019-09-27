/**
 * Created by lenovo on 2019/9/23.
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BasicLayout from './layouts/BasicLayout';

function BasicRouter() {
  return (
    <Router>
      <Route path="/" component={BasicLayout} />
    </Router>
  );
}

export default BasicRouter;