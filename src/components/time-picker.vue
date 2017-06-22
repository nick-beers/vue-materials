<template>
    <input class="timepicker">
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
            options: {
                type: Object,
                default: () => {
                    return {
                        default: 'now', // Set default time
                        fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
                        twelvehour: true, // Use AM/PM or 24-hour format
                        donetext: 'OK', // text for done-button
                        cleartext: 'Clear', // text for clear-button
                        canceltext: 'Cancel', // Text for cancel-button
                        autoclose: false, // automatic close timepicker
                        ampmclickable: true, // make AM PM clickable
                        aftershow: function(){} //Function for after opening timepicker  
                    }
                }
            }
        },
        computed: {
            finalOptions(){
                return Object.assign({
                    default: 'now', // Set default time
                    fromnow: 0, // set default time to * milliseconds from now (using with default = 'now')
                    twelvehour: true, // Use AM/PM or 24-hour format
                    donetext: 'OK', // text for done-button
                    cleartext: 'Clear', // text for clear-button
                    canceltext: 'Cancel', // Text for cancel-button
                    autoclose: false, // automatic close timepicker
                    ampmclickable: true, // make AM PM clickable
                    aftershow: function(){} //Function for after opening timepicker  
                  },
                  this.options)
            }
        },
        methods: {
            init () {
                let picker = $(this.$el).pickatime(this.finalOptions); 

                picker.val(this.value)

                const vm = this
                this.$el.onchange = function () {
                    vm.$emit('input', picker.val())
                }
            }
        }    
    }
</script>
