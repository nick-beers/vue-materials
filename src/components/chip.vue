<template>
    <div class="chip"
         v-if="!remove"
    >
        <slot></slot>
        <m-icon class="close" v-if="close">close</m-icon>
    </div>
</template>

<script type="text/babel">
    import IsLoadable from '../mixins/is-loadable'

    export default {
        mixins: [
            IsLoadable
        ],

        data () {
            return {
                remove: false
            }
        },

        props: {
            close: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            init () {
                if (this.close) {
                    this.$el.addEventListener('click', () => this.$emit('close'))
                }
            }
        }
    }
</script>
