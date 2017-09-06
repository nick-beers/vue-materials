<template>
    <input :class="classes"
           type="text"
           :data-length="length"
           :value="value"
           @input="$emit('input', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @change="$emit('change', $event.target.value)"
    >
</template>

<script type="text/babel">
    import Counter from '../mixins/counter'
    import IsLoadable from '../mixins/is-loadable'

    export default {
        props: {
          value: null,
          validate: {
            type: Boolean,
            default: false
          },
          acData: {
            type: Object,
            default: null
          },
          acLimit: {
            type: Number,
            default: Infinity
          },
          acMinLength: {
            type: Number,
            default: 1
          },
          onAutocomplete: {
            type: Function,
            default: function(val){

            }
          }
        },
        methods: {
          init () {
              $(function(){
                if(this.acData) {
                  let settings = {
                      'data': (this.acData ? this.acData : undefined),
                      'limit': (this.acLimit ? this.acLimit : undefined),
                      'onAutocomplete': (this.onAutocomplete ? this.onAutocomplete : undefined),
                      'minLength': (this.acMinLength ? this.acMinLength : undefined)
                  };
                  $(this.$el).autocomplete(settings);
                }
              }.bind(this))
          },
        },
        computed: {
          classes() {
            return {
              validate: this.validate
            }
          }
        },
        mixins: [
            Counter,
            IsLoadable
        ],
        watch: {
          acData(newVal){
              // re-init the plugin on the target if the data changes
              this.init();
          }
        }
    }
</script>
