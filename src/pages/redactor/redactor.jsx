import Header from "./Header";
import Templates from "./Templates";
import Properties from './Properties'
import Hierarchy from './Hierarchy'
import { createSignal, Show, createEffect } from "solid-js";

function Redactor() {
	let firstelement;
	let refer;
	let after;
	let insertable;

	// wtf?
	const [ReferenceFor, setReferenceFor] = createSignal({})
	const [update, setupdate] = createSignal({})
	const [REFERENCE, setREFERENCE] = createSignal({})
	const [getUIshown, setUIshown] = createSignal(false)
	const [getShowGreen, setShowGreen] = createSignal(false)

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
	createEffect(()=>{
		setREFERENCE(firstelement)
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
			<Header/>
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
	</div>
  );
}

export default Redactor;
