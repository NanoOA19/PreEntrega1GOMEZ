function mostrarPaletas() {
    const paletas = obtenerDatosPaletasLS();
    let contenido = "";

    for (const paleta of paletas) {
        contenido += `<div class="col-md-4 text-center" onclick="verPaletaElegida(${paleta.id}) ">
        <img src="${paleta.imgcategoria}"alt="${paleta.categoria}" width="100%" height="60">
        <img src="${paleta.imagen}"alt="${paleta.nombre}" height="244">
        <div>
            <h5"><strong>${paleta.nombre}</strong></h5>
            <p>${paleta.descripcion}</p>
            <p><b>$${paleta.precio}</b></p>
        </div>
        <div>
            <button class="btn colorbtn" onclick="agregarCarrito()">(+)COMPRAR</button>
        </div>
        </div>`;
    }
    

    document.getElementById("paletas").innerHTML = contenido;
}

mostrarPaletas();
mostrarTotalBTNCarrito();


