document.getElementById("BVer").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "block";
})

document.getElementById("BotonCerrar").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "none";
    document.querySelector(".Contenedor-Binicio").style.display = "none";
    document.querySelector(".Con-2").style.display = "block";
})
const imagenContainer = document.getElementById('imagenContainer');

// Seleccionar el botón
const boton = document.getElementById('BVer');

// Añadir evento de clic al botón
boton.addEventListener('click', function() {
    // Ocultar la imagen cuando el botón sea clickeado
    imagenContainer.style.display = 'none';
});