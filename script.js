// Datos de las imágenes de alta calidad subidas por el usuario
const tattooData = [
    { id: 1, category: 'realismo', title: 'Brújula Acuarela', style: 'Realismo Básico', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/ZHorNHudsVJITCam.jpg' },
    { id: 2, category: 'tradicional', title: 'Rosas y Cruz', style: 'Tradicional Americano', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/bPZJXeqcmpqHutkv.jpg' },
    { id: 3, category: 'tradicional', title: 'Rosa y Rosario', style: 'Tradicional con Fineline', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/jcMJjcGDeHhFUmHg.jpg' },
    { id: 4, category: 'minimalista', title: 'Best Buds', style: 'Minimalista Fineline', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/RHUSzYHkqjFfNTUI.jpg' },
    { id: 5, category: 'retrato', title: 'Retrato de Pareja', style: 'Realismo en Negro y Gris', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/HQYPJvmAcDoYKjMA.jpg' },
    { id: 6, category: 'minimalista', title: 'Diente de León', style: 'Acuarela y Fineline', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/HPRBsDOzrhplPLEy.jpg' },
    { id: 7, category: 'realismo', title: 'Chica Payaso y Rosa', style: 'Realismo a Color', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/fWoeFQWLSdWgjklU.jpg' },
    { id: 8, category: 'minimalista', title: 'Robots de Pareja', style: 'Minimalista Blackwork', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/udVIpzlkmZqjFDsA.jpg' },
    { id: 9, category: 'tradicional', title: 'Máscaras de Teatro', style: 'Blackwork Neo-tradicional', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/oKvQVTiSXjcarisN.jpg' },
    { id: 10, category: 'realismo', title: 'Manga Completo', style: 'Realismo Negro y Gris', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/DokJlJhjgAZWPKnZ.jpg' },
];

let currentSlide = 0;
const carruselContenedor = document.querySelector('.carrusel-contenedor');

function renderCarrusel() {
    carruselContenedor.innerHTML = ''; // Limpiar carrusel
    tattooData.forEach((tattoo, index) => {
        const slide = document.createElement('div');
        slide.classList.add('carrusel-slide');
        if (index === currentSlide) {
            slide.classList.add('active');
        }

        slide.innerHTML = `
            <img src="${tattoo.image}" alt="${tattoo.title}" class="slide-imagen">
            <div class="slide-info">
                <h3>${tattoo.title}</h3>
                <p>Estilo: ${tattoo.style}</p>
                <p>
                    <span class="emoji-chicano">💀</span> 
                    Diseño de alto impacto. Ideal para clientes que buscan una pieza con gran detalle y significado.
                    <span class="emoji-chicano">🌹</span>
                </p>
                <a href="https://wa.me/529842562365?text=Hola%20Baxto%2C%20me%20interesa%20cotizar%20el%20tatuaje%20de%20'${tattoo.title}'%20(${tattoo.style})." target="_blank" class="btn-cita">
                    COTIZAR ESTE ESTILO 📲
                </a>
            </div>
        `;
        carruselContenedor.appendChild(slide);
    });
}

function showSlide(index) {
    const slides = document.querySelectorAll('.carrusel-slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % tattooData.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + tattooData.length) % tattooData.length;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    renderCarrusel();

    document.querySelector('.prev-btn').addEventListener('click', prevSlide);
    document.querySelector('.next-btn').addEventListener('click', nextSlide);

    // Auto-avance del carrusel cada 5 segundos
    setInterval(nextSlide, 5000);
});
