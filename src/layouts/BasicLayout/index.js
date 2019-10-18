/**
 * Created by lenovo on 2019/9/23.
 */
import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Icon } from 'antd';

import styles from './index.less';
import routes from '../../router';
import SidebarMenu from '../../components/SidebarMenu';

class BasicLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fold: false
    }
  }

  getMatchRouter(routes, location) {
    for (let i = 0, len = routes.length; i < len; i++) {
      if (routes[i].path === location.pathname) {
        return routes[i];
      } else if(routes[i].children && routes[i].children.length) {
        const cr = this.getMatchRouter(routes[i].children, location);
        if (cr) {
          return cr;
        }
      }
    }
    return false;
  }

  matchMenu() {
    const { location } = this.props;
    return this.getMatchRouter(routes, location);
  }

  changeFold = () => {
    this.setState({
      fold: !this.state.fold
    })
  };

  renderRoutes = (routes) => {
    return routes.map(item => item.redirect ? (
      <Redirect key={item.path} exact from={item.path} to={item.redirect} />
    ) : (
      item.children && item.children.length ? this.renderRoutes(item.children) :
        <Route key={item.path} exact={item.exact} path={item.path} component={item.component} />
    ));
  };

  render() {
    const { fold } = this.state;
    const currMenu = this.matchMenu();
    return (
      <div className={styles.main}>

        <SidebarMenu
          fold={fold}
          routes={routes}
          {...this.props}
        />

        <div className={styles.contentBody}>

          <div className={styles.header}>
            <Icon onClick={this.changeFold} type={fold ? 'menu-unfold' : 'menu-fold'} className={styles.menuFoldIcon} />
            <div>
              <Icon type={currMenu.icon} />
              <span>{currMenu.name}</span>
            </div>
          </div>
          <div className={styles.content}>
            <Switch>
              {
                this.renderRoutes(routes)
              }
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicLayout;