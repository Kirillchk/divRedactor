import Template from "./Components/Template";

function Templates(){
	return(
		<>
			<nav class="fixed inset-y-0 left-0 bg-gray-800 bg-opacity-95 h-screen w-48">
				<div class="mx-2 h-10 text-gray-300 flex justify-center items-center">шаблоны элементов</div>
				<div class="bg-gray-500 border border-gray-700 h-1 w-full"></div>
				<li>
					<Template>
						<div></div>
					</Template>
					<Template>
						<aside></aside>
					</Template>
					<Template>
						<span></span>
					</Template>
					<Template>
						<button></button>
					</Template>
				</li>
			</nav>
		</>
	)
}

export default Templates;