/**
 * Created by lenovo on 2019/10/14.
 */
import React from 'react';
import Footer from '../../components/Todo/Footer';
import AddTodo from '../../components/Todo/AddTodo';
import VisibleTodoList from '../../components/Todo/VisibleTodoList';
import { connect } from 'react-redux';

function ReduxTest({ cart }) {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <div>
        <h1>购物车</h1>
        {
          cart.length ? cart.map((item, index) => {
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
                  <span>X{item.num}</span>
                </div>
              </div>
            );
          }) : ''
        }
      </div>
    </div>
  );
}

const mapStateToProps = ({ goodsList }) => {
  console.log(goodsList)
  return {
    cart: goodsList.gl.filter( g => g.num > 0 )
  }
};

export default connect(mapStateToProps)(ReduxTest);