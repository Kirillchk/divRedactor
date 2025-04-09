import logo from '/src/assets/logo.png'

 function Header(props){
	
	// after the above you can also access the auth data from the authStore
	return(
	<nav class="fixed inset-0 z-10 h-10 bg-gray-900 overflow-auto">
		<div class="mx-10 flex justify-between items-center">
			<a href="/" class="text-gray-200 text-2xl font-bold">
				<img 
					href="/"
					src={logo}
					className="mt-1 h-8"
				/>
			</a>

			<div class="space-x-5">
				<button onclick={props.handleLoad} class="text-gray-400 hover:text-gray-200">Загрузить </button>
				<button onclick={props.handleSave} class="text-gray-400 hover:text-gray-200">Сохранить</button>
				<button onclick={props.handleAuth} class="text-gray-400 hover:text-gray-200">Аккаунт</button>
				<button onclick={props.handleNewProject} class="text-gray-400 hover:text-gray-200">Новый проект</button>
				
				<form class=" text-gray-400 hover:text-gray-200">
					
				</form>
			</div>
		</div>
	</nav>
	)
}
export default Header