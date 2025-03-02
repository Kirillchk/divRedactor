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

	const [REFERENCE, setREFERENCE] = createSignal({})
	const [getUIshown, setUIshown] = createSignal(false)
	const [getShowGreen, setShowGreen] = createSignal(false)

	function showProperties(e){
		setREFERENCE(e.target)
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
	}
	function displayHint(arg){
		refer = arg.target
		arg.target.parentNode.insertBefore(hint1, arg.target.nextSibling)
		arg.target.parentNode.insertBefore(hint2, arg.target)
	}
	const hint1 = (
		<div
			on:mouseenter={() => {
				console.log('hint 2 hovered')
				after=true
			}} 
			on:mouseup={handleInsert}
			style="display:flex; position: relative;  justify-content: center; align-items: center; ">
			<Show when={getShowGreen()}>
				<div style="z-index: 5; position: absolute; height: 20px; width: 20px; background-color: green;">
				</div>
			</Show>
		</div>
	)
	const hint2 = (
		<div 
			on:mouseenter={() => {
				console.log('hint 1 hovered')
				after=false
			}} 
			on:mouseup={handleInsert}
			style="display:flex; position: relative;  justify-content: center; align-items: center; ">
			<Show when={getShowGreen()}>
				<div style="z-index: 5; position: absolute; height: 20px; width: 20px; background-color: green;">
				</div>
			</Show>
		</div>
	)
	document.addEventListener('keydown', function(event) {
		if (event.code === 'KeyH' && event.shiftKey) {
			setUIshown(!getUIshown())
			console.log('UI visibility is now', getUIshown())
		}
	})
	createEffect(()=>{
		setREFERENCE(firstelement)
	})
  return (
	<div>
		<div ref={firstelement}>
			<div on:click={showProperties} on:mouseenter={displayHint}>
				1
			</div>
			<div on:click={showProperties} on:mouseenter={displayHint}>
				2
			</div >
			<div class="" on:click={showProperties} on:mouseenter={displayHint}>
				aaaaaaaaaaaaa
				<div>
					asd1
				</div>
				<div>
					asd1
				</div>
				<div>
					asd1
				</div>
				<div>
					asd1
				</div>
			</div>
			<div on:click={showProperties} on:mouseenter={displayHint}>
				3
			</div>
			<div on:click={showProperties} on:mouseenter={displayHint}>
				4
			</div>
			<div on:click={showProperties} on:mouseenter={displayHint}>
				5
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
				<Hierarchy/>
				<Properties elementRef={REFERENCE()}/>
			</nav>
		</Show>
	</div>
  );
}

export default Redactor;
