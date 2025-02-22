import Header from "./Header";
import Templates from "./Templates";
import Properties from './Properties'
import Hierarchy from './Hierarchy'
import { createSignal, Show } from "solid-js";

function Redactor() {
	const [getUIshown, setUIshown] = createSignal(true)
	let body
	function handleInsertInto(into, what) {
		into.innerHTML = what
	}
	document.addEventListener('keydown', function(event) {
		if (event.code === 'KeyH' && event.shiftKey) {
			setUIshown(!getUIshown())
			console.log('UI visibility is now', getUIshown())
		}
	});
  return (
	<div>
		<div ref={body}>
			
		</div>
		<div class="fixed inset-0">
		<Show when={getUIshown()}>
			<Header/>
			<Templates/>
			<nav class="fixed inset-y-0 right-0 bg-gray-800 bg-opacity-95 h-screen w-48">
				<Hierarchy/>
				<Properties/>
			</nav>
		</Show>
		</div>
	</div>
  );
}

export default Redactor;
