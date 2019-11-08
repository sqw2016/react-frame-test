/**
 * Created by lenovo on 2019/9/23.
 */
import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Icon, Select } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './index.less';
import routes from '../../router';
import SidebarMenu from '../../components/SidebarMenu';
import Language from '../../components/Language';
import { hasLogin } from '../../utils/user';


class BasicLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fold: false,
    };
    this.renderRoutes(routes);
  }

  componentDidMount() {
    this.hasLogin = hasLogin();
  }

  renderRoute = [];

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
    console.log(this.props);
    const { location } = this.props;
    return this.getMatchRouter(routes, location);
  }

  changeFold = () => {
    this.setState({
      fold: !this.state.fold
    })
  };

  renderRoutes = (routes) => {
    routes.forEach(item => {
        if (item.redirect) {
          this.renderRoute.push(
            <Redirect key={item.path} exact={item.exact} from={item.path} to={item.redirect} />
          );
        }
        if (item.component) {
          this.renderRoute.push(
            <Route key={item.path} exact={item.exact} path={item.path} component={item.component()} />
          );
        }
        if (item.children && item.children.length) {
          this.renderRoutes(item.children);
        }
      }
    )
  };

  languageChange = (val) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/changeLanguage',
      data: val
    })
  };

  render() {
    const { fold } = this.state;
    const currMenu = this.matchMenu();
    const { global } = this.props;

    return (
      <div className={styles.main}>
        <SidebarMenu
          fold={fold}
          routes={routes}
          {...this.props}
        />

        <div className={styles.contentBody}>

          <div className={styles.header}>
            <div className={styles.headerLeftTool}>
              <Icon onClick={this.changeFold} type={fold ? 'menu-unfold' : 'menu-fold'} className={styles.menuFoldIcon} />
              <div>
                {
                  currMenu.icon ? <Icon type={currMenu.icon} /> : ''
                }
                <Language id={`menu.${currMenu.name}`} />
              </div>
            </div>
            <div className={styles.headerRightTool}>
              <Select onChange={this.languageChange} defaultValue={global.language} className={styles.select}>
                <Select.Option value="EN">English</Select.Option>
                <Select.Option value="CN">中文</Select.Option>
              </Select>
              {
                this.hasLogin ? (
                  ''
                ) : (
                  <Link to="/user/login">
                    <Language id="user.login"/>
                  </Link>
                )
              }
            </div>
          </div>
          <div className={styles.content}>
            <Switch>
              {
                this.renderRoute
              }
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ global }) => {
  return {
    global
  }
};

export default connect(mapStateToProps)(BasicLayout);