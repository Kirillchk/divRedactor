function Template(props){
	const name = `${props.name || props.children.tagName}`
	const objectToInsert = props.children.outerHTML
	function trigger(){
		props.emitDragg()
	}
	return(
		<div draggable='true' class="select-none cursor-move" on:dragstart={trigger}>
			{name}
		</div>
	)
}

export default Template