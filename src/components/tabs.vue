<template>
    <ul :class="classes">
        <slot></slot>
    </ul>
</template>

<script type="text/babel">
    import IsLoadable from '../mixins/is-loadable'

    export default {
        mixins: [
            IsLoadable
        ],

        props: {
            selected: {
                type: String,
                default: ''
            },
            tabsFixedWidth: {
                type: Boolean,
                default: false
            },
            swipeable: {
                type: Boolean,
                default: false
            },
            responsiveThreshold: {
                type: Number,
                default: Infinity
            },
            onShow: {
                type: Function,
                default: function(tabReturnValue){  }
            }
        },

        methods: {
            init () {
                var options = {
                    onShow: this.onShow,
                    swipeable: this.swipeable,
                    responsiveThreshold: this.responsiveThreshold               
                };

                if (!this.selected) {
                    $(this.$el).tabs(options);
                } else {
                    $(this.$el).tabs(options).tabs('select_tab', this.selected);
                }
            }
        },
        computed: {
            classes(){
                return {
                    'tabs': true,
                    'tabs-fixed-width': this.tabsFixedWidth
                };
            }
        },
        watch: {
            selected(val){
                $(this.$el).tabs('select_tab', val);
            }
        }
    }
</script>
