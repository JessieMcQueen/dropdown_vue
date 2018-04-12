import MutiSelect from './index.vue';

// 注册全局组件
MutiSelect.install = function(Vue) {
  Vue.component(MutiSelect.name, MutiSelect);
};

export default MutiSelect;