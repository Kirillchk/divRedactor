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
    <form onSubmit={handleSubmit}>
      <div>
        <label for="display">Display:</label>
        <select
          id="display"
          value={display()}
          onChange={handleDisplayChange}
        >
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
			<div>
        <label for="inner-text">Inner text:</label>
				<input on:change={handleChangeInnerText} type="text" name="inner-text" id="inner-text" />
			</div>
      <button type="submit">Debug</button>
    </form>
  );
}
export default Properties