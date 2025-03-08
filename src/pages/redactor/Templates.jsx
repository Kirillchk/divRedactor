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
	return(
		<>
			<nav class="fixed z-10 inset-x-0 bottom-0 bg-gray-800 bg-opacity-95 h-48 w-screen flex justify-between items-center">
                <For each={compsList} fallback={<div>Loading...</div>}>
                    {(comp) => 
                        <div class="bg-gray-700 bg-opacity-95 rounded-lg h-10 w-48 text-gray-400 hover:text-gray-200 hover:bg-gray-600 flex justify-around items-center">                                    
                            <Template emitDragg={props.emitDragg}>
                                {comp}
                            </Template>
                        </div>
                    }
                </For>
			</nav>
		</>
	)
}

export default Templates;