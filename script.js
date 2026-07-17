// const botonSi = document.getElementById('btnSi');
// const botonNo = document.getElementById('btnNo');
// const bloqueMensaje = document.getElementById('mensajeSorpresa');
// const seccionPregunta = document.querySelector('.seccion-pregunta');

// botonSi.addEventListener('click', () => {
//     bloqueMensaje.style.display = 'block';
//     seccionPregunta.style.display = 'none';

//     var duration = 3 * 1000;
//     var end = Date.now() + duration;

//     (function frame() {
//       confetti({
//         particleCount: 3,
//         angle: 60,
//         spread: 55,
//         origin: { x: 0 }
//       });
//       confetti({
//         particleCount: 3,
//         angle: 120,
//         spread: 55,
//         origin: { x: 1 }
//       });

//       if (Date.now() < end) {
//         requestAnimationFrame(frame);
//       }
//     }());

// });

// botonNo.addEventListener('mouseover', () => {
//     const anchoPantalla = window.innerWidth - botonNo.offsetWidth;
//     const altoPantalla = window.innerHeight - botonNo.offsetHeight;

//     const posicionX = Math.random() * anchoPantalla;
//     const posicionY = Math.random() * altoPantalla;

//     botonNo.style.position = 'absolute';
//     botonNo.style.left = `${posicionX}px`;
//     botonNo.style.top = `${posicionY}px`;

// })

// Detectives de la Intro
const pantallaIntro = document.getElementById('pantallaIntro');
const velaAnimada = document.getElementById('velaAnimada');
const contenidoPrincipal = document.getElementById('contenidoPrincipal');

// Detectives del Regalo (Tus variables originales)
const botonSi = document.getElementById('btnSi');
const bloqueMensaje = document.getElementById('mensajeSorpresa');
const seccionPregunta = document.querySelector('.seccion-pregunta');

// 💋 Tus emojis elegidos
const emojisBesos = ["💋", "🥳", "💖","🥰","💝","🌸","✨"];

// 🕯️ 1. APAGAR LA VELA
velaAnimada.addEventListener('click', () => {
    const flama = document.querySelector('.flama');
    if (flama) flama.style.display = 'none'; // Se apaga el fuego

    setTimeout(() => {
        pantallaIntro.classList.add('intro-desvanecida'); // Sube la cortina oscura
        contenidoPrincipal.classList.add('contenido-visible'); // Revela los títulos
    }, 300);
});

// 💋 2. FÁBRICA DE BESOS (Tu función original)
function crearBesoFlotante() {
    const contenedor = document.getElementById('contenedorBesos');
    if (!contenedor) return;

    const beso = document.createElement('div');
    beso.classList.add('beso-flotante');
    
    beso.innerText = emojisBesos[Math.floor(Math.random() * emojisBesos.length)];

    const x = Math.random() * (window.innerWidth - 40);
    const y = Math.random() * (window.innerHeight - 40);
    
    beso.style.left = `${x}px`;
    beso.style.top = `${y}px`;

    contenedor.appendChild(beso);

    setTimeout(() => { beso.remove(); }, 3000);
}

// 🎉 3. EVENTO DEL CLIC PRINCIPAL
botonSi.addEventListener('click', () => {
    bloqueMensaje.style.display = 'block';     // Muestra la hermosa carta
    seccionPregunta.style.display = 'none';    // Oculta el botón
    
    confetti(); // ¡Púm! Confeti original
    
    // Inicia tu lluvia de amor sin textos que la tapen
    setInterval(crearBesoFlotante, 500);    
});


