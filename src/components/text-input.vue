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
              validate: this.validate
            }
          }
        },
        mixins: [
            Counter
        ]
    }
</script>
