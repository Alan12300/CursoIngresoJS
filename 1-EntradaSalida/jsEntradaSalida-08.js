/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
Alan Corimayo-División X*/
function SacarResto()
{
	let a;
	let b;
	let c;

	a = document.getElementById("txtIdNumeroDividendo").value;
	b = document.getElementById("txtIdNumeroDivisor").value;

	a = parseInt (a);
	b = parseInt (b);

	c = a % b;

	alert("el resto es " + c);
	
}
