/*alert("HOLA PADELISTA")
let nombreUsuario = prompt("ingrese su nombre");
let gustaUsuario = prompt("¿Te gusta el padel?");
let totalRestpuestas = 0
gustaUsuario = gustaUsuario.toUpperCase()


if (gustaUsuario == "SI") {

    let empiezaEljuego = confirm("Quieres jugar un juego? " + nombreUsuario);
    while (empiezaEljuego == true) {
        let nPregunta = prompt("Elija un numero entre el 1 y el 3 inclusive");
        switch (nPregunta) {
            case "1":
                let respuesta1 = prompt("¿Quien fue el ultimo campeon del WPT?");
                respuesta1 = respuesta1.toLocaleUpperCase()
                if (respuesta1 == "ROBERT MIZRACHI") {
                    totalRestpuestas += 1
                    alert("Bien pa, +1 punto. Vas: " + totalRestpuestas)
                }
                else {
                    totalRestpuestas -= 1
                    alert(" La pifiaste brother, es ROBERT MIZRACHI \n -1 punto Vas: " + totalRestpuestas)
                }
                break;
            case "2":
                let respuesta2 = prompt("¿Cuando es el proximo WPT?")
                respuesta2 = respuesta2.toLocaleUpperCase
                if (respuesta2 == "23 DE MAYO") {
                    totalRestpuestas += 1
                    alert("Bien pa, +1 punto. Vas:" + totalRestpuestas)
                }
                else {
                    totalRestpuestas -= 1
                    alert(" La pifiaste brother, es el 23 DE MAYO \n -1 punto:" + totalRestpuestas)
                }
                break;
            case "3":
                let respuesta3 = prompt("¿Quienes quedaron segundos en el ultimo WPT?")
                respuesta3 = respuesta3.toLocaleUpperCase()
                if (respuesta3 == "LEBRON Y GALAN") {
                    totalRestpuestas += 1
                    alert("Bien pa, +1 punto. Vas:" + totalRestpuestas)
                }
                else {
                    totalRestpuestas -= 1
                    alert("La pifiaste brother, son LEBRON Y GALAN \n -1 punto:" + totalRestpuestas)
                }
                break;
            default:
                alert("Dije numero, no letra >:(")
                alert("Puntos totales:" + totalRestpuestas)
                empiezaEljuego = confirm("Quieres seguir jugando?")
                break;
        }
    }
    if (empiezaEljuego == false) {
        alert("Pense que eras chevere")
    }

}
else {
    alert("Muuy mal no eres digno de participar")
}
//definir un array de productos
const productos = [
    { id: 1, nombre: "FOAM DIRE", precio: 45500 },
    { id: 2, nombre: "FOAM CARBONO", precio: 32500 },
    { id: 3, nombre: "FOAM NEON", precio: 16500 },
    { id: 4, nombre: "CARBON SOLID", precio: 55000 },
    { id: 5, nombre: "CARBON FLEX", precio: 90000 },
    { id: 6, nombre: "CARBON MIXTA", precio: 75000 },
]

//defino clase carrito
class Carrito {
    constructor() {
        this.productos = [];
        this.descuento = 10;
        this.maxProductosParaDescuento = 3;
        this.total = 0;
    }

    agregarProducto(id) {
        let producto = productos.find(prod => prod.id === id);

        if (producto) {
            this.productos.push(producto);
            console.log("Agregaste el Producto: " + producto.nombre + " al Carrito!")
        } else {
            console.log("no se encontro el producto con nombre" + producto.nombre)
        }
    }
    listarCarrito() {
        let salida = "";

        this.productos.forEach(item => {
            salida += item.id + " - " + item.nombre + " : $" + item.precio + "\n";
        })
        return salida
    }


    calcularTotalProductos() {
        return this.productos.length;
    }
    aplicarDescuento() {
        if (this.calcularTotalProductos() >= this.maxProductosParaDescuento) {
            return Math.round((this.calculartotalpagar() * this.descuento) / 100)
        } else {
            return 0;
        }
    }
    calculartotalpagar() {
        let total = 0

        this.productos.forEach(item => {
            total += item.precio;
        });
        return total;
    }
}
function listarProductos() {
    let salida = "";

    productos.forEach(item => {
        salida += item.id + " - " + item.nombre + " : $" + item.precio + "\n";
    })
    return salida
}

const carrito = new Carrito();
let opcionSeleccionada = 10;

while (opcionSeleccionada != 0) {
    opcionSeleccionada = parseInt(prompt("Seleccione el producto a agregar al carrito: 0 para Salir\n\n" + listarProductos()))

    if (opcionSeleccionada == 0) {
        break;
    }

    carrito.agregarProducto(opcionSeleccionada);
}

let productosCarrito = "Detalle: \n\n" + carrito.listarCarrito();
let salidaSubTotal = "Subtotal: $" + carrito.calculartotalpagar();
let salidaDescuento = "Descuento: $" + carrito.aplicarDescuento();
let montofinal = "Total: $" + Math.round(carrito.calculartotalpagar() - carrito.aplicarDescuento());
alert(productosCarrito + "\n\n" + salidaSubTotal + "\n" + salidaDescuento + "\n" + montofinal);*/