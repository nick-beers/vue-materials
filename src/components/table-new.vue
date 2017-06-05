<template>
<div class="m-table-container">
	<table :class="classes">
		<m-table-header 
			:options="options" 
			:columns="columns" 
			:sortedColumns="sortOrder" 
			@change-sort-order="changeSortOrder" 
			@select-all="selectAll"></m-table-header>
		<m-table-body 
			:rowData="orderedData" 
			:columns="columns" 
			:options="options" 
			:selectedRows="selectedRowKeys"
			@select-row="selectRow"></m-table-body>
		<tfoot>
			
		</tfoot>
	</table>
</div>
</template>

<script>
// library imports
import { SortDataInArray } from '../util/array-helpers';

// table part components
import MTableHeader from './tablePartsNew/table-header.vue';
import MTableBody from './tablePartsNew/table-body.vue';

export default {
	components: {
		MTableHeader,
		MTableBody
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
			selectedRowKeys: [],
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
			if(!this.options.paging) {
				return this.tableData;
			} else {
				let startingPoint = this.pageIndex * this.itemsPerPage;
				let endPoint = startingPoint + this.itemsPerPage;

				//apply column ordering
				if(this.sortOrder.length == 0){
					return this.tableData.slice(startingPoint, endPoint);
				} else {
					return SortDataInArray(this.tableData, this.sortOrder).slice(startingPoint, endPoint)
				}
			}
		},
		maxPages() {
			return Math.ceil(this.tableData.length / parseInt(this.itemsPerPage));
		},
	},
	methods: {
		selectAll() {
			console.log("select-all caught!")
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

			let sortKey = {
				key: key,
				ascending: multiHeaderSort
			};

			if (multiHeaderSort) {
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

.slide-enter-active {
  	transition: all .35s ease;
}

.slide-leave-active {
  	transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  	display: none;
}

.slide-enter, .slide-leave-to {
  	transform: translateX(20px);
  	opacity: 0;
}

</style>
