/**
 * Created by lenovo on 2019/9/25.
 */

const routes = [{
  path: '/',
  exact: true,
  redirect: '/monitor/fire-control',
}, {
  name: '安全管理',
  path: '/monitor',
  icon: 'monitor',
  children: [{
    name: '消防安全',
    path: '/monitor/fire-control',
    component: () => require('./pages/FireControl/FireControl').default,
  }, {
    name: '有害物质外泄',
    path: '/monitor/harmful',
    component: () => require('./pages/About').default,
  },
    {
    name: '放射危害',
    path: '/monitor/radioactivity',
    component: () => require('./pages/About').default,

  }]
}, {
  name: '环保管理',
  path: '/environmental',
  icon: 'fund',
  children: [{
    name: '工业废水排放',
    path: '/environmental/fluid-water',
    component: () => require('./pages/FluidBlowDown/FluidBlowDown').default,
  },
    {
      name: '工业废气排放',
      path: '/environmental/fluid-gas',
      component: () => require('./pages/GasBlowdown/GasBlowdown').default,
    },
    {
    name: '噪声污染',
    path: '/environmental/noise',
    component: () => require('./pages/About').default,
  }],
}, {
  name: '节能管理',
  path: '/energy',
  icon: 'bulb',
  children: [{
    name: '用电管理',
    exact: true,
    path: '/energy/electric',
    // redirect: '/energy/electric-manage',
    children: [
      {
        name: '用电管理',
        path: '/energy/electric-manage',
        component: () => require('./pages/ElectricManage/ElectricManage').default,
      },
      {
        name: '能耗统计分析',
        path: '/energy/electric-analysis',
        component: () => require('./pages/EnergyConsumptionStatistic/EnergyConsumptionStatistic').default,
      }
    ]
  }, {
    name: '用水管理',
    path: '/energy/water',
    component: () => require('./pages/About').default,
  }, {
    name: '用气管理',
    path: '/energy/gas',
    component: () => require('./pages/About').default,
  }]
}, {
  name: '设备管理',
  path: '/equip',
  icon: 'cluster',
  children: [{
    name: '设备信息管理',
    path: '/equip/basic',
    component: () => require('./pages/EquipManage/EquipManage').default,
  }, {
    name: '设备传感器关联',
    path: '/equip/sensor',
    component: () => require('./pages/About').default,
  }, {
    name: '设备指标参数管理',
    path: '/equip/target',
    component: () => require('./pages/About').default,
  }]
}, {
  name: '系统配置管理',
  path: '/setting',
  icon: 'setting',
  children: [{
    name: '组织机构管理',
    path: '/setting/institution',
    component: () => require('./pages/About').default,
  }, {
    name: '用户权限管理',
    path: '/setting/author',
    component: () => require('./pages/About').default,
  }, {
    name: '资源权限管理',
    path: '/setting/resource',
    component: () => require('./pages/About').default,
  }, {
    name: '数据采集配置',
    path: '/setting/collect',
    component: () => require('./pages/About').default,
  }]
}, {
  name: '测试',
  path: '/test',
  icon: 'experiment',
  children: [{
    name: 'Redux测试',
    path: '/test/redux',
    component: () => require('./pages/Test/ReduxTest').default,
  }, {
    name: 'Redux购物车',
    path: '/test/cart',
    component: () => require('./pages/Test/BuyCartBuildByRedux').default,
  }, {
    name: '可拖拽盒子',
    path: '/test/drag',
    component: () => require('./pages/Test/DraggableBoxTest').default,
  }, {
    name: '图片预览插件',
    path: '/test/swipe',
    component: () => require('./pages/Test/PhotoSwipeTest').default,
  }]
}];

export default routes;