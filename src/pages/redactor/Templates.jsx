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
		document.createElement('img'),
		document.createElement('video'),
		document.createElement('button'),
		document.createElement('input')
	]
	compsList.forEach((comp) => comp.innerText = 'lorem' )
	return (
		<>
			<div class="fixed z-10 inset-x-0 bottom-0 bg-gray-800 bg-opacity-95 h-48 w-screen flex justify-left">
				<div class="mt-2 ml-2 mr-2 w-44 h-44 bg-gray-900 rounded text-gray-400">
					<div class="w-full h-8 text-gray-300 flex justify-center items-center">контейнеры</div>

					<div class="bg-gray-600 border border-gray-800 h-1 w-full"></div>

					<div class="w-full mt-1 h-34 overflow-auto">
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

				<div class="mt-2 ml-2 mr-2 w-44 h-44 bg-gray-900 rounded text-gray-400">
					<div class="w-full h-8 text-gray-300 flex justify-center items-center">контейнеры</div>

					<div class="bg-gray-600 border border-gray-800 h-1 w-full"></div>

					<div class="w-full mt-1 h-34 overflow-auto">
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
			</div>
		</>
	)
}

export default Templates;