<template>
    <div :class="classes" @chip.add="addChip">
        <slot></slot>
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
                chips: []
            }
        },

        props: {
            placeholder: {
                type: String,
                default: ''
            },
            secondaryPlaceholder: {
                type: String,
                default: ''
            },
            autocompleteLimit: {
                type: Number,
                default: Infinity
            },
            autocompleteStartLength: {
                type: Number,
                default: 1
            },
            data: {
                type: Array,
                default: () => []
            },
            autocompleteOptions: {
                type: Object,
                default() {
                    return {
                        data: {},
                        limit: Infinity,
                        minLength: 1
                    }
                }
            },
            autocompleteData: {
                type: Object,
                default: () => new Object()
            },
        },
        computed:{
            classes(){
                return {
                    'chips': true,
                    'chips-initial': this.data.length > 0,
                    'chips-placeholder': !!this.placeholder,
                    'chips-autocomplete': (this.autocompleteData ? Object.keys(this.autocompleteData).length > 0 : false)
                }
            }
        },
        watch: {
            chips(newVal){
                this.$emit('change-chips', this.chips);
            },
            data(newVal){
                // re-init the plugin on the target if the data changes
                this.init();
            }
        },
        methods: {
            init () {
                let settings = {
                    'data': (this.data ? this.data : undefined),
                    'placeholder': (this.placeholder ? this.placeholder : undefined),
                    'secondaryPlaceholder': (this.secondaryPlaceholder ? this.secondaryPlaceholder : undefined),
                    'autocompleteOptions': {
                        'data': (this.autocompleteData ? this.autocompleteData : {}),
                        'minLength': this.autocompleteStartLength
                    }
                };

                $(this.$el).material_chip(settings);
                this.chips = $(this.$el).material_chip('data');
                
                // setup event listeners
                let vm = this;
                 $(this.$el).on('chip.add chip.delete', function(e, tag){
                    vm.changeChips(e, tag);
                });
            },
            changeChips(e, chip){
                this.chips = $(this.$el).material_chip('data');
            },
        }
    }
</script>
                        'limit': (this.autocompleteLimit ? this.autocompleteLimit : undefined),
