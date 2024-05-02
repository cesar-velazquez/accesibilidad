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

    let abrirModalEsquema = function () {
        let modal = document.getElementById("modal-1");
        let backdrop = document.getElementsByClassName("modal-backdrop")[0];
        modal.style.display = "block";
        backdrop.style.display = "block";
        document.body.classList.add("modal-open");
    }

    let cerrarmodalEsquema = function () {
        let modal = document.getElementById("modal-1");
        let backdrop = document.getElementsByClassName("modal-backdrop")[0];
        modal.style.display = "none";
        backdrop.style.display = "none";
        document.body.classList.add("close-modal");
    }

    let abrirfaq1 = function () {
        let abrirfaquno = document.getElementById("faq1");
        abrirfaquno.classList.remove('collapsed');
        abrirfaquno.setAttribute('aria-expanded', 'true');
        abrirfaquno.nextElementSibling.classList.add('show');
    }
    let cerrarfaq1 = function () {
        let cerrarfaq = document.getElementById("faq1");
        cerrarfaq.classList.add('collapsed');
        cerrarfaq.setAttribute('aria-expanded', 'false');
        cerrarfaq.nextElementSibling.classList.remove('show');
    }

    let nextarget = function () {
        let pasar = document.getElementById("swip1");
        pasar.style.zIndex = "2";
        pasar.style.transform = "translate3d(calc(-7.25% + 0px), 0px, -100px) rotateZ(-2deg) scale(1)";
        pasar.style.transitionDuration = "0.5s"
    }

    let nexttarget2 = function () {
        let swip1 = document.getElementById("swip1");
        let swip2 = document.getElementById("swip2");
        let swip3 = document.getElementById("swip3");
        //  width: 888px; 
        //  z-index: 1; 
        //  transform: translate3d(calc(-13% + 0px), 0px, -200px) rotateZ(-4deg) scale(1); 
        //  transition-duration: 0ms;
        // swip1.style.width = "888px";
        swip1.style.zIndex = "1";
        swip1.style.transform = "translate3d(calc(-13% + 0px), 0px, -200px) rotateZ(-4deg) scale(1)";
        swip1.style.transitionDuration = "0.5s";

        // width: 888px; 
        // z-index: 2; 
        // transform: translate3d(calc(-7.25% - 888px), 0px, -100px) rotateZ(-2deg) scale(1); 
        // transition-duration: 0ms;
        // swip2.style.width = "888px"
        swip2.style.zIndex = "2";
        swip2.style.transform = "translate3d(calc(-7.25% - 888px), 0px, -100px) rotateZ(-2deg) scale(1)";
        swip2.style.transitionDuration = "0.5s"

        // width: 888px; 
        // z-index: 3; 
        // transform: translate3d(-1776px, 0px, 0px) rotateZ(0deg) scale(1); 
        // transition-duration: 0ms;
        swip3.style.zIndex = "3";
        swip3.style.transform = "translate3d(-1776px, 0px, 0px) rotateZ(0deg) scale(1)";
        swip3.style.transitionDuration = "0.5s";
    }

    // Regresar tarjetas

    let previoustarget = function () {
        let swip3 = document.getElementById("swip3");
        let swip2 = document.getElementById("swip2");
        // width: 888px; 
        // z-index: 2; 
        // transform: translate3d(calc(7.25% - 1776px), 0px, -100px) rotateZ(2deg) scale(1); 
        // transition-duration: 0ms;
        swip3.style.zIndex = "2";
        swip3.style.transform = "translate3d(calc(7.25% - 1776px), 0px, -100px) rotateZ(2deg) scale(1)";
        swip3.style.transitionDuration = "0.5s";
        // width: 888px; 
        // z-index: 3; 
        // transform: translate3d(-888px, 0px, 0px) rotateZ(0deg) scale(1); 
        // transition-duration: 0ms;
        swip2.style.zIndex = "3";
        swip2.style.transform = "translate3d(-888px, 0px, 0px) rotateZ(0deg) scale(1)";
        swip2.style.transitionDuration = ".5s";
    }

    let previoustarget1 = function () {
        let swip1 = document.getElementById("swip1");
        let swip2 = document.getElementById("swip2");
        let swip3 = document.getElementById("swip3");
        // width: 888px; 
        // z-index: 3; 
        // transform: translate3d(0px, 0px, 0px) rotateZ(0deg) scale(1); 
        // transition-duration: 0ms;
        swip1.style.zIndex = "3";
        swip1.style.transform = "translate3d(0px, 0px, 0px) rotateZ(0deg) scale(1)"
        swip1.style.transitionDuration = ".5s"

        // width: 888px; 
        // z-index: 2; 
        // transform: translate3d(calc(7.25% - 888px), 0px, -100px) rotateZ(2deg) scale(1); 
        // transition-duration: 0ms;
        swip2.style.zIndex = "2";
        swip2.style.transform = "translate3d(calc(7.25% - 888px), 0px, -100px) rotateZ(2deg) scale(1)";
        swip2.style.transitionDuration = "0.5s";
    }

    let secondtab = function () {
        let secondtab = document.getElementById("secondtab");
        let firstab = document.getElementById("firsttab")
        let parrafo1 = document.getElementById("ppaso-1");
        let parrafo2 = document.getElementById("ppaso-2");
        firstab.classList.remove("active");
        secondtab.classList.add("active");
        parrafo2.classList.add("active");
        parrafo1.classList.remove("active");
    }

    let firstab = function () {
        let firstab = document.getElementById("firsttab")
        let secondtab = document.getElementById("secondtab");
        let parrafo1 = document.getElementById("ppaso-1");
        let parrafo2 = document.getElementById("ppaso-2");

        firstab.classList.add("active");
        secondtab.classList.remove("active");
        parrafo1.classList.add("active");
        parrafo2.classList.remove("active");
    }

    var commands = {
        'Página principal': getPageNext,
        'Información general': getPageNext1,
        'Módulo 1': getPageNext2,
        'Menú': abrirMenuPrincipal,
        'Cerrar menú': cerrarMenuPrincipal,
        'Inicio': inicioPagina,
        'Desplazar hacia abajo': scrollBottom,
        'Desplazar hacia arriba': scrollTo,
        // 
        'Abrir modal esquema': abrirModalEsquema,
        "Cerrar modal esquema": cerrarmodalEsquema,
        "abrir botón colapsado uno": abrirfaq1,
        "cerrar botón colapsado uno": cerrarfaq1,
        "Pasar tarjeta 1": nextarget,
        "Pasar tarjeta 2": nexttarget2,
        "Volver a tarjeta 2": previoustarget,
        "Volver a tarjeta 1": previoustarget1,
        "Segunda pestaña": secondtab,
        "Volver a primer pestaña": firstab
    };

    annyang.addCommands(commands);

    annyang.addCallback("result", frases => {
        console.log("El arreglo de frases: ", frases);
    });

    annyang.setLanguage("es-MX");

    annyang.start();

});
