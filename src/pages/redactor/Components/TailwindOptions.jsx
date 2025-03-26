function TailwindOptions(){
	const tailwindValues = [
		"0", "px", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", 
		"5", "6", "7", "8", "9", "10", "11", "12", "14", "16", 
		"20", "24", "28", "32", "36", "40", "44", "48", "52", 
		"56", "60", "64", "72", "80", "96"
	];
	return(
		<select class="rounded-md ml-9 w-6 h-4 bg-gray-700 opacity-75 hover:bg-gray-500 text-xs text-gray-400 hover:text-gray-200" id="mb" value="0" onChange={handleMtUpdate}>
			<For each={tailwindValues}>
				{(d) =>
					<option value={d}>
						{d}
					</option>
				}
			</For>
		</select>
	)
}

export default TailwindOptions