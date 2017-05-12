<template>
	<tr class="table-row">
		<td v-for="col in columns">{{ rowData[col.name] }}</td>
	</tr>
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
		rowData: {
			type: Object,
			default() {
				return {};
			}
		}
	},
}
</script>