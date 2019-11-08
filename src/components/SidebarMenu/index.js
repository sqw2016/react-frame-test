/**
 * Created by lenovo on 2019/9/27.
 */
import React from 'react';
import { NavLink } from 'react-router-dom'
import { Icon } from 'antd';

import logo from '../../assets/logo.png';
import styles from './index.less';
import Language, { getTextByKey } from '../Language';

const FOLDSIDERWIDTH = 80;
const UNFOLDSIDERWIDTH = 250;

class SidebarMenu extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      supPath: [],
      overPath: [], // 鼠标悬浮显示的路由
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
    const { fold } = this.props;
    const foldStyle = fold ? {
      left: grade === 1 ? FOLDSIDERWIDTH + 5 : UNFOLDSIDERWIDTH + 5
    } : {};
    return menus && menus.length ? (
      <ul style={foldStyle} className={fold ? styles.unFoldSubMenu : styles.subMenu}>
        {
          menus.map(item => {
            const isOpen = this.isChildShow(item.path);
            return (
              <li
                key={item.path}
                onMouseEnter={
                  (e) => {
                    e.preventDefault();
                    this.menuItemMouseEnter(item.path);
                  }
                }
                onMouseLeave={
                  e => {
                    e.preventDefault();
                    this.menuItemMouseLeave(item.path);
                  }
                }
              >
                {
                  item.children && item.children.length ? (
                    <NavLink
                      style={{paddingLeft: (grade+1)*15}}
                      activeClassName={styles.menuItemActive}
                      className={styles.menuItem}
                      to={item.path}
                      title={getTextByKey(`menu.${item.name}`)}
                      onClick={(e) => { e.preventDefault(); this.menuTitleClick(item.path, false) }}
                    >
                      <div style={{width: '90%'}}>
                        { item.icon ? <Icon type={item.icon} /> : ''}
                        <div className={styles.menuItemText} >
                          <Language id={`menu.${item.name}`} />
                        </div>
                      </div>
                      <Icon type={fold ? 'right' : isOpen ? 'up' : 'down'} />
                    </NavLink>
                  ) : (
                    <NavLink title={getTextByKey(`menu.${item.name}`)} style={{paddingLeft: (grade+1)*15}} activeClassName={styles.menuItemActive} className={styles.menuItem} to={item.path} >
                      {/*<Icon type={item.icon} />*/}
                      <div className={styles.menuItemText} >
                        <Language id={`menu.${item.name}`} />
                      </div>
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

  // 判断子元素是否显示
  isChildShow(path) {
    const { supPath, overPath } = this.state;
    const { fold } = this.props;
    return fold ? overPath.indexOf(path) !== -1 : supPath.indexOf(path) !== -1;
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
    const { fold } = this.props;
    if (!fold) return;
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

  // 鼠标进入菜单项
  menuItemMouseEnter(path, isFirst) {
    const { fold } = this.props;
    if (!fold) return;
    let { overPath } = this.state;
    const index = overPath.indexOf(path);
    if(isFirst) {
      overPath = [path];
    } else if (index === -1) {
      overPath.push(path);
    }
    this.setState({
      overPath: [...overPath]
    })
  }
  // 鼠标离开菜单项
  menuItemMouseLeave(path, isFirst) {
    const { fold } = this.props;
    if (!fold) return;
    let { overPath } = this.state;
    const index = overPath.indexOf(path);
    if (isFirst) {
      overPath = [];
    } else {
      index > 0 && overPath.splice(index, 1);
    }
    setTimeout(() => {
      this.setState({
        overPath
      })
    }, 100)

  }

  render() {
    const {fold, routes} = this.props;
    console.log(this.state.overPath);
    return (
      <div style={{width: `${fold ? FOLDSIDERWIDTH : UNFOLDSIDERWIDTH}px`}} className={styles.sidebar}>
        <NavLink className={styles.logoBox} activeClassName={styles.logoBoxActive} to="/">
            <img className={styles.logo} src={logo} alt="" />
            <span style={{opacity: fold ? 0 : 1}}>东方金信</span>
        </NavLink>
        <ul>
          {
            routes.map(item => {
              const isOpen = this.isChildShow(item.path);
              return item.name ? (
                <li
                  key={item.path}
                  onMouseEnter={
                    (e) => {
                      e.preventDefault();
                      this.menuItemMouseEnter(item.path, true);
                    }
                  }
                  onMouseLeave={
                    e => {
                      e.preventDefault();
                      this.menuItemMouseLeave(item.path, true);
                    }
                  }
                >
                  <NavLink title={getTextByKey(`menu.${item.name}`)} onClick={(e) => { e.preventDefault(); this.menuTitleClick(item.path) }} style={{paddingLeft: fold ? 30 : 15}} className={styles.menuItem} to={item.path} >
                    <div className={styles.menuItemText}>
                      <Icon type={item.icon} />
                      {
                        fold ? '' : <Language id={`menu.${item.name}`} />
                      }
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