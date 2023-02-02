/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
Alan Corimayo-División X*/
function mostrar()
{
	//Declaro la variable
	let nombreIngresado;
    
	//asigno lo escrito en el teclado a la variable
	nombreIngresado = prompt("Nombre de Usuario");
	
	//lo asignado en la variable lo asigno en la caja de texto del html
	document.getElementById("txtIdNombre").value = nombreIngresado;
	
}

