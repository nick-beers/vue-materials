<template>
    <textarea :class="classes"
              :data-length="length"
              @input="$emit('input', $event.target.value)"
              @blur="$emit('blur', $event.target.value)"
              @focus="$emit('focus', $event.target.value)"
              @change="$emit('change', $event.target.value)"
              :value="value"
    >
    </textarea>
</template>

<script type="text/babel">
    import Counter from '../mixins/counter'

    export default {
        props: {
          value: null,
          validate: {
            type: Boolean,
            default: false
          }
        },
        computed: {
          classes() {
            return {
              'materialize-textarea': true,
              validate: this.validate
            }
          }
        },
        mixins: [
            Counter
        ]
    }
</script>
