/**
 * Created by lenovo on 2019/10/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import { cartNumAdd, cartNumMinus, cartNumChange } from '../../components/Todo/actions';

function BuyCartBuildByRedux({ goodsList, numAdd, numMinus, numChange }) {
  const ih = '20px';
  const butStyle = {
    color: 'black',
    border: 1,
    background: 'white',
    textAlign: 'center',
    width: '20px',
    height: ih,
    lineHeight: ih,
    cursor: 'pointer',
    padding: 0,
  };
  return (
    <div>
      {
        goodsList.map((item, index) => {
          return (
            <div style={{
              width: 400,
              borderRadius: 10,
              background: 'gray',
              boxShadow: ' #c3986b 0px 0px 8px 0px',
              marginBottom: 30,
              padding: 10
            }} key={item.id}>
              <div>{item.name}</div>
              <div style={{fontSize: 12}}>{item.desc}</div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>￥{item.price}</span>
                <div style={{
                  display: 'flex',
                  width: 100,
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <button onClick={(e) => { e.preventDefault();numMinus(index); }} style={butStyle}>-</button>
                  <input
                    value={item.num}
                    onChange={(e) => { numChange(index, e.currentTarget.value); }}
                    style={{
                      width: 50,
                      fontSize: 13,
                      color: 'black',
                      height: ih,
                      lineHeight: ih
                    }} type="number" />
                  <button onClick={(e) => { e.preventDefault();numAdd(index); }} style={butStyle}>+</button>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

const mapStateToProps = ({ goodsList }) => {
  return {
    goodsList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    numAdd: index => { dispatch(cartNumAdd(index)); },
    numMinus: index => { dispatch(cartNumMinus(index)); },
    numChange: (index, num) => { dispatch(cartNumChange(index, num)); }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyCartBuildByRedux);