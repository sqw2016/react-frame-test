/**
 * Created by lenovo on 2019/11/5.
 */
import React from 'react';
import { connect } from 'react-redux';
import { findTextByKey } from './util';
import app from '../ReduxSaga';

function Language(props) {
  const { global, id } = props;

  return (
    <span>{findTextByKey(global.language, id)}</span>
  );
}

const mapStateToProps = ({ global }) => {
  return {
    global
  }
};

export const getTextByKey = (id) => {
  const { language } = app.store.getState().global;
  return findTextByKey(language, id);
};

export default connect(mapStateToProps)(Language);