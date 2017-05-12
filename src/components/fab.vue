<template>
    <div class="fixed-action-btn"
         :class="classes"
    >
        <m-btn-link large
                  floating
        >
            <m-icon>{{ icon }}</m-icon>
        </m-btn-link>
        <slot name="items"></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            icon: {
                type: String,
                required: true
            },
            
            horizontal: {
                type: Boolean,
                default: false
            },

            toggle: {
                type: Boolean,
                default: false
                        },
            toolbar: {
                type: Boolean,
                defaut: false
            }
        },

        computed: {
            classes () {
                return {
                    'click-to-toggle': this.toggle,
                    'horizontal': this.horizontal,
                    'toolbar': this.toolbar
                }
            }
        },

        methods: {
            open () {
                $(this.$el).openFAB()
                this.$emit('open')
            },

            close () {
                $(this.$el).closeFAB()
                this.$emit('close')
            }
        }
    }
</script>
