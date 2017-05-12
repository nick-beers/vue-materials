<template>
    <ul class="pagination">
        <m-pagination-item :disabled="value === 1"
                         @click="prev"
        >
            <m-icon>chevron_left</m-icon>
        </m-pagination-item>
        <m-pagination-item v-if="length > 0"
                         v-for="n in length"
                         :active="value === n"
                         :waves="waves"
                         :color="color"
                         @click="page(n)"
        >
            {{ n }}
        </m-pagination-item>
        <m-pagination-item :disabled="value === length"
                         @click="next"
        >
            <m-icon>chevron_right</m-icon>
        </m-pagination-item>
    </ul>
</template>

<script type="text/babel">
    export default {
        props: {
            active: {
                type: Boolean,
                default: false
            },

            value: {
                type: [Number, String],
                default: 0
            },

            color: {
                type: String,
                default: ''
            },

            length: {
                type: Number,
                default: 0
            },

            waves: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            next () {
                this.$emit('input', this.value + 1)
            },

            page (n) {
                this.$emit('input', n)
            },

            prev () {
                this.$emit('input', this.value - 1)
            }
        }
    }
</script>
