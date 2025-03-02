import { createSignal, createEffect } from 'solid-js';

function Properties(props){
	const displays = ['flex', 'block', 'inline', 'inline-block', 'hidden']
	const [display, setdisplay] = createSignal('block')
  const [mg, setMg] = createSignal(0);
  const [pd, setPd] = createSignal(0);
  const [color, setColor] = createSignal('#000000');

	function handleDisplayChange(event){
		displays.forEach((d)=>{
			props.elementRef.classList.remove(d)
		})
		props.elementRef.classList.add(event.target.value)
		console.log(props.elementRef.classList)
	}
	function handleChangeInnerText(event){
		props.elementRef.innerText = event.target.value
	}
	function handleSubmit(event){
		event.preventDefault()
		//console.log(props.elementRef.innerHTML)
	}
	createEffect(() => {
		console.log(props.elementRef)
	})
  return (
    <div>
        <div class="-mt-4 mx-2 h-10 text-gray-300 flex justify-center items-center">css редактор</div>

        <div class="bg-gray-500 border border-gray-700 h-1 w-full"></div>

        <div class="mx-2 mt-1 h-2/5 flex justify-center">
            <div class="bg-gray-900 rounded bg-opacity-60 h-full w-48 text-gray-400 flex overflow-auto shadow-2xl">
                <nav>
                    <div class="bg-opacity-95 rounded h-6 w-full text-sm text-gray-400 flex justify-between items-center">
                        <div class="ml-2">
                            display
                        </div>

                        <select class="bg-gray-900 w-1/2 h-4 ml-8" id="display" value={display()} onChange={handleDisplayChange}>
                            <For each={displays}>
                                {
                                    (d) =>
                                        <option value={d}>
                                            {d}
                                        </option>
                                }
                            </For>
                        </select>
                    </div>

                    <div class="bg-opacity-95 rounded h-6 w-full text-sm text-gray-400 flex justify-between items-center">
                        <div class="ml-2">
                            margin
                        </div>

                        <input class="bg-gray-900 w-1/2 h-4 ml-8" type="number" min="0" id="mg" value={mg()} onInput={(e) => setMg(e.target.value)}></input>
                    </div>

                    <div class="bg-opacity-95 rounded h-6 w-full text-sm text-gray-400 flex justify-between items-center">
                        <div class="ml-2">
                            padding
                        </div>

                        <input class="bg-gray-900 w-1/2 h-4 ml-7" type="number" min="0" id="pd" value={pd()} onInput={(e) => setPd(e.target.value)}></input>
                    </div>
                </nav>
            </div>
        </div>

        <form onSubmit={handleSubmit}>

        <div>
            <label for="pd">Padding (pd):</label>
            <input
            type="number"
                    min="0"
            id="pd"
            value={pd()}
            onInput={(e) => setPd(e.target.value)}
            />
        </div>

        <div>
            <label for="color">Color:</label>
            <input
            type="color"
            id="color"
            value={color()}
            onInput={(e) => setColor(e.target.value)}
            />
        </div>

        <button type="submit">Debug</button>
        </form>
    </div>
  );
}
export default Properties