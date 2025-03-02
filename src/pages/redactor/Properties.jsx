import { createSignal, createEffect } from 'solid-js';

function Properties(props){
	const displays = ['flex', 'block', 'inline', 'inline-block', 'hidden']
	const positions = ['static', 'fixed', 'absolute', 'relative', 'sticky']
	const [display, setdisplay] = createSignal('block')
	const [position, setPosition] = createSignal('static')
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
	function handlePositionChange(event){
		positions.forEach((p) =>{
			props.elementRef.classList.remove(p)
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
	<form class="h-3/5" onSubmit={handleSubmit}>

		<div class="bg-gray-500 border border-gray-700 h-1 w-full"></div>

		<div class="mx-2 mt-1 h-5/6 flex justify-center">
			<div class="bg-gray-900 rounded bg-opacity-60 h-full w-48 text-gray-400 flex overflow-auto shadow-2xl">
				<nav>
					<div class="bg-opacity-95 rounded h-6 w-full text-sm text-gray-400 flex justify-between items-center">
						<div class="ml-2">
							display
						</div>

						<select class="bg-gray-900 w-1/2 h-4 ml-8 mr-1" id="display" value={display()} onChange={handleDisplayChange}>
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
							position
						</div>
						<select class="bg-gray-900 w-1/2 h-4 ml-6 mr-1" id="display" value={position()} onChange={handlePositionChange}>
								<For each={positions}>
									{
										(p) =>
												<option value={p}>
														{p}
												</option>
									}
								</For>
						</select>
					</div>

					<div class="bg-opacity-95 rounded h-6 w-full text-sm text-gray-400 flex justify-between items-center">
						<div class="ml-2">
							margin
						</div>

						<input class="bg-gray-900 w-1/2 h-4 ml-8 mr-1" type="number" min="0" id="mg" value={mg()} onInput={(e) => setMg(e.target.value)}></input>
					</div>

					<div class="bg-opacity-95 rounded h-6 w-full text-sm text-gray-400 flex justify-between items-center">
						<div class="ml-2">
							padding
						</div>

						<input class="bg-gray-900 w-1/2 h-4 ml-6 mr-1" type="number" min="0" id="pd" value={pd()} onInput={(e) => setPd(e.target.value)}></input>
					</div>

					<div class="bg-opacity-95 rounded h-6 w-full text-sm text-gray-400 flex justify-between items-center">
						<div class="ml-2">
							color
						</div>

						<input class="bg-gray-900 w-1/2 h-4 ml-7 mr-1" type="color" id="color" value={color()} onInput={(e) => setColor(e.target.value)}></input>
					</div>

					<div class="bg-opacity-95 rounded h-6 w-full text-sm text-gray-400 flex justify-between items-center">
						<div class="ml-2">
							debug
						</div>

						<button class="rounded-lg bg-gray-700 bg-opacity-95 hover:bg-gray-600 w-1/2 h-4 ml-7  mr-1" type="submit">click</button>
					</div>
				</nav>
			</div>
		</div>
	</form>
  );
}
export default Properties