import Header from "./Header";
import Templates from "./Templates";
import Properties from './Properties'
import Hierarchy from './Hierarchy'
import { createSignal, Show, createEffect } from "solid-js";
import PocketBase from 'pocketbase'

function Redactor() {
	let firstelement;
	let refer;
	let after;
	let insertable;

	// wtf?
	const [ReferenceFor, setReferenceFor] = createSignal({})
	const [update, setupdate] = createSignal({})
	const [REFERENCE, setREFERENCE] = createSignal({})
	const [getArrayOfProjects, setArrayOfProjects] = createSignal([])

	const [getUIshown, setUIshown] = createSignal(true)
	const [getShowGreen, setShowGreen] = createSignal(false)
	const [getAuthShown, setAuthShown] = createSignal(false)
	const [getLoadShown, setLoadShown] = createSignal(false)
	function showProperties(e){
		setReferenceFor(e.target)
	}
	function handleInsert() {
		const insert = insertable.cloneNode(true)
		insert.addEventListener('mouseenter', displayHint);
		insert.addEventListener('click', showProperties);
		if (after) {
			refer.after(insert);
		} else {
			refer.before(insert);
		} setShowGreen(false) 
		if (update().trigger){
			update().trigger()
		}
	}
	function displayHint(arg){
		refer = arg.target
		arg.target.parentNode.insertBefore(hint2, arg.target.nextSibling)
		arg.target.parentNode.insertBefore(hint1, arg.target)
	}
	document.addEventListener('keydown', function(event) {
		if (event.code === 'KeyH' && event.shiftKey) {
			setUIshown(!getUIshown())
			console.log('UI visibility is now', getUIshown())
		}
	})
	const pb = new PocketBase('http://127.0.0.1:8090')
	async function Saverecord(){
		try {
			let projectsName = prompt("Please enter your projects name:");
			const record = await pb.collection('HTMLTable').create({
				HTML: firstelement.innerHTML,
				userID: pb.authStore.record.id,
				project_name: projectsName
			})
		} catch (e){
			console.log(e)
		}
	}
	async function LoadRecords(){
		try {
			const records = await pb.collection('HTMLTable').getList(1, 50, {
				filter: `userID="${pb.authStore.record.id}"`,
			})
			setArrayOfProjects(records.items)
			//records.items.forEach((obj)=> {
			//	console.log(obj.created, obj.project_name, obj.HTML)
			//})
		} catch (e){
			console.log(e)
		}
	}
	async function Auth(email, password){
		const authData = await pb.collection("users").authWithPassword(email, password);
		console.log(pb.authStore.isValid);
		console.log(pb.authStore.token);
		console.log(pb.authStore.record.id);
	}
	createEffect(async ()=>{
		setREFERENCE(firstelement)
		Auth('testing@example.com', '1234567890')
	})
	const hint2 = (
		<div
			on:mouseenter={() => {
				console.log('hint 2 hovered')
				after=true
			}} 
			on:mouseup={handleInsert}
			style="display:flex; position: relative;  justify-content: center; align-items: center; ">
			<Show when={getShowGreen()}>
				<div class="absolute z-5 animate-pulse rounded-full bg-blue-300 h-8 w-8"></div>
			</Show>
		</div>
	)
	const hint1 =(
		<div 
			on:mouseenter={() => {
				console.log('hint 1 hovered')
				after=false
			}} 
			on:mouseup={handleInsert}
			style="display:flex; position: relative;  justify-content: center; align-items: center; ">
			<Show when={getShowGreen()}>
				<div class="absolute z-5 animate-pulse rounded-full bg-blue-300 h-8 w-8"></div>
			</Show>
		</div>
	)
  return (
	<div>
		<div ref={firstelement}>
			
		<div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
  <header
    on:click={showProperties}
    on:mouseenter={displayHint}
    class="bg-blue-500 text-white p-6 rounded-lg shadow-lg mb-8 cursor-pointer"
  >
    <h1 class="text-4xl font-bold">Welcome to Our Landing Page</h1>
    <p class="mt-2">Click or hover to see details!</p>
  </header>

  <main
    on:click={showProperties}
    on:mouseenter={displayHint}
    class="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full cursor-pointer"
  >
    <h2 class="text-2xl font-semibold mb-4">About Us</h2>
    <p class="text-gray-700">
      We are a company dedicated to creating amazing web experiences. Hover over or click any component to see its properties.
    </p>
  </main>

  <footer
    on:click={showProperties}
    on:mouseenter={displayHint}
    class="mt-8 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-full text-center cursor-pointer"
  >
    <p>&copy; 2023 Your Company. All rights reserved.</p>
  </footer>
</div>

	</div>
		<Show when={getUIshown()}>
			<Header 
			handleLoad={()=>{
				LoadRecords()
				setLoadShown(!getLoadShown())
			}}
			handleAuth={()=>setAuthShown(!getAuthShown())} 
			handleSave={Saverecord}/>
			<Templates 
				emitDragg={(arg) => {
					console.log('Drag'); 
					insertable = arg; 
					setShowGreen(true);
				}}
			/>
			<nav class="fixed inset-y-0 right-0 bg-gray-800 bg-opacity-95 h-screen w-48">
				<Hierarchy emitUpdate={/*wtf?*/setupdate} bodyRef={REFERENCE()}/>
				<Properties elementRef={ReferenceFor()}/>
			</nav>
		</Show>
		<Show when={getAuthShown()}>
			<div class="fixed inset-0 z-20 flex flex-col justify-center">
				<div class="bg-gray-800 opacity-80 backdrop-blur-3xl w-screen h-screen">
				</div>
				<div class="z-20 h-2/4 w-screen fixed z-20 flex justify-center">
					<form id='formid' onsubmit={(e)=>{
						e.preventDefault();
						const formData = new FormData(e.target);
						const email = formData.get('email');
						const password = formData.get('password');
						console.log('Submitted:', { email, password })
						Auth(email, password)
					}} class="bg-gray-900 w-1/4 h-full rounded-3xl shadow-2xl">
						<div class="mt-8 text-2xl text-gray-400 text-center">
							аунтификация
						</div>
						<div class="h-4/6 w-full flex justify-center">
							<div class="h-3/6 w-5/6 mt-8 flex flex-col justify-around">
								<div>
									<div class="h-6 ml-4 w-full text-gray-400 text-start">
									почта
									</div>
									<input 
									name="email"
									type="email"
									class="h-10 w-full bg-gray-800 rounded-xl shadow-2xl"
									/>
								</div>
								<div>
									<div class="h-6 ml-4 w-full text-gray-400 text-start">
									пароль
									</div>
									<input 
									name="password"  // Added name attribute
									type="password"  // Hides input for passwords
									class="h-10 w-full bg-gray-800 rounded-xl shadow-2xl"
									/>
								</div>
							</div>
						</div>
						<div class="mt-6 flex justify-around">
							<button type="submit" form="formid" class="w-1/3 h-10 bg-gray-700 text-gray-400 rounded-xl shadow-2xl">
								вход
							</button>
							<button onclick={()=>setAuthShown(!getAuthShown())} class="w-1/3 h-10 bg-gray-700 text-gray-400 rounded-xl shadow-2xl">
								X
							</button>
							<button class="w-1/3 h-10 bg-gray-700 text-gray-400 rounded-xl shadow-2xl">
								регистрация
							</button>
						</div>
					</form>
				</div>
			</div>
		</Show>
		<Show when={getLoadShown()}>
			<div class="fixed inset-0 z-20 flex flex-col justify-center">
				<div class="bg-gray-800 opacity-80 backdrop-blur-3xl w-screen h-screen">

				</div>
				<div class="z-20 h-3/4 w-screen fixed z-20 flex justify-center">
					<div class="bg-gray-900 w-3/5 h-full rounded-3xl shadow-2xl">
						<div onclick={()=>setLoadShown(!getLoadShown())} class="mt-6 text-2xl text-gray-400 text-center">
							закрыть список проектов
						</div>
						<div class="h-10/12 mt-6 w-full flex justify-center">
							<nav class="bg-gray-800 rounded-xl h-full w-11/12 overflow-auto">
							<For each={getArrayOfProjects()}>
								{(project) =>
									<div class="ml-11 my-4 w-11/12 h-48 rounded-xl bg-gray-700 flex">
									<div class="h-full w-2/6 flex flex-col justify-center">
										<img
											//src={img2}
											className="ml-4 h-5/6"
										/>
									</div>

									<div class="ml-32 mt-4 h-5/6 w-3/6 bg-gray-800 rounded-xl">
										<div class="h-6 flex justify-around text-xl">
											<div class="text-gray-300">
												{project.project_name}
											</div>
											<div class="text-gray-400">
												{project.created}
											</div>
										</div>

										<div class="h-20 mt-4 mx-4 text-gray-500">
											очков баранов без применения специализированной смазки
										</div>

										<div class="flex justify-around">
											<button class="w-1/3 h-8 bg-gray-700 text-gray-400 rounded-xl shadow-2xl">
												удалить
											</button>
											<button onclick={() => firstelement.innerHTML=project.HTML} class="w-1/3 h-8 bg-gray-700 text-gray-400 rounded-xl shadow-2xl">
												загрузить
											</button>
										</div>
									</div>
								</div>
								}
							</For>
								
							</nav>
						</div>
					</div>
				</div>
			</div>
		</Show>
	</div>
  );
}

export default Redactor;
