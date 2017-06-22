<template>
    <ul class="table-of-contents">
        <li v-for="link in linkList">
            <a :href="link.id | makeHref">{{link.text}}</a>
        </li>
        <slot></slot>
    </ul>
</template>

<script type="text/babel">
    import IsLoadable from '../mixins/is-loadable'

    export default {
        mixins: [
            IsLoadable
        ],
        props: {
            linkList: {
                type: Array,
                default: [] // { id: "", text: "" }
            },
            scrollSpyTarget: {
                type: String,
                default: '.scrollspy'
            },
            offset: {
                type: String,
                default: '200px'
            },
            activeClass: {
                type: String
            },
            getActiveElement: {
                type: Function
            }
        },
        watch: {
            linkData(){
                console.log("linkDataUpdated")
            }
        },
        computed: {
            settings(){
                return $.extend({}, {
                    'offset': this.offset || undefined,
                    'activeClass': this.activeClass || undefined,
                    'getActiveElement': this.getActiveElement || undefined
                });
            }
        },
        methods: {
            init(){
                $(this.scrollSpyTarget).scrollSpy(this.settings);
            }
        },
        filters: {
            makeHref(id){
                return `#${id}`;
            }
        }
    }
</script>
