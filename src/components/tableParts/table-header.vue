<template>
	<thead>
		<tr class="table-header-row">
			<th v-if="options.selectable" class="column-header-select">
				<m-checkbox :value="selectAll" name="select-all" @input="selectAllCheck"></m-checkbox>
			</th>
			<th class="column-header" v-for="column in columns" :key="column" @click="sortBy(column, $event)">
				<m-icon v-if="options.sortable" tiny>{{sortedDir(column)}}</m-icon>
				<span>{{column | capitalize}}</span>
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
		},
		options: {
			type: Object,
			required: true
		},
		selectAll: {
			type: Boolean,
			default: false
		}
	},
	filters: {
		capitalize(str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		}
	},
	methods: {
		sortedDir(key) {
			let sortDir = this.sortedColumns.find(sortData => sortData.key == key);
			if(!sortDir)
				return 'swap_vert';
			return (sortDir.ascending) ? 'arrow_upward' : 'arrow_downward';
		},
		selectAllCheck(){
			this.$emit('select-all', !this.selectAll)
		},
		sortBy(key, event) {
			if(!this.options.sortable){
				return;	
			} 
			this.$emit('change-sort-order', key, event.ctrlKey);
		},
	}
}
</script>

<style lang="scss" scoped>
tr.table-header-row {
	p {
		margin: 0;
	}
	.column-header-select {
		width: 50px;
		padding-bottom: 5px;
	}
	.column-not-sorted {
		font-size: 14px;
		color: rgba(0,0,0,0.54);
	}

	.column-header {
		cursor: pointer;
	}
}
</style>
