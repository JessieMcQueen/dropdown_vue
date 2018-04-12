import SelectDropdown from './index.vue';

// 注册全局组件
SelectDropdown.install = function(Vue) {
  Vue.component(SelectDropdown.name, SelectDropdown);
};

export default SelectDropdown;