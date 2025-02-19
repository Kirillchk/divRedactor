function Hierarchy(){
	return(
		<div>
			<div class="mx-2 h-10 text-gray-300 flex justify-center items-center">иерархия элементов</div>

			<div class="bg-gray-500 border border-gray-700 h-1 w-full"></div>

			<div class="mx-2 mt-1 h-2/5 flex justify-center">
				<div class="bg-gray-900 rounded bg-opacity-60 h-full w-48 text-gray-400 hover:text-gray-200 flex justify-around overflow-auto shadow-2xl">
					<nav>
						<div class="h-7 flex justify-center items-center">
							<div class="bg-gray-700 bg-opacity-95 rounded h-6 w-40 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-600 flex justify-around items-center">
								<img src="https://avatars.mds.yandex.net/i?id=f64710d1da958f2fc884be6cb109e1faa58442e8ddd00328-5268818-images-thumbs&amp;n=13" class="-mx-8 w-8 h-4"/>

								slider
							</div>
						</div>

						<div class="h-7 flex justify-center items-center">
							<div class="bg-gray-700 bg-opacity-95 rounded h-6 w-40 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-600 flex justify-around items-center">
								<img src="https://avatars.mds.yandex.net/i?id=f64710d1da958f2fc884be6cb109e1faa58442e8ddd00328-5268818-images-thumbs&amp;n=13" class="-mx-8 w-8 h-4"/>

								slider
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	)
}