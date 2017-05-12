<template>
	<thead>
		<tr class="table-header-row">
			<th :class="{ 'column-not-sorted': !isSorted(obj.name), 'column-header' : obj.hasSort }" v-for="obj in columns" :key="obj.name" @click="sortBy(obj.name, $event)">
				<m-icon v-if="obj.hasSort" tiny>{{sortedDir(obj.name)}}</m-icon>
				<span>{{ obj.name | capitalize }}</span>
			</th>
		</tr>
	</thead>
</template>

<script>
export default {
	props: {
		columns: {
			type: Array,
			default() {
				return [];
			}
		},
		sortedColumns: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	filters: {
		capitalize(str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		}
	},
	methods: {
		sortBy(key, event) {
			if(!this.findColumnByKey(key).hasSort){
				return;	
			} 
			this.$emit('changeSortOrder', key, event.ctrlKey);
		},
		sortedDir(key) {
			let sortDir = this.getSortColumn(key);
			if(!this.isSorted(key))
				return 'swap_vert';
			return (this.isSorted(key) && sortDir[0].ascending) ? 'arrow_upward' : 'arrow_downward';
		},
		getSortColumn(key) {
			return this.sortedColumns.filter((sortData) => {
				return sortData.key == key;
			});
		},
		isSorted(key) {
			return this.getSortColumn(key).length > 0; 
		},
		findColumnByKey(key){
			return this.columns.find(function(obj) {
				return obj.name === key;
			});
		}
	}
}
</script>

<style lang="scss" scoped>
tr.table-header-row {
	.column-not-sorted {
		font-size: 14px;
		color: rgba(0,0,0,0.54);
	}

	.column-header {
		cursor: pointer;
	}
}
</style>
