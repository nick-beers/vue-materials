
function GetColumnId(col){
	return (typeof col === "string") ? col : col.id;
}

export { GetColumnId };