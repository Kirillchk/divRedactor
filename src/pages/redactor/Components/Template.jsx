function Template(props){
	const name = `${props.name || props.children.tagName}`
	const objectToInsert = props.children.outerHTML
	return(
		<div draggable='true' class="select-none cursor-move">
			{name}
		</div>
	)
}

export default Template