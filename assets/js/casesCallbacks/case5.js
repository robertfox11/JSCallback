// Creamos la funcion saludar
function saludar(nombre) {
    alert('Hola ' + nombre);
}
// Creamos una funcion para realizar el callback con prompt
function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
}
//procesamos la funcion

procesarEntradaUsuario(saludar);