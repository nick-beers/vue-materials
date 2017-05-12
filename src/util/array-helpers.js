import _ from 'lodash';

function SortDataInArray(data, sortArray) {
	// requires sortArray to be an array of objects
	let columns = [];
	let directions = [];

	sortArray.forEach(function(sort){
		columns.push(sort.key);
		directions.push((sort.ascending) ? 'asc' : 'desc');
	})
	let newData = _.orderBy(data, columns, directions);
	return newData;
}

function SearchForVal(data, searchKey){
	return data.filter((obj) => { 
		return Object.keys(obj).some((prop) => {
			if(obj[prop] == null || obj[prop] === undefined){
				return false;
			}
			return obj[prop].toString().toLowerCase().includes(searchKey);
		});
	});
	return data;
}

export { SortDataInArray, SearchForVal };