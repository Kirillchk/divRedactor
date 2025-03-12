import { createSignal, createEffect } from 'solid-js';

function Properties(props){
	const tailwindValues = [
		"0", "px", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", 
		"5", "6", "7", "8", "9", "10", "11", "12", "14", "16", 
		"20", "24", "28", "32", "36", "40", "44", "48", "52", 
		"56", "60", "64", "72", "80", "96"
	];
	const margins = ['mt','mr','ml','mb']
	const paddings = ['pt', 'pr', 'pl', 'pb']
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
	<form class="h-2/5" onSubmit={handleSubmit}>
        <div class="-mt-4 mx-2 h-10 text-gray-300 flex justify-center items-center">css редактор</div>

		<div class="bg-gray-500 border border-gray-700 h-1 w-full"></div>

		<div class="mx-2 mt-1 h-5/6 flex justify-center">
			<div class="bg-gray-900 rounded bg-opacity-60 h-full w-48 text-gray-400 flex overflow-auto">
				<nav>
					<div class="mt-1 bg-opacity-95 rounded h-6 w-full text-sm text-gray-400 flex justify-between items-center">
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
					<For each={margins}>
						{
							(m) => 
							<div class='flex justify-between items-center'>
								<div class="ml-2">
									{m}
								</div>
								<select class="bg-gray-900 w-1/2 h-4 ml-8 mr-1 text-xs" id={m} value='0' onChange={handleMtUpdate}>
									<For each={tailwindValues}>
										{(d) =>
											<option value={d}>
												{d}
											</option>
										}
									</For>
								</select>
							</div>
						}
					</For>
					<For each={paddings}>
						{
							(p) => 
							<div class='flex justify-between items-center'>
								<div class="ml-2">
									{p}
								</div>
								<select class="bg-gray-900 w-1/2 h-4 ml-8 mr-1 text-xs" id={p} value='0' onChange={handleMtUpdate}>
									<For each={tailwindValues}>
										{(d) =>
											<option value={d}>
												{d}
											</option>
										}
									</For>
								</select>
							</div>
						}
					</For>

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