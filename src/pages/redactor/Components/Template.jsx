function Template(props){
	const name = `${props.name || props.children.tagName}`
	const objectToInsert = props.children
	function emitDragg(event){
		event.preventDefault();
		props.emitDragg(objectToInsert)
	}
	return(
		<div draggable='true' class="select-none cursor-move" on:dragstart={emitDragg} >
			{name}
		</div>
	)
}

export default Template