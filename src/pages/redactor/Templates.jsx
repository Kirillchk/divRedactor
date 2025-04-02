import Template from "./Components/Template";

function Templates(props){
	const compsList1 = [
		document.createElement('aside'),
		document.createElement('footer'),
		document.createElement('header'),
		document.createElement('nav')
	]
	const compsList2 = [
		document.createElement('div'),
		document.createElement('ul')
	]
	const compsList3 = [
		document.createElement('li')
	]
	const compsList4 = [
		document.createElement('p'),
		document.createElement('a')
	]
	const compsList5 = [
		document.createElement('img'),
		document.createElement('video')
	]
	const compsList6 = [
		document.createElement('button'),
		document.createElement('input')
	]
	compsList1.forEach((comp) => comp.innerText = 'abcde' )
	compsList2.forEach((comp) => comp.innerText = 'abcde' )
	compsList3.forEach((comp) => comp.innerText = 'abcde' )
	compsList4.forEach((comp) => comp.innerText = 'abcde' )
	compsList5.forEach((comp) => comp.innerText = 'abcde' )
	compsList6.forEach((comp) => comp.innerText = 'abcde' )
	return (
		<>
			<div class="fixed z-10 inset-x-0 bottom-0 bg-gray-800 bg-opacity-95 h-48 w-screen flex justify-left">
				<div class="mt-2 ml-2 mr-2 w-44 h-44 bg-gray-900 rounded text-gray-400">
					<div class="w-full h-8 text-gray-300 flex justify-center items-center">семантические</div>

					<div class="bg-gray-600 border border-gray-800 h-1 w-full"></div>

					<div class="w-full mt-1 h-34 overflow-auto">
						<ul>
							<For each={compsList1} fallback={<div>Loading...</div>}>
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
					<div class="w-full h-8 text-gray-300 flex justify-center items-center">блочные</div>

					<div class="bg-gray-600 border border-gray-800 h-1 w-full"></div>

					<div class="w-full mt-1 h-34 overflow-auto">
						<ul>
							<For each={compsList2} fallback={<div>Loading...</div>}>
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
					<div class="w-full h-8 text-gray-300 flex justify-center items-center">списочные</div>

					<div class="bg-gray-600 border border-gray-800 h-1 w-full"></div>

					<div class="w-full mt-1 h-34 overflow-auto">
						<ul>
							<For each={compsList3} fallback={<div>Loading...</div>}>
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
					<div class="w-full h-8 text-gray-300 flex justify-center items-center">текстовые</div>

					<div class="bg-gray-600 border border-gray-800 h-1 w-full"></div>

					<div class="w-full mt-1 h-34 overflow-auto">
						<ul>
							<For each={compsList4} fallback={<div>Loading...</div>}>
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
					<div class="w-full h-8 text-gray-300 flex justify-center items-center">мультимедийные</div>

					<div class="bg-gray-600 border border-gray-800 h-1 w-full"></div>

					<div class="w-full mt-1 h-34 overflow-auto">
						<ul>
							<For each={compsList5} fallback={<div>Loading...</div>}>
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
					<div class="w-full h-8 text-gray-300 flex justify-center items-center">управление</div>

					<div class="bg-gray-600 border border-gray-800 h-1 w-full"></div>

					<div class="w-full mt-1 h-34 overflow-auto">
						<ul>
							<For each={compsList6} fallback={<div>Loading...</div>}>
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