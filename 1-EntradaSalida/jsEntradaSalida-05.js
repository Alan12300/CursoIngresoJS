/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
Alan Corimayo-División X*/
function mostrar()
{	
	let nombreIngresado;
	
	let edad;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	
	edad = document.getElementById("txtIdEdad").value;

	alert("Usted se llama " + nombreIngresado + " y tiene " + edad + " años");
}

