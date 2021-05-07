
function add_item() {

let item = document.getElementById("box");
let list_item = document.getElementById("list_item");
if(item.value != ""){

	let make_li = document.createElement("LI");
	make_li.appendChild(document.createTextNode(item.value));

	list_item.appendChild(make_li);

	// Reset the value of box
	item.value=""
}
else{
	alert("Please  add a value to item");
}

}
