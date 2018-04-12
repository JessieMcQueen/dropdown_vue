import Dropdown from './base.vue';

// 注册全局组件
Dropdown.install = function(Vue) {
  Vue.component(Dropdown.name, Ddropdown);
};

export default Dropdown;