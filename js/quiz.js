// alert("HOLA PADELISTA")
//     let nombreUsuario= prompt("ingrese su nombre");
//     let gustaUsuario= prompt("¿Te gusta el padel?");
//     let totalRestpuestas=0
//     gustaUsuario= gustaUsuario.toUpperCase()
    
    
//         if(gustaUsuario == "SI")  {
            
//             let empiezaEljuego= confirm("Quieres jugar un juego? "+nombreUsuario);
//             while (empiezaEljuego == true){
//                 let nPregunta=prompt("Elija un numero entre el 1 y el 3 inclusive");
//                 switch(nPregunta){
//                 case "1":
//                     let respuesta1= prompt("¿Quien fue el ultimo campeon del WPT?");
//                         respuesta1=respuesta1.toLocaleUpperCase()
//                         if(respuesta1 == "ROBERT MIZRACHI"){
//                             totalRestpuestas += 1
//                             alert("Bien pa, +1 punto. Vas: " + totalRestpuestas)
//                         }
//                         else{
//                             totalRestpuestas -=1
//                             alert(" La pifiaste brother, es ROBERT MIZRACHI \n -1 punto Vas: " + totalRestpuestas)
//                         }
//                     break;
//                 case "2":
//                     let respuesta2= prompt("¿Cuando es el proximo WPT?")
//                         respuesta2=respuesta2.toLocaleUpperCase
//                         if(respuesta2 == "23 DE MAYO"){
//                             totalRestpuestas +=1
//                             alert("Bien pa, +1 punto. Vas:" + totalRestpuestas)
//                         }
//                         else{
//                             totalRestpuestas -=1
//                             alert(" La pifiaste brother, es el 23 DE MAYO \n -1 punto:" + totalRestpuestas)
//                         }
//                     break;
//                 case "3":
//                     let respuesta3= prompt("¿Quienes quedaron segundos en el ultimo WPT?")
//                     respuesta3=respuesta3.toLocaleUpperCase()
//                         if(respuesta3 == "LEBRON Y GALAN"){
//                             totalRestpuestas +=1
//                            alert("Bien pa, +1 punto. Vas:" + totalRestpuestas)
//                         }
//                         else{
//                             totalRestpuestas -=1
//                             alert("La pifiaste brother, son LEBRON Y GALAN \n -1 punto:" + totalRestpuestas)
//                         }
//                     break;
//                 default:
//                      alert("Dije numero, no letra >:(")
//                      alert("Puntos totales:"+ totalRestpuestas)
//                      empiezaEljuego= confirm("Quieres seguir jugando?")
//                     break;
//                 }
//             }
//             if(empiezaEljuego == false){
//                 alert("Pense que eras chevere")
//             }
    
            
//         }
//         else{
//             alert("Muuy mal no eres digno de participar")
//         }
        //definir un arrat de productos
        const productos = [
            {id:1, nombre:"McNifica", calorias:513, precio:4550},
            {id:2, nombre:"McPollo", calorias:353, precio:3250},
            {id:3, nombre:"Papas pequeñas", calorias:500, precio:1650},
            {id:4, nombre:"Papas grandes", calorias:700, precio:1900},
            {id:5, nombre:"Coca cola chica", calorias:156, precio:1300},
            {id:6, nombre:"Coca cola grande", calorias:359, precio:1700},
            {id:7, nombre:"Sundae", calorias:257, precio:1900},
            {id:8, nombre:"McFlurry", calorias:424, precio:2650},
        ]

        //defino clase carrito
        class Carrito{
            constructor(){
                this.productos=[];
                this.descuento = 10;
                this.total = 0;

            }

            agregarProducto(id){
                let producto = productos.find(prod => prod.id === id);
                if(producto){
                    this.productos.push(producto); 
                    console.log("Agregaste el Producto: " + producto.nombre + " al Carrito!")
                }else{
                    console.log("no se encontro el producto con nombre" + producto.nombre)
                }
            }
            listarCarrito(){
                this.productos.forEach(item =>{
                    console.log(item.nombre + " - $" + item.precio);
                })
            }
            calcularTotalProductos(){
                return this.productos.length;
            }
            calcularSumaTotalProductos(){
                //modo facil
        
                this.productos.forEach(item =>{
                    this.total += item.precio;
                });
                return total;
            }
            aplicarDescuento(){
                if(this.calcularTotalProductos()>= this.totalProductosParaDescuento){
                    this.total = this.total - ((this.total * this.descuento)/100)
                }
            }
        }

        const carrito = new Carrito();
        carrito.agregarProducto(2);
        carrito.agregarProducto(2);
        carrito.agregarProducto(3);
        carrito.listarCarrito();