import logo from '/src/assets/logo.png'
import PocketBase from 'pocketbase'

 function Header(){
	const pb = new PocketBase('http://127.0.0.1:8090')
	async function Authenticate(){
		const authData = await pb.collection("users").authWithPassword('testing@example.com', '1234567890');
		console.log(pb.authStore.isValid);
		console.log(pb.authStore.token);
		console.log(pb.authStore.record.id);
	}
	async function Saverecord(){
		try {
			const record = await pb.collection('HTMLTable').create({
				HTML: 'value1',
				userID: 'rn097c8gdg2437i',
				project_name: 'name'
			})
		} catch (e){
			console.log(e)
		}
	}
	async function LoadRecord(){
		try {
			const record = await pb.collection('HTMLTable').getFirstListItem(`userID="${pb.authStore.record.id}"`)
			console.log(record)
		} catch (e){
			console.log(e)
		}
	}
	async function LoadRecords(){
		try {
			const record = await pb.collection('HTMLTable').getList(1, 50, {
				filter: `userID="${pb.authStore.record.id}"`,
			})
			console.log(record)
		} catch (e){
			console.log(e)
		}
	}
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
				<button onclick={LoadRecords} class="text-gray-400 hover:text-gray-200"> загрузить </button>
				<button onclick={Authenticate} class="text-gray-400 hover:text-gray-200">сохранить</button>
				<button class="text-gray-400 hover:text-gray-200">новый проект</button>
				
				<form class=" text-gray-400 hover:text-gray-200">
					
				</form>
			</div>
		</div>
	</nav>
	)
}
export default Header