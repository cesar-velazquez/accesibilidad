let menu = document.querySelector('.menuacces');

function handleMenu() {
    // btnmenu.style.color = "red";
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
}

let btnLectura = document.querySelector('.btnLectura');
const btnlecturaFacil = document.querySelector('.btnlectfacil');

function handleLectura() {
    // btnlecturaFacil.classList.add('animate__animated', 'animate__rubberBand', '--animate-duration', '25s');
    btnlecturaFacil.classList.add('active')
}

// inicio prueba
// document.addEventListener('click', function(event) {
//     var menu = document.querySelector('.menuacces');
//     var menuButton = document.querySelector('.btnAccessUniversal');

//     // Verificar si el clic no ocurrió dentro del menú o en el botón del menú
//     if (!menu.contains(event.target) && event.target !== menuButton) {
//         menu.classList.remove('active'); // Cerrar el menú
//     }
// });

// function handleMenu() {
//     var menu = document.querySelector('.menuacces');
//     menu.classList.toggle('active'); // Mostrar u ocultar el menú al hacer clic en el botón
// }

// fin prueba




// navigator.mediaDevices.getUserMedia({ audio: true })
//     .then(function (stream) {
//         console.log('Permiso concedido para acceder al micrófono');
//         // Aquí puedes iniciar el reconocimiento de voz
//     })
//     .catch(function (err) {
//         console.error('Error al solicitar permiso para acceder al micrófono:', err);
//     });

// let btnLectura = document.querySelector('.btnLectura');
// const btnlecturaFacil = document.querySelector('.btnlectfacil');

// function handleLectura() {
//     // btnlecturaFacil.classList.add('animate__animated', 'animate__rubberBand', '--animate-duration', '25s');
//     btnlecturaFacil.classList.add('active')
// }

