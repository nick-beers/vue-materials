<template>
	<thead>
		<tr class="table-header-row">
			<th v-if="options.selectable">
				<m-checkbox name="select-all" @input="selectAll()"></m-checkbox>
			</th>
			<th v-for="column in columns" :key="column" @click="sortBy(column, $event)">
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
		}
	},
	filters: {
		capitalize(str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		}
	},
	methods: {
		sortedDir(key) {
			let sortDir = this.sortedColumns.filter((sortData) => {
				return sortData.key == key;
			});
			if(sortDir.length <= 0)
				return 'swap_vert';
			return (sortDir) ? 'arrow_upward' : 'arrow_downward';
		},
		selectAll(){
			this.$emit('select-all')
		},
		sortBy(key, event) {
			if(!this.options.selectable){
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
	.column-not-sorted {
		font-size: 14px;
		color: rgba(0,0,0,0.54);
	}

	.column-header {
		cursor: pointer;
	}
}
</style>
