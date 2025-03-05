import { createSignal, createEffect } from 'solid-js';

function Properties(props){
	const displays = ['flex', 'block', 'inline', 'inline-block', 'hidden']
	const positions = ['static', 'fixed', 'absolute', 'relative', 'sticky']
	const [display, setdisplay] = createSignal('block')
	const [position, setPosition] = createSignal('static')
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
	function handleMtUpdate(event){
		const name = 'mt'
		const value = event.target.value
		const res = `${name}-${value}`
		console.log(props.elementRef.classList)
		props.elementRef.classList.forEach((cl)=>{
			if(cl[0]+cl[1]==name){
				props.elementRef.classList.remove(cl)
			}
		})
		props.elementRef.classList.add(res)
	}
	function handleMrUpdate(event){
		const name = 'mr'
		const value = event.target.value
		const res = `${name}-${value}`
		console.log(props.elementRef.classList)
		props.elementRef.classList.forEach((cl)=>{
			if(cl[0]+cl[1]==name){
				props.elementRef.classList.remove(cl)
			}
		})
		props.elementRef.classList.add(res)
	}
	function handleMbUpdate(event){
		const name = 'mb'
		const value = event.target.value
		const res = `${name}-${value}`
		console.log(props.elementRef.classList)
		props.elementRef.classList.forEach((cl)=>{
			if(cl[0]+cl[1]==name){
				props.elementRef.classList.remove(cl)
			}
		})
		props.elementRef.classList.add(res)
	}
	function handleMlUpdate(event){
		const name = 'ml'
		const value = event.target.value
		const res = `${name}-${value}`
		console.log(props.elementRef.classList)
		props.elementRef.classList.forEach((cl)=>{
			if(cl[0]+cl[1]==name){
				props.elementRef.classList.remove(cl)
			}
		})
		props.elementRef.classList.add(res)
	}
	function handlePtUpdate(event){
		const name = 'pt'
		const value = event.target.value
		const res = `${name}-${value}`
		console.log(props.elementRef.classList)
		props.elementRef.classList.forEach((cl)=>{
			if(cl[0]+cl[1]==name){
				props.elementRef.classList.remove(cl)
			}
		})
		props.elementRef.classList.add(res)
	}
	function handlePrUpdate(event){
		const name = 'pr'
		const value = event.target.value
		const res = `${name}-${value}`
		console.log(props.elementRef.classList)
		props.elementRef.classList.forEach((cl)=>{
			if(cl[0]+cl[1]==name){
				props.elementRef.classList.remove(cl)
			}
		})
		props.elementRef.classList.add(res)
	}
	function handlePbUpdate(event){
		const name = 'pb'
		const value = event.target.value
		const res = `${name}-${value}`
		console.log(props.elementRef.classList)
		props.elementRef.classList.forEach((cl)=>{
			if(cl[0]+cl[1]==name){
				props.elementRef.classList.remove(cl)
			}
		})
		props.elementRef.classList.add(res)
	}
	function handlePlUpdate(event){
		const name = 'pl'
		const value = event.target.value
		const res = `${name}-${value}`
		console.log(props.elementRef.classList)
		props.elementRef.classList.forEach((cl)=>{
			if(cl[0]+cl[1]==name){
				props.elementRef.classList.remove(cl)
			}
		})
		props.elementRef.classList.add(res)
	}
	createEffect(() => {
		console.log(props.elementRef)
	})
  return (
	<form class="h-3/5" onSubmit={handleSubmit}>
        <div class="-mt-4 mx-2 h-10 text-gray-300 flex justify-center items-center">css редактор</div>

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
								{(d) =>
									<option value={d}>
										{d}
									</option>
								}
							</For>
						</select>
					</div>

					<div class="bg-opacity-95 rounded h-6 w-full text-sm text-gray-400 flex justify-between items-center">
						<div class="ml-2">
							text
						</div>

						<input class="bg-gray-900 w-1/2 h-4 ml-8 mr-1" on:change={handleChangeInnerText} type="text" name="inner-text" id="inner-text"></input>
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
					<div>
						<label htmlFor="mt">Margin top</label>
						<input min="0" value="0" type="number" name="mt" id="mt" on:change={handleMtUpdate}/>
					</div>
					<div>
						<label htmlFor="mr">Margin right</label>
						<input min="0" value="0" type="number" name="mr" id="mr" on:change={handleMrUpdate}/>
					</div>
					<div>
						<label htmlFor="mb">Margin bottom</label>
						<input min="0" value="0" type="number" name="mb" id="mb" on:change={handleMbUpdate}/>
					</div>
					<div>
						<label htmlFor="ml">Margin left</label>
						<input min="0" value="0" type="number" name="ml" id="ml" on:change={handleMlUpdate}/>
					</div>

					<div>
						<label htmlFor="pt">padding top</label>
						<input min="0" value="0" type="number" name="pt" id="pt" on:change={handlePtUpdate}/>
					</div>
					<div>
						<label htmlFor="pr">padding right</label>
						<input min="0" value="0" type="number" name="pr" id="pr" on:change={handlePrUpdate}/>
					</div>
					<div>
						<label htmlFor="pb">padding bottom</label>
						<input min="0" value="0" type="number" name="pb" id="pb" on:change={handlePbUpdate}/>
					</div>
					<div>
						<label htmlFor="pl">padding left</label>
						<input min="0" value="0" type="number" name="pl" id="pl" on:change={handlePlUpdate}/>
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