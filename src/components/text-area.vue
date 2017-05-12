<template>
    <textarea class="materialize-textarea"
              :data-length="length"
              @input="$emit('input', $event.target.value)"
    >
        <slot></slot>
    </textarea>
</template>

<script type="text/babel">
    import Counter from '../mixins/counter'

    export default {
        mixins: [
            Counter
        ]
    }
</script>
