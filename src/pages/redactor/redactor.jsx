import Header from "./Header";
import Templates from "./Templates";
import Properties from './Properties'
import Hierarchy from './Hierarchy'
import { createSignal, Show } from "solid-js";

function Redactor() {
	const [getUIshown, setUIshown] = createSignal(false)
	const [getShowGreen, setShowGreen] = createSignal(false)
	let body
	function handleInsertInto(into, what) {
		into.innerHTML = what
	}
	function fuf(){
		console.log('asda')
	}
	document.addEventListener('keydown', function(event) {
		if (event.code === 'KeyH' && event.shiftKey) {
			setUIshown(!getUIshown())
			console.log('UI visibility is now', getUIshown())
		}
	});
  return (
	<>
		<div ref={body}>
			{/*<div style="display:flex; position: relative;  justify-content: center; align-items: center; ">
				<div style="z-index: 5; position: absolute; height: 20px; width: 20px; background-color: green;">
				</div>
			</div>*/}
			<div draggable='true' class="select-none cursor-move" on:dragstart={fuf}>
				<div>asdas</div>
			</div>
			<div>
				aelement
			</div>
			<div>
				aelement
			</div>
			<div>
				aelement
			</div>
			<div>
				aelement
			</div>
			<div>
				aelement
			</div>
		</div>
		<div class="fixed inset-0">
			<Show when={getUIshown()}>
				<Header/>
				<Templates emitDragg={() => console.log('asd')}/>
				<nav class="fixed inset-y-0 right-0 bg-gray-800 bg-opacity-95 h-screen w-48">
					<Hierarchy/>
					<Properties/>
				</nav>
			</Show>
		</div>
	</>
  );
}

export default Redactor;
