document.addEventListener("DOMContentLoaded", function () {

    if (!annyang) {
        return alert("Tu navegador no soporta el reconcimiento de voz");
    }

    var getPageNext = function () {
        location.href = './index.html';
        // window.open("https://github.com/TalAter/annyang", '_blank');
    }

    var getPageNext1 = function () {
        location.href = './info-gral.html';
    }

    var getPageNext2 = function () {
        location.href = './modulo-1.html';
    }

    var abrirMenuPrincipal = function () {
        // Obtener el elemento al que deseas agregar la clase
        var elemento = document.getElementById("menu-item"); // Ejemplo: Obtener el elemento con ID "menu-item"
        // Agregar la clase "active" al elemento
        elemento.classList.add("active");

        var elemento = document.querySelector(".overlay"); // Ejemplo: Obtener el elemento con ID "menu-item"
        elemento.classList.add("active");
    }

    let abrirModal1 = function () {
        let modal = document.getElementById("experto-1");
        let backdrop = document.getElementsByClassName("modal-backdrop")[0];
        modal.style.display = "block";
        backdrop.style.display = "block";
        document.body.classList.add("modal-open");
    }

    let cerrarmodal1 = function () {
        let modal = document.getElementById("experto-1");
        let backdrop = document.getElementsByClassName("modal-backdrop")[0];
        modal.style.display = "none";
        backdrop.style.display = "none";
        document.body.classList.add("close-modal");
    }

    let abrirfaqBasic = function () {
        let abrirfaq = document.getElementById("basic1");
        abrirfaq.classList.remove('collapsed');
        abrirfaq.setAttribute('aria-expanded', 'true');
        abrirfaq.nextElementSibling.classList.add('show');
    }
    
    let cerrarfaqBasic = function () {
        let cerrarfaq = document.getElementById("basic1");
        cerrarfaq.classList.add('collapsed');
        cerrarfaq.setAttribute('aria-expanded', 'false');
        cerrarfaq.nextElementSibling.classList.remove('show')
    }

    let descargarlecturafacil = function () {
        location.href = '#btnLectura';
        let descargar = document.getElementById("btnLectura");
        descargar.click();
    }
    // function iniciarComandosVoz() {
    //     let iniciarReconocimiento = document.getElementById("btn-access");
    //     iniciarReconocimiento.click();
    // }
    // let iniciarComandosVoz = function () {
    //     let iniciarReconocimiento = document.getElementById("btn-access");
    //     iniciarReconocimiento.click();
    // }

    var cerrarMenuPrincipal = function () {
        var cerrarmenu = document.getElementById("menu-item");
        cerrarmenu.classList.remove("active");

        var elemento = document.querySelector(".overlay"); // Ejemplo: Obtener el elemento con ID "menu-item"
        elemento.classList.remove("active");
    }

    var inicioPagina = function () {
        // Desplazar la ventana al inicio de la página (coordenada Y = 0)
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Animación suave
        });
    }

    var scrollBottom = function () {

        // Obtener la posición actual de scroll vertical
        var scrollTopActual = window.pageYOffset || document.documentElement.scrollTop;

        // Desplazar la ventana hacia abajo la cantidad especificada
        window.scrollBy(0, 200);

        // Obtener la nueva posición de scroll vertical
        var scrollTopNuevo = window.pageYOffset || document.documentElement.scrollTop;

        // Verificar si el scroll llegó al final de la página
        if (scrollTopNuevo + window.innerHeight >= document.documentElement.scrollHeight) {
            // Si llegó al final, ajustar el scroll a la altura máxima del documento
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth"
            });
        }

    };

    var scrollTo = function () {

        // Obtener la posición actual de scroll vertical
        var scrollTopActual = window.pageYOffset || document.documentElement.scrollTop;

        // Desplazar la ventana hacia arriba la cantidad especificada
        window.scrollBy(0, -200);

        // Obtener la nueva posición de scroll vertical
        var scrollTopNuevo = window.pageYOffset || document.documentElement.scrollTop;

        // Verificar si el scroll llegó al inicio de la página
        if (scrollTopNuevo <= 0) {
            // Si llegó al inicio, ajustar el scroll a la parte superior
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

    };

    var commands = {
        // 'Iniciar comandos': iniciarComandosVoz,
        'Página principal': getPageNext,
        'Información general': getPageNext1,
        'Módulo 1': getPageNext2,
        'Menú': abrirMenuPrincipal,
        'Cerrar menú': cerrarMenuPrincipal,
        'Inicio': inicioPagina,
        'Desplazar hacia abajo': scrollBottom,
        'Desplazar hacia arriba': scrollTo,
        'Abrir Modal 1': abrirModal1,
        'Cerrar Modal 1': cerrarmodal1,
        'Mostrar Básicas': abrirfaqBasic,
        'Cerrar Básicas': cerrarfaqBasic,
        'Descargar lectura fácil': descargarlecturafacil
    };

    annyang.addCommands(commands);

    annyang.addCallback("result", frases => {
        console.log("El arreglo de frases: ", frases);
    });

    annyang.setLanguage("es-MX");

});




const btn_access = document.getElementById('btn-access');
btn_access.addEventListener('click', function () {
    const parrafos = document.querySelectorAll('.section-comandos');
    parrafos.forEach(parrafo => parrafo.style.display = 'block');
    annyang.start();
});




navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function (stream) {
        console.log('Permiso concedido para acceder al micrófono');
        // Aquí puedes iniciar el reconocimiento de voz
        const recognition = new webkitSpeechRecognition();
        
        recognition.continuous = true; // Esto hace que el reconocimiento sea continuo

        recognition.onstart = function () {
            console.log('El reconocimiento de voz ha comenzado.');
        };

        recognition.onresult = function (event) {
            const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
            console.log('Texto reconocido:', transcript);

            if (transcript != 'iniciar comandos') {
                console.log("oneee")
            }

            // Llama a iniciarComandosVoz() solo si se detecta la frase "iniciar comandos"
            if (transcript == 'iniciar comandos') {
                console.log("two")
                iniciarComandosVoz();
            }
        };

        recognition.onerror = function (event) {
            console.error('Error de reconocimiento:', event.error);
        };

        // Inicia el reconocimiento de voz después de haber definido los eventos
        recognition.start();
    })
    .catch(function (err) {
        console.error('Error al solicitar permiso para acceder al micrófono:', err);
    });

function iniciarComandosVoz() {
    let iniciarReconocimiento = document.getElementById("btn-access");
    iniciarReconocimiento.click();
}

