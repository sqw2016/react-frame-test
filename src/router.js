/**
 * Created by lenovo on 2019/9/25.
 */

const routes = [{
  path: '/',
  exact: true,
  redirect: '/monitor/fire-control',
}, {
  name: 'security-management',
  path: '/monitor',
  icon: 'monitor',
  children: [{
    name: 'fire-control',
    path: '/monitor/fire-control',
    component: () => require('./pages/FireControl/FireControl').default,
  }, {
    name: 'harmful-substance',
    path: '/monitor/harmful',
    component: () => require('./pages/About').default,
  },
    {
    name: 'radioactive',
    path: '/monitor/radioactivity',
    component: () => require('./pages/About').default,

  }]
}, {
  name: 'environmental-protection',
  path: '/environmental',
  icon: 'fund',
  children: [{
    name: 'industrial-sewage',
    path: '/environmental/fluid-water',
    component: () => require('./pages/FluidBlowDown/FluidBlowDown').default,
  },
    {
      name: 'industrial-gas',
      path: '/environmental/fluid-gas',
      component: () => require('./pages/GasBlowdown/GasBlowdown').default,
    },
    {
    name: 'noise',
    path: '/environmental/noise',
    component: () => require('./pages/About').default,
  }],
}, {
  name: 'energy-conservation',
  path: '/energy',
  icon: 'bulb',
  children: [{
    name: 'electricity-use',
    exact: true,
    path: '/energy/electric',
    // redirect: '/energy/electric-manage',
    children: [
      {
        name: 'electricity-use',
        path: '/energy/electric-manage',
        component: () => require('./pages/ElectricManage/ElectricManage').default,
      },
      {
        name: 'statistical-analysis-energy-consumption',
        path: '/energy/electric-analysis',
        component: () => require('./pages/EnergyConsumptionStatistic/EnergyConsumptionStatistic').default,
      }
    ]
  }, {
    name: 'water-use',
    path: '/energy/water',
    component: () => require('./pages/About').default,
  }, {
    name: 'gas-use',
    path: '/energy/gas',
    component: () => require('./pages/About').default,
  }]
}, {
  name: 'equipment',
  path: '/equip',
  icon: 'cluster',
  children: [{
    name: 'equipment-info',
    path: '/equip/basic',
    component: () => require('./pages/EquipManage/EquipManage').default,
  }, {
    name: 'sensor-relate',
    path: '/equip/sensor',
    component: () => require('./pages/About').default,
  }, {
    name: 'index-manage',
    path: '/equip/target',
    component: () => require('./pages/About').default,
  }]
}, {
  name: 'sys-setting',
  path: '/setting',
  icon: 'setting',
  children: [{
    name: 'institution-manage',
    path: '/setting/institution',
    component: () => require('./pages/About').default,
  }, {
    name: 'author-manage',
    path: '/setting/author',
    component: () => require('./pages/About').default,
  }, {
    name: 'resource-permission',
    path: '/setting/resource',
    component: () => require('./pages/About').default,
  }, {
    name: 'collection-config',
    path: '/setting/collect',
    component: () => require('./pages/About').default,
  }]
}, {
  name: 'test',
  path: '/test',
  icon: 'experiment',
  children: [
    /*{
    name: 'redux-test',
    path: '/test/redux',
    component: () => require('./pages/Test/ReduxTest').default,
  }, */{
    name: 'redux-test',
    path: '/test/cart',
    component: () => require('./pages/Test/BuyCartBuildByRedux').default,
  }, {
    name: 'draggable-box',
    path: '/test/drag',
    component: () => require('./pages/Test/DraggableBoxTest').default,
  }, {
    name: 'image-preview',
    path: '/test/swipe',
    component: () => require('./pages/Test/PhotoSwipeTest').default,
  }]
}];

export default routes;