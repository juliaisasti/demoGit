function cruzarCalle2(color){
    // Semáforo

    if (color == "green") {
        console.log("Pasar");

    } else if(color == "yellow"){
        console.log("Pasar rápido");
    }
    else if(color == "blue"){
        console.log("Pasar saltando");
    }
    else { // Valor por defecto ---> ROJO
        console.log("No pasar");
    }
}

/* Llamada a las funciones/ejecución de funciones*/ 
cruzarCalle()
console.log("Ejecuta cruzarCalle2:");
cruzarCalle2("yellow")