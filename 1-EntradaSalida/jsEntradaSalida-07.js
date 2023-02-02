/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"
Alan Corimayo-División X*/ 
function sumar()
{	
	let a;
	let b;
	let c;

	a = document.getElementById("txtIdNumeroUno").value;
	b = document.getElementById("txtIdNumeroDos").value;

	a = parseInt(a);
	b = parseInt(b);

	c = a + b;

	alert("la suma es " + c);	
}

function restar()
{
	let a;
	let b;
	let c;

	a = document.getElementById("txtIdNumeroUno").value;
	b = document.getElementById("txtIdNumeroDos").value;

	a = parseInt(a);
	b = parseInt(b);

	c = a - b;

	alert("la resta " + c);

}

function multiplicar()
{ 
	let a;
	let b;
	let c;

	a = document.getElementById("txtIdNumeroUno").value;
	b = document.getElementById("txtIdNumeroDos").value;

	a = parseInt(a);
	b = parseInt(b);

	c = a * b;

	alert("la multiplicación es " + c);

}

function dividir()
{
	let a;
	let b;
	let c;

	a = document.getElementById("txtIdNumeroUno").value;
	b = document.getElementById("txtIdNumeroDos").value;

	a = parseInt(a);
	b = parseInt(b);

	c = a / b;

	alert("la división es " + c);

}

