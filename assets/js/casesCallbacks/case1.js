'use stricts'
// Nuestra función Sumar(a, b, callback), recibe 3 parámetros, los 2 primeros son los valores de la caja de texto y el segundo es el callback, este será el encargado de retornar el resultado de la sumatoria.
function Sumar(a, b, callback) {
    return callback(a + b);
}
//seleccionamos el id para realizar un evento con un click 
document.querySelector("#operar").addEventListener('click', function() {
    var a = parseInt(document.querySelector("#a").value),
        b = parseInt(document.querySelector("#b").value);
    //llamamos a la funcion sumar para que realize y recogiendo dos valores y dando una respuesta por el alert
    Sumar(a, b, function(r) {
        alert('El resultado es ' + r);
    })
});