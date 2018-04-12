<template>
    <div 
        class="dropdown select_dropdown"
        :class="{
            'disable': disabled,
            'dropdown-hover': isActive
        }"
        :defaultName="defaultName || 请选择"
        :list="list || []"
        :disabled="disabled || false"
        @mouseover="_onMouseover"
        @mouseout="_onMouseout"
    >
        <div class="dropdown-toggle">
            <span class="text">{{defaultName}}</span> 
            <span class="caret">▾</span>
        </div>
        <div v-if="!disabled" class="dropdown-menu">
            <ul>
                <li v-for="(content, index) in list" :key="content.key">
                    <label>
                        <input name="item" type="radio" :value="content.val" @click="setCheckedItem(index)" :ref="'item' + index" :data-index="index">
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
        name: 'SelectDropdown',
        extends: Dropdown,
        methods: {
            setCheckedItem(index) {
                let value = this.list[index].key;
                let item = this.$refs['item' + index];
                this.onChange(value, item)
                this._onMouseout();
            },
            onChange(value, item) {
                this.$emit('changeFnBack', value, item);
            } 
        }
    }
</script>

<style type="less">
    .dropdown.select_dropdown {
        width: 100%;
    }
</style>