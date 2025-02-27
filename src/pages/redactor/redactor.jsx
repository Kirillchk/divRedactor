import Header from "./Header";
import Templates from "./Templates";
import Properties from './Properties'
import Hierarchy from './Hierarchy'
import { createSignal, Show } from "solid-js";
import { insert } from "solid-js/web";

function Redactor() {
	const [getUIshown, setUIshown] = createSignal(false)
	const [getShowGreen, setShowGreen] = createSignal(false)
	let refer;
	let after;
	const hint1 = (
		<div
			on:mouseenter={() => {
				console.log('hint 2 hovered')
				after=true
			}} 
			style="display:flex; position: relative;  justify-content: center; align-items: center; ">
			<div style="z-index: 5; position: absolute; height: 20px; width: 20px; background-color: green;">
			</div>
		</div>
	)
	const hint2 = (
		<div 
			on:mouseenter={() => {
				console.log('hint 1 hovered')
				after=false
			}} 
			style="display:flex; position: relative;  justify-content: center; align-items: center; ">
			<div style="z-index: 5; position: absolute; height: 20px; width: 20px; background-color: green;">
			</div>
		</div>
	)
	function handleInsert(element) {
		if (after) {
			refer.after(element.cloneNode(true));
		} else {
			refer.before(element.cloneNode(true));
		}
	}
	function displayHint(arg){
		refer = arg.target
		arg.target.parentNode.insertBefore(hint1, arg.target.nextSibling)
		arg.target.parentNode.insertBefore(hint2, arg.target)
	}
	document.addEventListener('keydown', function(event) {
		if (event.code === 'KeyH' && event.shiftKey) {
			setUIshown(!getUIshown())
			console.log('UI visibility is now', getUIshown())
		}
	});
  return (
	<div>
		<div>
			<div on:mouseenter={displayHint}>
				asdas
			</div>
			<div on:mouseenter={displayHint}>
				aelement
			</div >
			<div on:mouseenter={displayHint}>
				aelement
			</div>
			<div on:mouseenter={displayHint}>
				aelement
			</div>
			<div on:mouseenter={displayHint}>
				aelement
			</div>
			<div on:mouseenter={displayHint}>
				aelement
			</div>
		</div>
		<Show when={getUIshown()}>
			<Header/>
			<Templates 
				emitDragg={(arg) => console.log('Drag')} 
				emitDrop={(arg) => {console.log('Drop'); handleInsert(arg)}}/>
			<nav class="fixed inset-y-0 right-0 bg-gray-800 bg-opacity-95 h-screen w-48">
				<Hierarchy/>
				<Properties/>
			</nav>
		</Show>
	</div>
  );
}

export default Redactor;
