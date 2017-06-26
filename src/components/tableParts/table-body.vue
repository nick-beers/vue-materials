<script>
export default {
	render(createElement){
		let rows = [];
		for(let row of this.rowData){
			let rowColumns = [];
			// load the checkbox
			if(this.options.selectable){
				rowColumns.push(createElement('td',
				{
					class: 'table-check-box'
				},
				[
					createElement('m-checkbox', 
					{
						props: {
							value: this.isSelected(row),
							name: this.$options.filters.checkBoxName(row[this.options.rowKey])
						},
						on: {
							input: this.selectRow.bind(null, row)
						}
					})
				]));
			}

			for(let column of this.columns){
				let cellRenderer = defaultCellRenderer;
				if(column.cellRenderer){
					cellRenderer = column.cellRenderer;
				}

				rowColumns.push(cellRenderer(createElement, row, column, this))
			}

			rows.push(createElement('tr',
				{
					class: 'table-row',
					key: this.options.rowKey
				},
				rowColumns
				)
			);
		}

		return createElement(
			'transition-group',
			{
				name: 'slide',
				tag: 'tbody'
			},
			rows
		);
		function defaultCellRenderer(createElement, row, column, vueInstance){
			return createElement('td', {}, [row[column].toString()])
		}
	},
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
