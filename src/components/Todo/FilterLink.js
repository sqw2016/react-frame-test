/**
 * Created by lenovo on 2019/10/14.
 */
import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from './actions';

import Link from './Link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;