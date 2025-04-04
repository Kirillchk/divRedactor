import { createSignal } from 'solid-js';
import TailwindOptions from './Components/TailwindOptions';

function Properties(props){
	const tailwindValues = [
	"0", "px", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", 
	"5", "6", "7", "8", "9", "10", "11", "12", "14", "16", 
	"20", "24", "28", "32", "36", "40", "44", "48", "52", 
	"56", "60", "64", "72", "80", "96"];

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
  return (
	<form class="h-2/5" onSubmit={handleSubmit}>
        <div class="-mt-4 mx-2 h-10 text-gray-300 flex justify-center items-center">css редактор</div>

		<div class="bg-gray-500 border border-gray-700 h-1 w-full"></div>

		<div class="mx-2 mt-1 h-5/6 flex justify-center">
			<div class="bg-gray-900 rounded h-full w-48 text-gray-400 flex overflow-auto">
				<nav>
					<div class="mt-1 h-6 w-full text-sm text-gray-400 flex justify-between items-center">
						<div class="ml-2">
							display
						</div>

						<select class="rounded-md hover:bg-gray-700 w-1/2 h-4 ml-8 mr-1 text-gray-400 hover:text-gray-200" id="display" value={display()} onChange={handleDisplayChange}>
							<TailwindOptions/>
						</select>
					</div>
					<div class="h-6 w-full text-sm text-gray-400 flex justify-between items-center">
						<div class="ml-2">
							text
						</div>

						<input class="rounded-md hover:bg-gray-700 w-1/2 h-4 ml-8 mr-1" on:change={handleChangeInnerText} type="text" name="inner-text" id="inner-text"></input>
					</div>
					<div class="h-6 w-full text-sm text-gray-400 flex justify-between items-center">
						<div class="ml-2">
							position
						</div>
						<select class="rounded-md hover:bg-gray-700 w-1/2 h-5 ml-6 mr-1 text-gray-400 hover:text-gray-200" id="display" value={position()} onChange={handlePositionChange}>
							<TailwindOptions/>
						</select>
					</div>
                    <div class="flex justify-evenly items-center">
                        <select onChange={handleMlUpdate} class="rounded-md w-6 h-4 bg-gray-700 opacity-75 hover:bg-gray-500 text-xs text-gray-400 hover:text-gray-200" id="ml" value="0">
							<TailwindOptions/>
						</select>

                        <div>
                            <select onChange={handleMtUpdate} class="rounded-md ml-9 w-6 h-4 bg-gray-700 opacity-75 hover:bg-gray-500 text-xs text-gray-400 hover:text-gray-200 " id="mt" value="0">
								<TailwindOptions/>
							</select>

                            <div class="my-1 w-24 h-16 bg-gray-700 opacity-75 border border-gray-500 text-base text-gray-300 text-center">отступы</div>

                            <select onChange={handleMbUpdate} class="rounded-md ml-9 w-6 h-4 bg-gray-700 opacity-75 hover:bg-gray-500 text-xs text-gray-400 hover:text-gray-200" id="mb" value="0">
								<TailwindOptions/>
							</select>
                        </div>

                        <select onChange={handleMrUpdate} class="rounded-md w-6 h-4 bg-gray-700 opacity-75 hover:bg-gray-500 text-xs text-gray-400 hover:text-gray-200" id="mr" value="0">
							<TailwindOptions/>
						</select>
                    </div>
                    <div class="flex justify-evenly items-center">
                        <select onChange={handlePlUpdate} class="rounded-md w-6 h-4 bg-gray-700 opacity-75 hover:bg-gray-500 text-xs text-gray-400 hover:text-gray-200" id="pl" value="0">
							<TailwindOptions/>
						</select>

                        <div>
                            <select onChange={handlePtUpdate} class="rounded-md ml-9 w-6 h-4 bg-gray-700 opacity-75 hover:bg-gray-500 text-xs text-gray-400 hover:text-gray-200" id="pt" value="0">
								<TailwindOptions/>
							</select>

                            <div onChange={handlePlUpdate} class="my-1 w-24 h-16 bg-gray-700 opacity-75 border border-gray-500 text-base text-gray-300 text-center">вторая хрень</div>

                            <select onChange={handlePbUpdate} class="rounded-md ml-9 w-6 h-4 bg-gray-700 opacity-75 hover:bg-gray-500 text-xs text-gray-400 hover:text-gray-200" id="pb" value="0">
								<TailwindOptions/>
							</select>
                        </div>

                        <select onChange={handlePrUpdate} class="rounded-md w-6 h-4 bg-gray-700 opacity-75 hover:bg-gray-500 text-xs text-gray-400 hover:text-gray-200" id="pr" value="0">
							<TailwindOptions/>
						</select>
                    </div>

					<div class="h-6 w-full text-sm text-gray-400 flex justify-between items-center">
						<div class="ml-2">
							color
						</div>

						<input class="w-1/2 h-4 ml-7 mr-1" type="color" id="color" value={color()} onInput={(e) => setColor(e.target.value)}></input>
					</div>

					<div class="h-6 w-full text-sm text-gray-400 flex justify-between items-center">
						<div class="ml-2">
							debug
						</div>

						<button class="rounded-md bg-gray-700 opacity-75 hover:bg-gray-500 w-1/2 h-4 ml-7 mr-1 text-gray-300 hover:text-gray-100 text-center" type="submit">click</button>
					</div>
				</nav>
			</div>
		</div>
	</form>
  );
}
export default Properties