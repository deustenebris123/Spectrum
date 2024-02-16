// Selecciona el elemento del header
var header = document.getElementById("main-header");

// Agrega un evento de desplazamiento
window.addEventListener("scroll", function() {
    // Verifica si el desplazamiento es mayor a cero
    if (window.pageYOffset > 0) {
        // Si es mayor a cero, agrega la clase "abajo" al header
        header.classList.add("abajo");
    } else {
        // Si es cero, remueve la clase "abajo" del header
        header.classList.remove("abajo");
    }
});
