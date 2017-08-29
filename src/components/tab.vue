<template>
    <li class="tab col" :class="{ 'disabled': this.disabled }">
        <a :href="href" :class="classes" :target="target">
            <slot></slot>
        </a>
    </li>
</template>

<script type="text/babel">
    export default {
        props: {
            active: {
                type: Boolean,
                default: false
            },
            href: {
                type: String,
                required: true
            },
            target: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes () {
                return {
                    'active': this.active
                }
            }
        }
    }
</script>
