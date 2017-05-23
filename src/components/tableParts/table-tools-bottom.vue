<template>
	<div class="table-tools-bottom">
		<div class="table-paging">
			<div class="results-per-page-label">Rows per page:</div>
			<div class="results-per-page">
				<m-select :items="itemsPerPageOptions" v-model="itemsPerPage"></m-select>
			</div>
		</div>
		<div class="results">{{ resultsText }}</div>
		<div class="paging">
			<div class="page-button" @click.prevent="pageLeft">
				<m-btn wavesLight floating flat :class="{ disabled: !canPageLeft }"><m-icon>chevron_left</m-icon></m-btn>
			</div>
			<div class="page-button" @click.prevent="pageRight">
				<m-btn wavesLight floating flat :class="{ disabled: !canPageRight }"><m-icon>chevron_right</m-icon></m-btn>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		pageIndex: {
			type: Number,
			default: 0
		},
		itemCount: {
			type: Number,
			default: 0
		},
		maxPageIndex: {
			type: Number,
			default: 0
		}
	},
	computed: {
		canPageLeft() {
			return this.pageIndex > 0;
		},
		canPageRight() { 
			return this.pageIndex < this.maxPageIndex - 1;
		},
		resultsText() {
			return `Page ${this.pageIndex + 1} of ${this.maxPageIndex}`;
		},
		itemsPerPageParsed(){
			return parseInt(this.itemsPerPage);
		}
	},
	data() {
		return {
			itemsPerPage: 10,
			itemsPerPageOptions: [
				{ id:5, text: "5"},
				{ id:10, text: "10"},
				{ id:25, text: "25"},
				{ id:50, text: "50"},
			]
		};
	},
	methods: {
		jumpToPage(newPageIndex) {
			this.$emit('jumpToPage', newPageIndex);
		},
		pageLeft(event){
			if(!this.canPageLeft) return;

			this.jumpToPage(this.pageIndex- 1);
		},
		pageRight(event){
			if(!this.canPageRight) return;

			this.jumpToPage(this.pageIndex + 1);
		}
	},
	watch: {
		itemsPerPageParsed(val) {
			this.$emit('changePerPage', this.itemsPerPageParsed);
		}
	}
}
</script>

<style lang="scss">
.table-tools-bottom {
	color: rgba(0,0,0,0.54);
	text-align: right;
	vertical-align: top;

	.results-per-page {
	    display: inline-block;
	    margin: 7px 15px 0 15px;
	    vertical-align: inherit;

	    span.caret {
	    	color: rgba(0,0,0,0.54);
	    }

	    div.select-wrapper{
	    	width: 40px;
	    }

	    input.select-dropdown {
	    	border-bottom: none;
	    }
	}

	.table-paging {
		display: inline-block;
	    vertical-align: inherit;
	}

	.results-per-page-label {
	    display: inline-block;
	    margin: 10% 0;
	    vertical-align: inherit;
	}
	.results {
	    display: inline-block;
	    margin: 18.5px 15px;
	    vertical-align: inherit;
	}
	.paging {
	    display: inline-block;
	    margin: 10px 0;
	    vertical-align: inherit;

	    .page-button {
	    	display: inline-block;
	    }

	    i {
	    	color: inherit;
	    }
	}
}

</style>
