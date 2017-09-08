<template>
    <input type="date" 
           class="datepicker"
    >
</template>

<script type="text/babel">
    import IsLoadable from '../mixins/is-loadable'

    export default {
        mixins: [
            IsLoadable
        ],

        props: {
            value: {
                type: String
            },
            format: {
                type: String
            },
            selectMonths: {
                type: Boolean
            },
            selectYears: {
                type: Number
            },
            closeOnSelect: {
                type: Boolean
            },
            todayText: {
                type: String
            },
            clearText: {
                type: String
            },
            closeText: {
                type: String
            }
        },
        computed: {
            settings() {
                return {
                    selectMonths: (this.selectMonths ? this.selectMonths : undefined),
                    selectYears: (this.selectYears ? this.selectYears : undefined),
                    today: (this.todayText ? this.todayText : undefined),
                    clear: (this.clearText ? this.clearText : undefined),
                    close: (this.closeText ? this.closeText : undefined),
                    closeOnSelect: (this.closeOnSelect ? this.closeOnSelect : undefined),
                    format: (this.format ? this.format : undefined)
                }
            }
        },
        methods: {
            init () {
                $(function() {
                    $(this.$el).pickadate(this.settings)
                    const picker = $(this.$el).pickadate('picker')
                    picker.set('select', this.value)

                    const vm = this
                    this.$el.onchange = function () {
                        if (vm.format)
                            vm.$emit('input', picker.get('select', vm.format))
                        else
                            vm.$emit('input', picker.get('select'))
                    }
                }.bind(this))
            }
        }    
    }
</script>
