function Template(props){
	const name = `${props.name || props.children.tagName}`
	const objectToInsert = props.children
	function emitDragg(){
		props.emitDragg(objectToInsert)
	}
	function emitDrop(){
		props.emitDrop(objectToInsert)
	}
	return(
		<div draggable='true' class="select-none cursor-move" on:dragstart={emitDragg} on:dragend={emitDrop} >
			{name}
		</div>
	)
}

export default Template