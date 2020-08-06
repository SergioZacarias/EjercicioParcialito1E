/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor
 a 0 ni mayor a 1000.
*/

function mostrar() {
	let respuesta = "si";
	let articulo;
	let categoria;
	let precio;
	let alfajor = 15;
	let turron = 10;
	let chicle = 5;
	let leche = 60;
	let yogurth = 35;
	let lavandina = 40;
	let jabon = 10;
	let cocacola = 55;
	let vino = 40;
	let cantidadBebidas = 0;
	let categoriaAlmacen = 0;
	let categoriaLacteos = 0;
	let categoriaLimpieza = 0;

	while (respuesta == "si") {

		articulo = prompt("Ingrese nombre del articulo");
		categoria = prompt ("Ingrese categoria.");
		precio = parseFloat(prompt("Ingrese precio."));

		switch (articulo) {
			case "alfajor":
			case "turron":
			case " chicle":
				categoriaAlmacen = articulo;
				break;

			case "leche":
			case "yogurth":
				categoriaLacteos = articulo;
				break;

			case "lavandina":
			case "jabon":
				categoriaLimpieza = articulo;
				break;

			case "cocacola":
			case "vino":
				categoriaBebidas = articulo;
				break;

		}



	}








}