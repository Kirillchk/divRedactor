function Hierarchy(){
	const arr = ['asd', 'asd', 'asdf']
	let hier;
	function generateDOMTree(element, depth = 0) {
    const prefix = ' '.repeat(depth * 2) + (depth > 0 ? '├─ ' : '');
    const tagName = element.tagName.toLowerCase();
    console.log(prefix + tagName);
    const children = element.children;
    for (let i = 0; i < children.length; i++) {
      generateDOMTree(children[i], depth + 1);
    }
	}
	function Handle(){
		generateDOMTree(hier)
	}
	return(
		<div class="h-2/5">
			<div class="mt-10 mx-2 h-10 text-gray-300 flex justify-center items-center" on:click={Handle}>иерархия элементов</div>

			<div class="bg-gray-500 border border-gray-700 h-1 w-full"></div>

			<div class="mx-2 mt-1 h-5/6 flex justify-center">
				<div class="bg-gray-900 rounded bg-opacity-60 h-full w-48 text-gray-400 hover:text-gray-200 flex justify-around overflow-auto shadow-2xl">
					<nav ref={hier}>
						<For each={arr}>
							{(e) => 
								<div class="h-7 flex justify-center items-center">
									<div class="bg-gray-700 bg-opacity-95 rounded h-6 w-40 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-600 flex justify-around items-center">
										{e}
									</div>
								</div>
							}
						</For>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Hierarchy