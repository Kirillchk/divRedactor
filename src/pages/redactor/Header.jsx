function Header(){
	return(
	<nav class="fixed inset-0 z-10 h-10 bg-gray-900 opacity-0 hover:opacity-100 overflow-auto">
		<div class="mx-10 flex justify-between items-center">
			<a href="Untitled-2.html" class="text-gray-200 text-2xl font-bold">логотип</a>

			<div class="space-x-5">
				<button class="text-gray-400 hover:text-gray-200">
					загрузить
				</button>

				<button class="text-gray-400 hover:text-gray-200">сохранить</button>

				<button class="text-gray-400 hover:text-gray-200">новый проект</button>
			</div>
		</div>
	</nav>
	)
}
export default Header