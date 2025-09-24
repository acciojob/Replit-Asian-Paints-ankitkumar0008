//your JS code here. If required.
let items = document.querySelectorAll(".grid-item");
let changebutton  = document.getElementById("change_button");

changebutton.addEventListener("click",()=>{
	items.forEach((cell)=>{
		cell.style.backgroundColor = "transparent"
	})
	let cell = document.getElementById("block_id").value;
	let color = document.getElementById("colour_id").value;

	let getcell = document.getElementById(`${cell}`);
	getcell.style.backgroundColor = color;
})

let resetbutton = document.getElementById("Reset");

resetbutton.addEventListener("click",()=>{
	items.forEach((cell)=>{
		cell.style.backgroundColor = "transparent"
	})
})