const boton = document.getElementById('boton_suscripcion');
const suscri = document.getElementById('suscripcion');
const cerrar = document.getElementById('cerrar');
const form = document.getElementById('formulario');

boton.addEventListener('click', (e) => {
    e.preventDefault();

    suscri.style.display = 'flex';
});

cerrar.addEventListener('click', (e) => {
    e.preventDefault();
    suscri.style.display = 'none';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    alert('¡Gracias por suscribirte! ¡No te pierdas nuestras futuras novedades!');
    suscri.style.display = 'none';
    form.reset();
});