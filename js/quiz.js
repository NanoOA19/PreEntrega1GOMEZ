alert("HOLA PADELISTA")
    let nombreUsuario= prompt("ingrese su nombre");
    let gustaUsuario= prompt("¿Te gusta el padel?");
    let totalRestpuestas=0
    gustaUsuario= gustaUsuario.toUpperCase()
    
    
        if(gustaUsuario == "SI")  {
            
            let empiezaEljuego= confirm("Quieres jugar un juego? "+nombreUsuario);
            while (empiezaEljuego == true){
                let nPregunta=prompt("Elija un numero entre el 1 y el 3 inclusive");
                switch(nPregunta){
                case "1":
                    let respuesta1= prompt("¿Quien fue el ultimo campeon del WPT?");
                        respuesta1=respuesta1.toLocaleUpperCase()
                        if(respuesta1 == "ROBERT MIZRACHI"){
                            totalRestpuestas += 1
                            alert("Bien pa, +1 punto. Vas: " + totalRestpuestas)
                        }
                        else{
                            totalRestpuestas -=1
                            alert(" La pifiaste brother, es ROBERT MIZRACHI \n -1 punto Vas: " + totalRestpuestas)
                        }
                    break;
                case "2":
                    let respuesta2= prompt("¿Cuando es el proximo WPT?")
                        respuesta2=respuesta2.toLocaleUpperCase
                        if(respuesta2 == "23 DE MAYO"){
                            totalRestpuestas +=1
                            alert("Bien pa, +1 punto. Vas:" + totalRestpuestas)
                        }
                        else{
                            totalRestpuestas -=1
                            alert(" La pifiaste brother, es el 23 DE MAYO \n -1 punto:" + totalRestpuestas)
                        }
                    break;
                case "3":
                    let respuesta3= prompt("¿Quienes quedaron segundos en el ultimo WPT?")
                    respuesta3=respuesta3.toLocaleUpperCase()
                        if(respuesta3 == "LEBRON Y GALAN"){
                            totalRestpuestas +=1
                           alert("Bien pa, +1 punto. Vas:" + totalRestpuestas)
                        }
                        else{
                            totalRestpuestas -=1
                            alert("La pifiaste brother, son LEBRON Y GALAN \n -1 punto:" + totalRestpuestas)
                        }
                    break;
                default:
                     alert("Dije numero, no letra >:(")
                     alert("Puntos totales:"+ totalRestpuestas)
                     empiezaEljuego= confirm("Quieres seguir jugando?")
                    break;
                }
            }
            if(empiezaEljuego == false){
                alert("Pense que eras chevere")
            }
    
            
        }
        else{
            alert("Muuy mal no eres digno de participar")
        }