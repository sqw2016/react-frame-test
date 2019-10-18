/**
 * Created by lenovo on 2019/9/29.
 */
import React from 'react';

import styles from './FireControl.less';
import ChartBox from '../../components/ChartBox/ChartBox';
import fireImg from '../../assets/fire3.jpg';



class FireControl extends React.Component {

  render() {
    return (
      <div>
        {/*<ChartBox
          chartWidth={300}
          chartHeight={300}
        />*/}
        <img style={{width: '100%'}} src={fireImg} alt=""/>
      </div>
    );
  }
}

export default FireControl;