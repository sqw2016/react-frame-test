/**
 * Created by lenovo on 2019/10/14.
 */

import React from 'react';

function Link({active, children, onClick}) {
  return active ? (
    <span>{children}</span>
  ) : (
    <a href="" onClick={e => {e.preventDefault(); onClick();}}>{children}</a>
  )
}

export default Link;