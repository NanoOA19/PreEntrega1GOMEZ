function renderCarrito() {
    const paletas = obtenerCarrito();
    const sub = sumaTotal();
    let contenido = "";
  
  
    if (cantTotalAgregados() > 0) {
      contenido =  `<table class="tabla">
      <thead>
        <tr>
          <td><button class="btn colorbtn btn-sm" onclick="eliminarCarrito()" title="Eliminar Carrito">Eliminar Carrito <img src="/img/trash-fill.svg" alt="Eliminar"></button></td>
        </tr>
      </thead>
      <tbody>
        `;
        for (const paleta of paletas) {
          contenido += `
        <tr>
          <td><img src="${paleta.imagen}" alt="${paleta.nombre}" width="64" /></td>
          <td><b>${paleta.nombre}</b></td>
          <td><b>$${paleta.precio}</b></td>
          <td><button class="btn colorbtn btn-sm" onclick="eliminarPaletaCarrito(${paleta.id})"><img src="/img/trash-fill.svg" alt="Eliminar"></button></td>
        </tr>`;
      }
      contenido +=`
      <tr>
      <td> </td>
      <td>Total a Pagar:  </td>
      <td><b>$` +sub+`<b></td>
      <td><button class="btn colorbtn btn-sm" onclick="finalizarCompra()" title="Finalizar Compra"><b>Finalizar Compra</b></button></td>
      </tr>
      </tbody>
      </table>`;
        
  } else {
      contenido = `<h4 class="my-5 p-5 text-center">No se encontraron productos agregados a su compra</h4>`;
  }     
    document.getElementById("carritoP").innerHTML = contenido;
  }
 
  renderCarrito();
  mostrarTotalBTNCarrito();