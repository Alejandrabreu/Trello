var contenedor =  document.createElement("div");
	contenedor.setAttribute("id", "container");

var save = document.createTextNode("Guardar");

var label = document.createElement("label");
	label.setAttribute("id", "textoNuvo")

var textoNuvo = document.createTextNode("Añadir una lista...");
	label.appendChild(textoNuvo);
	contenedor.appendChild(label);


document.body.appendChild(contenedor);

var ingreso = document.createElement("div");
	ingreso.setAttribute("id", "in");
var input = document.createElement("input");
	input.setAttribute("id", "dentro");
	input.setAttribute("placeholder", "Añadir una lista...");

var btn = document.createElement("button");
var boton = document.createTextNode("Guardar");
	btn.setAttribute("id", "saved");
var icon = document.createElement("i");
	icon.classList.add("fa", "fa-times");
	
function add (){
	ingreso.appendChild(input);
	ingreso.appendChild(btn);
	ingreso.appendChild(icon);
	btn.appendChild(boton);
	container.appendChild(ingreso);
	label.style.display="none";

var called = document.getElementById("saved");
	called.addEventListener("click", guardar);
}

var call = document.getElementById("textoNuvo");
call.addEventListener("click", add);
//___________________________________

function guardar(){

var valorInput = document.getElementById("dentro").value;
	document.getElementById("dentro").value="";
var divo = document.createElement("div");
var labelInput = document.createElement("label");
var labelArea = document.createElement("label");
var divChico = document.createElement("div");
var areaTexto = document.createElement("textarea");
var textoNuvo = document.createTextNode("Añadir una lista...");
var btnDos = document.createElement("button");

var tarjetaTitulo = document.createElement("label");
var textoNode = document.createTextNode(valorInput);
	tarjetaTitulo.appendChild(textoNode);

var botonDos = document.createTextNode("añadir");
	btnDos.appendChild(botonDos)
var anadirTarjeta = document.createElement("a");

	divo.appendChild(divChico);
	divChico.appendChild(labelArea);
	divChico.appendChild(btnDos);
	divChico.appendChild(icon);
	container.appendChild(divo);
	contenedor.appendChild(tarjetaTitulo);
	anadirTarjeta.setAttribute("href", "#");		
}





/*
function add () {
	var container = document.getElementById("container");
	var btn = document.createElement("button");
	var input = document.createElement("input");
	var nodoText = document.createTextNode("Guardar");

// atributos
	input.setAttribute("id", "valor");

//nodos
	btn.appendChild(nodoText);
	container.appendChild(btn);
	container.appendChild(input);

	btn.addEventListener("click", function() {
		var list=document.getElementById("valor").value
		document.getElementById("valor").value="";
		var contiene=document.getElementById("contiene");
		var parrafo = document.createElement("p");
		var textNew = document.createTextNode(list);

		var add1= document.createElement("a");
		add1.setAttribute("href", "#")
		var textAdd=document.createTextNode("añadir tarjeta");

		parrafo.appendChild(textNew);
		contiene.appendChild(parrafo);
		add1.appendChild(textAdd);
		contiene.appendChild(add1);

		add1.addEventListener("click", function(){

//espaco para escribir
		contiene.removeChild(add1);
		var textarea= document.createElement("textarea");
		var add2= document.createElement("a");
		add2.setAttribute("href", "#")
		var textAdd=document.createTextNode("añadir tarjeta");
		add2.appendChild(textAdd)
		contiene.appendChild(textarea);
		contiene.appendChild(add2);
		})
	})

	}*/