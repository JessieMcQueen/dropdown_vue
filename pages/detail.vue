<template>
    <div id="details">
        <h3>Dropdown组件列表</h3>
        <table id="dropdown-table">
            <thead>
                <tr>
                    <th>组件名</th>
                    <th>描述</th>
                    <th>实例</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Select</td>
                    <td>单选下拉组件</td>
                    <td>
                        <div class="dropdown-part">
                            <SelectDropdown defaultName="下拉哈哈" :list="list" @changeFnBack="changeFnBack"></SelectDropdown>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>MutiSelect</td>
                    <td>多选下拉组件</td>
                    <td>
                        <div class="dropdown-part">
                            <MutiSelect defaultName="下拉哈哈" :list="list" @changeFnBack="changeFnBack"></MutiSelect>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>SearchSelect</td>
                    <td>带搜索框的单选下拉组件</td>
                </tr>
                <tr>
                    <td>MutiSearch</td>
                    <td>带搜索框的多选下拉组件</td>
                </tr>
            </tbody>
        </table>
    </div>
  </template>
  
  <script>
  import SelectDropdown from '~/components/dropdown/select';
  import MutiSelect from '~/components/dropdown/muti_select';
  export default {
    name: 'Detail',
    el: "#details",
    data() {
        return {
            list: [{
                key: 'xiaohei',
                val: '111'
            }, {
                key: 'xiaobai',
                val: '2222'
            }],
        }
    },
    components: {
        SelectDropdown,
        MutiSelect 
    },
    methods: {
        changeFnBack(value, item) {
            console.log("-------------------");
            console.log(value, item);
        },
    }
  }
  </script>

  <style lang="less">
      #dropdown-table {
          tr {
              height: 50px;
          }
      }
      .dropdown-part {
          width: 120px;
      }
      
  </style>
  

  