import Template from "./Components/Template";

function Templates(props){
	const compsList = [
		document.createElement('aside'),
		document.createElement('footer'),
		document.createElement('header'),
		document.createElement('nav'),
		document.createElement('div'),
		document.createElement('li'),
		document.createElement('p'),
		document.createElement('ul'),
		document.createElement('a'),
	]
	compsList.forEach((comp) => comp.innerText = 'lorem' )
	return (
		<>
			<div class="pt-10 fixed z-0 inset-y-0 left-0 bg-gray-800 bg-opacity-95 w-48 h-screen flex flex-col">
				<div class="w-full mt-1 overflow-auto">
					<ul>
						<For each={compsList} fallback={<div>Loading...</div>}>
							{(comp) => 
								<li class="w-40 h-8 bg-gray-700 hover:bg-gray-500 opacity-75 rounded ml-2 mb-1 text-gray-300 hover:text-gray-100 text-center">                                    
									<Template emitDragg={props.emitDragg}>
										{comp}
									</Template>	
								</li>
							}
						</For>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Templates;