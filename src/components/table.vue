<template>
<div class="m-table-container">
	<table :class="classes">
		<m-table-header 
			:options="calculatedOptions" 
			:columns="columns" 
			:sortedColumns="sortOrder" 
			:selectAll="currentPageAllSelected"
			@change-sort-order="changeSortOrder" 
			@select-all="selectAll">
		</m-table-header>
		<m-table-body 
			:rowData="pagedData" 
			:columns="columns" 
			:options="calculatedOptions" 
			:selectedRows="selectedRowKeys"
			@select-row="selectRow">
		</m-table-body>
	</table>
	<m-table-tools-bottom v-if="calculatedOptions.paging"
		:itemCount="tableData.length"
		:pageIndex="pageIndex"
		:maxPageIndex="maxPages"
		:options="calculatedOptions"
		@changePerPage="updatePerPage"
		@jumpToPage="updatePageIndex">
	</m-table-tools-bottom>
</div>
</template>

<script>
// library imports
import { SortDataInArray } from '../util/array-helpers';

// table part components
import MTableHeader from './tableParts/table-header.vue';
import MTableBody from './tableParts/table-body.vue';
import MTableToolsBottom from './tableParts/table-tools-bottom.vue';

export default {
	components: {
		MTableHeader,
		MTableBody,
		MTableToolsBottom
	},
	props: {
		// OptionProps
		columns: {
			type:Array,
			default: []
		},
		tableData: {
			type: Array,
			default() {
				return [];
			}
		},
		selectedRows: {
			type: Array,
			default(){
				return [];
			}
		},
		options: {
			type: Object,
			default() {
				return {
					rowKey: 'id',
					paging: false,
					pagingDefault: 5,
					pagingOptions: [5,10,25,50],
					sortable: true,
					selectable: false
				};
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
			selectedRowKeys: this.selectedRows,
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
		calculatedOptions(){
			return {
					rowKey: this.options.rowKey || 'id',
					paging: this.options.paging || false,
					itemsPerPage: this.itemsPerPage,
					pagingOptions: this.options.pagingOptions || [5,10,25,50],
					sortable: this.options.sortable || false,
					selectable: this.options.selectable || false
				};
		},
		pagedData() {
			if(!this.calculatedOptions.paging) {
				return SortDataInArray(this.tableData, this.sortOrder);
			} else {
				let startingPoint = this.pageIndex * this.calculatedOptions.itemsPerPage;
				let endPoint = startingPoint + this.calculatedOptions.itemsPerPage;

				//apply column ordering
				return SortDataInArray(this.tableData, this.sortOrder).slice(startingPoint, endPoint)
			}
		},
		maxPages() {
			return Math.ceil(this.tableData.length / parseInt(this.calculatedOptions.itemsPerPage));
		},
		idsOnCurrentPage(){
			return this.pagedData.map((data) => {
				return data[this.calculatedOptions.rowKey];
			});
		},
		currentPageAllSelected(){
			return this.selectedRowKeys.filter((selectedId) => {
				return this.idsOnCurrentPage.indexOf(selectedId) > -1;
			}).length == this.idsOnCurrentPage.length;
		}
	},
	watch: {
		selectedRowKeys(value) {
			this.$emit('selected-update', value)
		},
		selectedRows(value){
			this.selectedRowKeys = value;
		}
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
		selectAll(value) {
			if(value == true) {
				// if selectAll is true, add IDs that are missing from current page
				let idsToAdd = this.idsOnCurrentPage.filter((selectedId) => {
					return !this.selectedRowKeys.includes(selectedId);
				});

				this.selectedRowKeys.push.apply(this.selectedRowKeys, idsToAdd);
			} else {
				// if selectAll is false, Remove IDs that are currently selected
				let idsAlreadyContained = this.selectedRowKeys.filter((selectedId) => {
					return this.idsOnCurrentPage.indexOf(selectedId) > -1;
				});

				this.selectedRowKeys = this.selectedRowKeys.filter((key) => {
					return !idsAlreadyContained.includes(key);
				});
			}
		},
		selectRow(key){
			let selectedIndex = this.selectedRowKeys.indexOf(key);
			if(selectedIndex >= 0){
				this.selectedRowKeys.splice(selectedIndex, 1);
			} else {
				this.selectedRowKeys.push(key);
			}
		},
		changeSortOrder(key, multiHeaderSort) {

			let existingSortKey = this.sortOrder.find( x => x.key == key);

			let sortKey = {
				key: key,
				ascending: (existingSortKey) ? !existingSortKey.ascending : true
			};
			if (multiHeaderSort) {
				// update the array with key and direction
				if (!existingSortKey){
					// add new key
					this.sortOrder.push(sortKey);
				} else {
					existingSortKey.ascending = sortKey.ascending;
				}
			} else {
				this.sortOrder = [ sortKey ]
			}
		}
	},
	mounted(){
		if(this.options.pagingDefault && this.options.pagingOptions.indexOf(this.options.pagingDefault) == -1){
			// if paging is specified and pagingOptions does not contain it, default to first
			this.itemsPerPage = this.calculatedOptions.pagingOptions[0];
		} else {
			this.itemsPerPage = this.options.pagingDefault;
		}
	}
}
</script>

<style lang="scss" scoped>
.m-table-container {
	padding-bottom: 5px;

	table {
		table-layout: fixed;
	}
}

</style>
