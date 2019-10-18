/**
 * Created by lenovo on 2019/9/25.
 */
import About from './pages/About';
import BasicLayout from './layouts/BasicLayout';
import FireControl from './pages/FireControl/FireControl';
import ElectricManage from './pages/ElectricManage/ElectricManage';
import GasBlowDown from './pages/GasBlowdown/GasBlowdown';
import FluidBlowDown from './pages/FluidBlowdown/FluidBlowdown';
import EquipManage from './pages/EquipManage/EquipManage';
import ReduxTest from './pages/Test/ReduxTest'
import BuyCartBuildByRedux from './pages/Test/BuyCartBuildByRedux';
import DraggableBox from './pages/Test/DraggableBoxTest';

const routes = [{
  path: '/',
  redirect: '/monitor/fire-control',
}, {
  name: '安全管理',
  path: '/monitor',
  icon: 'monitor',
  component: BasicLayout,
  children: [{
    name: '消防安全',
    path: '/monitor/fire-control',
    component: FireControl,
  }, {
    name: '有害物质外泄',
    path: '/monitor/harmful',
    component: About,
  },
    {
    name: '放射危害',
    path: '/monitor/radioactivity',
    component: About,

  }]
}, {
  name: '环保管理',
  path: '/environmental',
  icon: 'fund',
  component: BasicLayout,
  children: [{
    name: '工业废水排放',
    path: '/environmental/fluid-water',
    component: FluidBlowDown,
  },
    {
      name: '工业废气排放',
      path: '/environmental/fluid-gas',
      component: GasBlowDown,
    },
    {
    name: '噪声污染',
    path: '/environmental/noise',
    component: About,
  }],
}, {
  name: '节能管理',
  path: '/energy',
  icon: 'bulb',
  component: BasicLayout,
  children: [{
    name: '用电管理',
    path: '/energy/electric',
    component: ElectricManage,
  }, {
    name: '用水管理',
    path: '/energy/water',
    component: About,
  }, {
    name: '用气管理',
    path: '/energy/gas',
    component: About,
  }]
}, {
  name: '设备管理',
  path: '/equip',
  icon: 'cluster',
  component: BasicLayout,
  children: [{
    name: '设备信息管理',
    path: '/equip/basic',
    component: EquipManage,
  }, {
    name: '设备传感器关联',
    path: '/equip/sensor',
    component: About,
  }, {
    name: '设备指标参数管理',
    path: '/equip/target',
    component: About,
  }]
}, {
  name: '系统配置管理',
  path: '/setting',
  icon: 'setting',
  component: BasicLayout,
  children: [{
    name: '组织机构管理',
    path: '/setting/institution',
    component: About,
  }, {
    name: '用户权限管理',
    path: '/setting/author',
    component: About,
  }, {
    name: '资源权限管理',
    path: '/setting/resource',
    component: About,
  }, {
    name: '数据采集配置',
    path: '/setting/collect',
    component: About,
  }]
}, {
  name: '测试',
  path: '/test',
  icon: 'experiment',
  component: BasicLayout,
  children: [{
    name: 'Redux测试',
    path: '/test/redux',
    component: ReduxTest,
  }, {
    name: 'Redux购物车',
    path: '/test/cart',
    component: BuyCartBuildByRedux,
  }, {
    name: '可拖拽盒子',
    path: '/test/drag',
    component: DraggableBox,
  }]
}];

export default routes;