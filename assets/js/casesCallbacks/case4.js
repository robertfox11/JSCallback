var showBtn = document.getElementById('show_btn'); //cogemos el boton
var boxShow = document.querySelector('#box_show'); //cogemos la caja 
// show_btn.style.display = "none";
//funcion callback to styles
showBtn.addEventListener('click', function() {
    //se oculta la caja
    boxShow.style.display = "none";
})