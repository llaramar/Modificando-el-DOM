//seleccionar el parrafo usando  su id
const parrafo = document.getElementById('miParrafo');

//selecciono el boton por su id
const boton = document.getElementById('miBoton');

//Agregar escuchador de eventos al boton
boton.addEventListener('click', function(){
    //Cambiar el texto del parrafo
    parrafo.textContent = 'Texto cambiado!';
});

