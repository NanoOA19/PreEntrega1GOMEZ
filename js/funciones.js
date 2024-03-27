const paletas =[
    {id:1, nombre:"foam fire", precio: 10000, imagen:"../img/paleta2.jpg",descripcion: "La mas destacada del mercado, usada por el campeon Sanyo en la final del WPT.", imgcategoria: "../img/adidasbanner.jpeg", categoria:"ADIDAS"},
    {id:2, nombre:"foam carbono", precio: 24000, imagen:"../img/paleta3.jpg",descripcion: "Con un diseño carbonizado y con detalles en amarrilo, esta pala se destaca tanto por su potencia como por su precisión content." , imgcategoria: "../img/adidasbanner.jpeg", categoria:"ADIDAS"},
    {id:3, nombre:"foam neon", precio: 39999, imagen:"../img/paleta4.jpg",descripcion: "La favorita de la gente, destacada por ser la pala con mas campeonatos en la espalda, por su excelente desempeño y alto control de disparo" , imgcategoria: "../img/adidasbanner.jpeg", categoria:"ADIDAS"},
    {id:4, nombre:"carbon solid", precio: 50000, imagen:"../img/bpaleta1.jpg",descripcion: "Con un golpeo unico se destaca entre las paletas mas solidas del mercado" , imgcategoria: "../img/bannerbabolat.jpg", categoria:"BABOLAT"},
    {id:5, nombre:"carbon flex", precio: 76000, imagen:"../img/bpaleta2.jpg",descripcion: "Con una potencia increible, esta paleta ademas de ser potente es liviana, ideal para los mas agiles" , imgcategoria: "../img/bannerbabolat.jpg", categoria:"BABOLAT"},
    {id:6, nombre:"carbon mixta", precio: 100000, imagen:"../img/bpaleta3.jpg",descripcion: "La paleta destacada por su excelente equilibrio entre potencia y control, es ideal para los que recien estan comenzando", imgcategoria: "../img/bannerbabolat.jpg", categoria:"BABOLAT"}
]

const guardarPaletasLS = (paletas) => {
    localStorage.setItem("paletas", JSON.stringify(paletas));
  }
const obtenerDatosPaletasLS = () => {
    return JSON.parse(localStorage.getItem("paletas")) || [];
  }
 
  //Guardar id del Tipo elegido
const idPaletasLS = () => {
    return JSON.parse(localStorage.getItem("paleta")) || 0;
  }
const verPaletaElegida = (id) => {
    localStorage.setItem("paleta", JSON.stringify(id));
  }
  //Guardo el dato completo 
const obtenerPaletaLS = () => {
    const paletas = obtenerDatosPaletasLS();
    const id = idPaletasLS();
    const paleta = paletas.find(item => item.id === id);
    return paleta;
  }
  guardarPaletasLS(paletas);
  const guardarCarrito = (paleta) => {
    localStorage.setItem("carrito", JSON.stringify(paleta));
  }
  const obtenerCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }
  //__________Interaccion con el carrito____________
  const agregarCarrito = () => {
    const paleta = obtenerPaletaLS();
    const carrito = obtenerCarrito();
    carrito.push(paleta);
    guardarCarrito(carrito);
    mostrarTotalBTNCarrito();
    notificacion("Paleta Elegida!"); 
  }
  
  const eliminarPaletaCarrito = (id) => {
    const carrito = obtenerCarrito();
    const carritoActualizado = carrito.filter(item => item.id != id);
    guardarCarrito(carritoActualizado);
    renderCarrito(); 
    mostrarTotalBTNCarrito();
    notificacion("Paleta eliminada!")
  }


  const cantTotalAgregados = () => {
    const carrito =obtenerCarrito();
    return carrito.length;
} 
//Suma de precios
const sumaTotal = () => {
    const carrito =obtenerCarrito();
      return carrito.reduce((acumulador, item) => acumulador += item.precio, 0);
    
}

//Eliminar carrito
const eliminarCarrito = () => {
    localStorage.removeItem("carrito");
    renderCarrito();
    mostrarTotalBTNCarrito();
}
//Mostrar en el boton la cantidad de productos
const mostrarTotalBTNCarrito = () => {
    document.getElementById("totalCarrito").innerHTML = cantTotalAgregados();
}

const notificacion = (texto) => {
    Toastify({
        text: texto,
        duration: 3000,
        
        }).showToast();
}

const finalizarCompra = () => {
    Swal.fire({
        title: "Gracias por su compra!",
        text:"El total de su compra es $"+sumaTotal(),
        width: 900,
        padding: "3em",
        color: "#000000",
      }).then((result) => {
        if (result.isConfirmed) {
            eliminarCarrito();
        }
    });
}


