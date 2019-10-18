/**
 * Created by lenovo on 2019/10/14.
 */
import React from 'react';

import FilterLink from './FilterLink';

function Footer() {
  return (
    <p>
      show:
      {' '}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </p>
  );
}

export default Footer;