import Header from "./Header";
import Templates from "./Templates";
import Properties from './Properties'
import Hierarchy from './Hierarchy'
import { createSignal, Show } from "solid-js";

function Redactor() {
	const [getUIshown, setUIshown] = createSignal(false)
	const [getShowGreen, setShowGreen] = createSignal(false)
	const hint1 = (
		<div style="display:flex; position: relative;  justify-content: center; align-items: center; ">
			<div style="z-index: 5; position: absolute; height: 20px; width: 20px; background-color: green;">
			</div>
		</div>
	)
	const hint2 = (
		<div style="display:flex; position: relative;  justify-content: center; align-items: center; ">
			<div style="z-index: 5; position: absolute; height: 20px; width: 20px; background-color: green;">
			</div>
		</div>
	)
	function handleInsertInto(into, what) {
		into.innerHTML = what
	}
	function fuf(arg){
		arg.target.id = 'Is selected element'
		arg.target.insertBefore(hint1, arg.target.childNode)
		arg.target.parentNode.insertBefore(hint2, arg.target)
	}
	function fuf2(arg){
		arg.target.id = ''
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
			<div on:mouseenter={fuf} on:mouseleave={fuf2}>
				asdas
			</div>
			<div on:mouseenter={fuf} on:mouseleave={fuf2}>
				aelement
			</div >
			<div on:mouseenter={fuf} on:mouseleave={fuf2}>
				aelement
			</div>
			<div on:mouseenter={fuf} on:mouseleave={fuf2}>
				aelement
			</div>
			<div>
				aelement
			</div>
			<div>
				aelement
			</div>
		</div>
		<Show when={getUIshown()}>
			<div class="fixed inset-0">
					<Header/>
					<Templates emitDragg={() => console.log('asd')}/>
					<nav class="fixed inset-y-0 right-0 bg-gray-800 bg-opacity-95 h-screen w-48">
						<Hierarchy/>
						<Properties/>
					</nav>
			</div>
		</Show>
	</div>
  );
}

export default Redactor;
