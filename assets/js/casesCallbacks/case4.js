var show_btn = document.getElementById('show_btn'); //cogemos el boton
var box_show = document.querySelector('#box_show'); //cogemos la caja 
// show_btn.style.display = "none";
//funcion callback to styles
show_btn.addEventListener('click', function() {
    //se oculta la caja
    box_show.style.display = "none";
})