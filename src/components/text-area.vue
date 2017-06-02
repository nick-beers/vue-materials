<template>
    <textarea class="materialize-textarea"
              :data-length="length"
              @input="$emit('input', $event.target.value)"
              :value="value"
    >
    </textarea>
</template>

<script type="text/babel">
    import Counter from '../mixins/counter'

    export default {
        props: ['value'],
        mixins: [
            Counter
        ]
    }
</script>
