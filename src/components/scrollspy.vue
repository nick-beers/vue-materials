<template>
    <ul class="section table-of-contents">
        <li v-for="link in linkList">
            <a :href="link.id | makeHref">{{link.text}}</a>
        </li>
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
            }
        },
        watch: {
            linkData(){
                console.log("linkDataUpdated")
            }
        },
        methods: {
            init(){
                $(this.scrollSpyTarget).scrollSpy();
            }
        },
        filters: {
            makeHref(id){
                return `#${id}`;
            }
        }
    }
</script>
