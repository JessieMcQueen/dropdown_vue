<template>
        <div 
            class="dropdown muti_select_dropdown"
            :class="{
                'disable': disabled,
                'dropdown-hover': isActive
            }"
            :defaultNumber="defaultNumber"
            :list="list || []"
            :disabled="disabled || false"
            @mouseover="_onMouseover"
            @mouseout="_onMouseout"
        >
            <div class="dropdown-toggle">
                <span class="text">已选择{{defaultNumber}}个</span> 
                <span class="caret">▾</span>
            </div>
            <div v-if="!disabled" class="dropdown-menu">
                <div v-if="isCheckall || false" class="check-all">
                    <label>
                        <input type="checkbox" name="all" value="_all">
                        <i></i>
                        <span class="txt">全选</span>
                    </label>
                </div>
                <ul>
                    <li v-for="(content, index) in list" :key="content.key">
                        <label>
                            <input name="item" type="checkbox" :value="content.val" @click="setCheckedItem(index)" :ref="'item' + index" :data-index="index">
                            <i></i>
                            <span class="txt" :title="content.key">{{content.key}}</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
                
    </template>
    
    <script>
        import Dropdown from '../base.vue';
        export default {
            name: 'MutiSelect',
            extends: Dropdown,
            props: {
                defaultNumber: {
                    type: Number,
                    default: 0
                }    
            },
            methods: {
                setCheckedItem(index) {
                    let value = this.list[index].key;
                    let item = this.$refs['item' + index];
                    this.onChange(value, item)
                },
                onChange(value, item) {
                    this.$emit('changeFnBack', value, item);
                } 
            }
        }
    </script>
    <style>
        .dropdown.muti_select_dropdown {
            width: 100%;
        }
    </style>