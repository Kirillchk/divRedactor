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
	function handleSubmit(event){
		event.preventDefault()
		console.log(props.elementRef.innerHTML)
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
        <label for="mg">Margin (mg):</label>
        <input
          type="number"
		  		min="0"
          id="mg"
          value={mg()}
          onInput={(e) => setMg(e.target.value)}
        />
      </div>

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
  );
}
export default Properties