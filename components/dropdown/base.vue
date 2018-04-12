<template>
    <div 
        class="dropdown"
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
            <div v-if="isCheckall || false" class="check-all">
                <label>
                    <input type="checkbox" name="all" value="_all">
                    <i></i>
                    <span class="txt">全选</span>
                </label>
            </div>
            <ul>
                <li v-for="content in list" :key="content.key">
                    <label>
                        <input name="item" type="checkbox" value="{content.val}" v-bind:class="{'has-selected': hasSelected}" @click="toggleChecked">
                        <i></i>
                        <span class="txt" title="{content.key}">{{content.key}}</span>
                    </label>
                </li>
            </ul>
        </div>
    </div>
            
</template>

<script>
    export default {
        name: 'Dropdown',
        props: {
            defaultName: {
                type: String,
                default: '请选择'
            },
            list: Array,
            isCheckall: Boolean,
            disabled: Boolean
        },
        data() {
            console.log(this.list)
            return {
                hasSelected: false,
                showMenu: false,
                isActive: false
            }
        },
        methods: {
            _onMouseover() {
                if (this.timer) {
                    window.clearTimeout(this.timer);
                    this.timer = null;
                }
                this.isActive = true;
                
            },
            _onMouseout() {
                this.timer = window.setTimeout(() => {
                    this.isActive = false;
                    this.timer = null;
                }, 100);
            },
            toggleChecked() {
                this.hasSelected = !this.hasSelected
            }
        },
    }
</script>

<style lang="less">
    .dropdown {
        border: solid 1px #d7d7d9;
        height: 28px;
        line-height: 28px;
        border-radius: 4px;
        width: 110px;
        position: relative;
        box-sizing: border-box;
        .text {
            padding-left: 12px;
            overflow: hidden;
        }

        .caret {
            position: absolute;
            right: 7px;
            font-size: 18px;
            top: -1px;
        }
        .dropdown-menu {
            width: 100%;
            display: none;
            position: absolute;
            border: solid 1px #d7d7d9;
            background: white;
            border-radius: 4px;
            z-index: 10;
        }
        ul {
            padding: 8px;
        }
        li {
            list-style: none;
        }
    }
    .has-selected {
        background-color: #ffedf4;
        border-color: #fb4491;
    }
    .dropdown-hover {
        .dropdown-menu {
            display: block;
        }

        .caret {
            transform: rotate(180deg);
            top: 1px !important;
        }
    }  

    
</style>