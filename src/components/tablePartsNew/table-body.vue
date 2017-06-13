<template>
	<transition-group name="slide" tag="tbody">
		<tr class="table-row" v-for="row in rowData" :key="row[options.rowKey]">
			<td class="table-check-box" v-if="options.selectable">
				<m-checkbox  :value="isSelected(row)" :name="row[options.rowKey] | checkBoxName" @input="selectRow(row)"></m-checkbox>
			</td>
			<td v-for="column in columns">{{ row[column] }}</td>
		</tr>
	</transition-group>
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
			return this.selectedRows.includes(row[this.options.rowKey]);
		}
	}
}
</script>

<style lang="scss" scoped>
tbody p {
	margin: 0;
}

.table-check-box {
	width: 50px;
	padding-bottom: 5px;
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
