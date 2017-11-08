function add () {
	
	var listnew = document.getElementById("newtask").value;
	document.getElementById("newtask").value ="";
	var newtask = document.createElement("div");
	var container = document.getElementById("cont");

	var buttom = document.createElement("input");
	input.appendChild("btn")

	var list = document.createElement("p");
	var nodoText=document.createTextNode(listnew);
	list.appendChild(nodoText);

	cont.appendChild(newtask);


	btn.addEventListener("click", function(){
		newtask.removeChild(btn);
	})

	function mostrar(){
		(btn+lista.newtask.value)
	}

}
