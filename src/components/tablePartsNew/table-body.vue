<template>
	<tbody>
		<tr class="table-row" v-for="row in rowData" :key="row[options.rowKey]">
			<td v-if="options.selectable">
				<m-checkbox :name="row[options.rowKey] | checkBoxName" @input="selectRow(row)"></m-checkbox>
			</td>
			<td v-for="column in columns">{{ row[column] }}</td>
		</tr>
	</tbody>
</template>

<script>
export default {
	props: {
		rowData: {
			type: Array,
			required: true
		},
		columns: {
			type: Array,
			required: true
		},
		options: {
			type: Object,
			required: true
		},
		selectedRows: {
			type: Array,
			default: []
		}
	},
	filters: {
		checkBoxName(keyName) {
			return `row-select-${keyName}`;
		}
	},
	methods: {
		selectRow(row) {
			this.$emit('select-row', row[this.options.rowKey]);
		},
		isSelected(row){
			return this.selectedRows.contains(row[this.options.rowKey]);
		}
	}
}
</script>

<style lang="scss" scoped>
tbody p {
	margin: 0;
}
</style>
