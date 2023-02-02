/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
Alan Corimayo-División X*/
function sumar()
{
	let numerouno;
	let numerodos;
	let resultado;

	numerouno = document.getElementById("txtIdNumeroUno").value;
	numerodos = document.getElementById("txtIdNumeroDos").value;

	numerouno = parseInt (numerouno);
	numerodos = parseInt (numerodos);
	
	resultado = numerouno + numerodos;

	alert("la suma es " + resultado);

}

