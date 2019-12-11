function a(name, callback) {
    // Simulamos un tiempo de espera en la ejecución de la función a
    setTimeout(function() {
        console.log("Se ha ejecutado la función a " + name + " Luego se ejecutara la funcion b");
        //Creamos un parametro lo llamamos como funcion
        callback();
    }, 1000);
}

function b() {

    console.log("Se ha ejecutado la función b una vez que se ha ejecutado a");

}
//para que se ejecute primero la funcion a tiene  que encerrar a la funcion b para ser callback
a('robert', b);