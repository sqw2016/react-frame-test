/**
 * Created by lenovo on 2019/9/25.
 */
import About from './pages/About';
import Home from './pages/Home';

const routes = [{
  path: '/',
  redirect: '/fire-control',
}, {
  name: '安全管理',
  path: '/monitor',
  icon: 'monitor',
  component: About,
  children: [{
    name: '消防安全',
    path: '/fire-control',
    component: About,
  }, {
    name: '有害物质(液气)外泄',
    path: '/harmful',
    component: About,
  }, {
    name: '放射性',
    path: '/radioactivity',
    component: About,

  }]
}, {
  name: '环保管理',
  path: '/analyse',
  icon: 'fund',
  component: Home,
  children: [{
    name: '液体/气体排放',
  }, {
    name: '噪音'
  }],
}, {
  name: '节能管理',
  path: '/predict',
  icon: 'bulb',
  component: About,
  children: [{
    name: '用电管理'
  }, {
    name: '用水管理'
  }, {
    name: '用气管理'
  }]
}, {
  name: '设备管理',
  path: '/equip',
  icon: 'bulb',
  component: About,
  children: [{
    name: '设备信息管理'
  }, {
    name: '设备传感器关联'
  }, {
    name: '设备指标参数管理'
  }]
}, {
  name: '系统配置管理',
  path: '/setting',
  icon: 'bulb',
  component: About,
  children: [{
    name: '组织机构管理'
  }, {
    name: '用户权限管理'
  }, {
    name: '资源权限管理'
  }, {
    name: '数据采集配置'
  }]
}];

export default routes;