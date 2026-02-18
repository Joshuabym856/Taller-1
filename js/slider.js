const slides = document.querySelectorAll('.slide');
const btnNext = document.querySelector('.palante');
const btnPrev = document.querySelector('.patras');
let index = 0;

/* Función para mostrar la slide*/
function mostrarSlide(i) {
    slides.forEach(slide => {
        slide.classList.remove('activa');
    });
    slides[i].classList.add('activa');
}

/*Para darle pa lante */
btnNext.addEventListener('click', function() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    mostrarSlide(index);
});
    

/* Función para darle pa atrás */
btnPrev.addEventListener('click', function() {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    mostrarSlide(index);
});

/* Para que el carrusel cambie automáticamente cada 5 segundos */
setInterval(function() {
    index++;

    if (index >= slides.length) {
        index = 0;
    }  

    mostrarSlide(index);
}, 5000);   