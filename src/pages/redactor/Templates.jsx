function Templates(){
	return(
		<nav class="fixed inset-y-0 left-0 bg-gray-800 bg-opacity-95 h-screen w-48">
			<div class="mx-2 h-10 text-gray-300 flex justify-center items-center">шаблоны элементов</div>

			<div class="bg-gray-500 border border-gray-700 h-1 w-full"></div>

			<div draggable='true' class="mx-2 h-12 flex justify-center items-center">
				<button class="bg-gray-700 bg-opacity-95 rounded-lg h-10 w-48 text-gray-400 hover:text-gray-200 hover:bg-gray-600 flex justify-around items-center">
					<img src="https://avatars.mds.yandex.net/i?id=f64710d1da958f2fc884be6cb109e1faa58442e8ddd00328-5268818-images-thumbs&amp;n=13" class="-mx-8 w-10 h-5"/>

					slider
				</button>
			</div>

			<div class="mx-2 h-12 flex justify-center items-center">
				<button class="bg-gray-700 bg-opacity-95 rounded-lg h-10 w-48 text-gray-400 hover:text-gray-200 hover:bg-gray-600 flex justify-around items-center">
					<img src="https://avatars.mds.yandex.net/i?id=f64710d1da958f2fc884be6cb109e1faa58442e8ddd00328-5268818-images-thumbs&amp;n=13" class="-mx-8 w-10 h-5"/>

					slider
				</button>
			</div>
		</nav>
	)
}

export default Templates;