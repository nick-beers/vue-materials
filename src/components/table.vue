<template>
<div class="m-table-container">
	<table :class="classes">
		<m-table-header :columns="columns" :sortedColumns="sortOrder" @changeSortOrder="updateColumnOrder"></m-table-header>
		<tbody v-if="tableData.length > 0">
			<m-table-row v-for="rowData in orderedData" :rowData="rowData" :columns="columns"></m-table-row>
		</tbody>
		<tfoot v-else>
			<tr><td :colspan="orderedData.length">No results available.</td></tr>
		</tfoot>
	</table>
	<m-table-tools-bottom 	@changePerPage="updatePerPage"
							@jumpToPage="updatePageIndex"
							:itemCount="tableData.length"
							:pageIndex="pageIndex"
							:maxPageIndex="maxPages">
	</m-table-tools-bottom>
</div>
</template>

<script>
// library imports
import { SortDataInArray } from '../util/array-helpers';
// table parts
import MTableHeader from './tableParts/table-header.vue';
import MTableRow from './tableParts/table-row.vue';
import MTableToolsBottom from './tableParts/table-tools-bottom.vue';

export default {
	components: {
		MTableHeader,
		MTableRow,
		MTableToolsBottom
	},
	props: {
		// OptionProps
		columns: {
			type: Array,
			default() {
				/* Each column has:
					name: String
					hasSort: Boolean
				*/
				return [];
			}
		},
		tableData: {
			type: Array,
			default() {
				return [];
			}
		},
		// CSS Props
		bordered: {
			type: Boolean,
			default: false
		},
		striped: {
			type: Boolean,
			default: false
		},
		highlight: {
			type: Boolean,
			default: false
		},
		centered: {
			type: Boolean,
			default: false
		},
		responsive: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			sortOrder: [],
			pageIndex: 0,
			itemsPerPage: 10
		}
	},
	computed: {
		classes() {
			return {
				'bordered': this.bordered,
				'striped': this.striped,
				'highlight': this.highlight,
				'centered': this.centered,
				'responsive-table': this.responsive
			};
		},
		orderedData() {
			let startingPoint = this.pageIndex * this.itemsPerPage;
			let endPoint = startingPoint + this.itemsPerPage;

			//apply column ordering
			if(this.sortOrder.length == 0){
				return this.tableData.slice(startingPoint, endPoint);
			} else {
				return SortDataInArray(this.tableData, this.sortOrder).slice(startingPoint, endPoint)
			}
		},
		maxPages() {
			return Math.ceil(this.tableData.length / parseInt(this.itemsPerPage));
		},
	},
	methods: {
		updatePageIndex(newPageIndex){
			this.pageIndex = newPageIndex;
		},
		updatePerPage(count){
			this.itemsPerPage = parseInt(count);
			if(this.pageIndex > this.maxPages -1) {
				this.updatePageIndex(this.maxPages - 1);
			}
		},
		updateColumnOrder(key, multiHeaderSort){
			let sortKey = {
				key: key,
				ascending: multiHeaderSort
			};

			if(multiHeaderSort){
				// update the array with key and direction
				let theKey = this.sortOrder.filter(function(sk) {
					return sk.key == key;
				});
				if (theKey.length == 0){
					// add new key
					this.sortOrder.push(sortKey);
				} else {
					// change direction
					theKey[0].ascending = !theKey[0].ascending;
				}
			} else {
				// if key was only element, then flip instead
				if(this.sortOrder.length == 1 && this.sortOrder[0].key == key){
					this.sortOrder[0].ascending = !this.sortOrder[0].ascending;
				} else {
					// replace with new array
					this.sortOrder = [ sortKey ]
				}
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.m-table-container table { 
	table-layout: fixed;
}
</style>
