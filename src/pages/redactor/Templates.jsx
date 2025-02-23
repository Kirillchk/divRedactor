import Template from "./Components/Template";

function Templates(props){
	const compsList = [
		document.createElement('div'),
		document.createElement('aside'),
		document.createElement('span'),
		document.createElement('h1'),
		document.createElement('a')
	]
	return(
		<>
			<nav class="fixed inset-y-0 left-0 bg-gray-800 bg-opacity-95 h-screen w-48">
				<div class="mx-2 h-10 text-gray-300 flex justify-center items-center">шаблоны элементов</div>
				<div class="bg-gray-500 border border-gray-700 h-1 w-full"></div>
				<ul>
					<For each={compsList} fallback={<div>Loading...</div>}>
						{(comp) => 
							<li>
								<Template emitDragg={props.emitDragg}>
									{comp}
								</Template>
							</li>
						}
					</For>
				</ul>
			</nav>
		</>
	)
}

export default Templates;