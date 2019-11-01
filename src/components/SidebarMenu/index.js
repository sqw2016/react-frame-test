/**
 * Created by lenovo on 2019/9/27.
 */
import React from 'react';
import { NavLink } from 'react-router-dom'
import { Icon } from 'antd';

import logo from '../../assets/logo.png';
import styles from './index.less';

class SidebarMenu extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      supPath: []
    }
  }

  componentDidMount() {
    this.getLocalMatchSup(this.props);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.getLocalMatchSup(nextProps);
  // }

  /* 渲染子菜单， menus：子菜单配置， grade：子菜单等级 */
  renderChildMenu(menus, grade = 1) {
    return menus && menus.length ? (
      <ul className={styles.subMenu}>
        {
          menus.map(item => {
            const { supPath } = this.state;
            const isOpen = supPath.indexOf(item.path) !== -1;
            return (
              <li key={item.path}>
                {
                  item.children && item.children.length ? (
                    <NavLink
                      style={{paddingLeft: (grade+1)*15}}
                      activeClassName={styles.menuItemActive}
                      className={styles.menuItem}
                      to={item.path}
                      onClick={(e) => { e.preventDefault(); this.menuTitleClick(item.path, false) }}
                    >
                      <div>
                        { item.icon ? <Icon type={item.icon} /> : ''}
                        <span className={styles.menuItemText} >{item.name}</span>
                      </div>
                      <Icon type={isOpen ? 'up' : 'down'} />
                    </NavLink>
                  ) : (
                    <NavLink style={{paddingLeft: (grade+1)*15}} activeClassName={styles.menuItemActive} className={styles.menuItem} to={item.path} >
                      {/*<Icon type={item.icon} />*/}
                      <span className={styles.menuItemText} >{item.name}</span>
                    </NavLink>
                  )
                }
                {
                  isOpen ? this.renderChildMenu(item.children, grade + 1) : ''
                }
              </li>
            )
          })
        }
      </ul>
    ) : '';
  }

  getMatchRouter(routes, location, r) {
    for (let i = 0, len = routes.length; i < len; i++) {
      if (routes[i].path === location.pathname) {
        return routes[i];
      } else if(routes[i].children && routes[i].children.length) {
        const cr = this.getMatchRouter(routes[i].children, location, r);
        if (cr) {
          r.push(routes[i].path);
          return cr;
        }
      }
    }
    return false;
  }

  /* 获取当前路径的上层路径 */
  getLocalMatchSup(props) {
    const {routes, location} = props;
    const { supPath } = this.state;
    const r = [];
    this.getMatchRouter(routes, location, r);
    if(r.toString() !== supPath.toString()) {
      this.setState({
        supPath: r
      })
    }
  }

  menuTitleClick(path, isFirst = true) {
    let { supPath } = this.state;
    const index = supPath.indexOf(path);
    if (index !== -1) {
      supPath.splice(index, 1);// 删除元素
    } else { // 添加元素
      if (isFirst) {
        supPath = [path];
      } else {
        supPath.push(path);
      }
    }
    this.setState({
      supPath: [...supPath]
    })
  }

  render() {
    const {fold, routes} = this.props;
    const { supPath } = this.state;
    return (
      <div style={{width: `${fold ? 80 : 250}px`}} className={styles.sidebar}>
        <NavLink className={styles.logoBox} activeClassName={styles.logoBoxActive} to="/">
            <img className={styles.logo} src={logo} alt="" />
            <span style={{opacity: fold ? 0 : 1}}>东方金信</span>
        </NavLink>
        <ul>
          {
            routes.map(item => {
              const isOpen = supPath.indexOf(item.path) !== -1;
              return item.name ? (
                <li key={item.path}>
                  <NavLink onClick={(e) => { e.preventDefault(); this.menuTitleClick(item.path) }} style={{paddingLeft: fold ? 30 : 15}} className={styles.menuItem} to={item.path} >
                    <div style={{overflow: 'hidden', flexShrink: 0}}>
                      <Icon type={item.icon} />
                      <span style={{opacity: fold ? 0 : 1}} className={styles.menuItemText} >{item.name}</span>
                    </div>
                    { fold && item.children && item.children.length ? '' : <Icon type={isOpen ? 'up' : 'down'} />}
                  </NavLink>
                  {
                    isOpen ? this.renderChildMenu(item.children) : ''
                  }
                </li>
              ) : '';
            })
          }
        </ul>
      </div>
    );
  }
}

export default  SidebarMenu;