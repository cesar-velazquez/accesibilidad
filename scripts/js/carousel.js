function ponerIndiceCarousel1() {
    var totalElementos = $('.carousel-con-indicadores .carousel-item').length;
    var elementoActual = $(".carousel-con-indicadores .carousel-item.active" );
    var indiceActual = $('.carousel-con-indicadores .carousel-item').index(elementoActual) + 1;

    $('#totalElementos').text(totalElementos);
    $('#indiceActual').text(indiceActual);
}

function checkitem1() {
    if ($('.carousel-con-indicadores .carousel-inner .carousel-item:first').hasClass('active')) {
        $('.carousel-con-indicadores #carousel-pasos-prev').addClass('desaparecido');
        $('.carousel-con-indicadores #carousel-pasos-prev').prop("disabled",true);
        $('.carousel-con-indicadores #carousel-pasos-next').removeClass('desaparecido');
        $('.carousel-con-indicadores #carousel-pasos-next').prop("disabled",false);
    } else if ($('.carousel-con-indicadores .carousel-inner .carousel-item:last').hasClass('active')) {
        $('.carousel-con-indicadores #carousel-pasos-prev').removeClass('desaparecido');
        $('.carousel-con-indicadores #carousel-pasos-prev').prop("disabled",false);
        $('.carousel-con-indicadores #carousel-pasos-next').addClass('desaparecido');
        $('.carousel-con-indicadores #carousel-pasos-next').prop("disabled",true);
    } else {
        $('.carousel-con-indicadores #carousel-pasos-prev').removeClass('desaparecido');
        $('.carousel-con-indicadores #carousel-pasos-prev').prop("disabled",false);
        $('.carousel-con-indicadores #carousel-pasos-next').removeClass('desaparecido');
        $('.carousel-con-indicadores #carousel-pasos-next').prop("disabled",false);
    }
}

$('#cont-vert .vert-btn-2').click(function(){
    var direction = $(this).attr('data-direction');
    $('#cont-vert').carousel(direction);
});



$('#cont-vert').on('slid.bs.carousel', function(){
    checkitem1();
});

$('#contenedor-slider-general-1 .slider__control').click(function(){
    var direction = $(this).attr('data-direction');
    $('#informacion-general-1').carousel(direction);
});

checkitem1();
ponerIndiceCarousel1();




$(function() {

    function indicadoresCarousel(carousel) {
        var idCarousel = $(carousel).attr('id');
        var indicadores = $(carousel).attr('indicadores-target');
        var totalElementos = $(`#${idCarousel} .carousel-item`).length;
        var elementoActual = $(`#${idCarousel} .carousel-item.active`);
        var indiceActual = $(`#${idCarousel} .carousel-item`).index(elementoActual) + 1;
        $(`${indicadores}`).text(`${indiceActual} / ${totalElementos}`);
    }

    function verificarBotonesCarousel(carousel) {
        var idCarousel = $(carousel).attr('id');
        var controlPrev = $(carousel).attr('data-prev');
        var controlNext = $(carousel).attr('data-next');
        if ($(`#${idCarousel} .carousel-inner .carousel-item:first`).hasClass('active')) {
            $(`${controlPrev}`).addClass('desaparecido');
            $(`${controlPrev}`).prop("disabled",true);
            $(`${controlNext}`).removeClass('desaparecido');
            $(`${controlNext}`).prop("disabled",false);
        } else if ($(`#${idCarousel} .carousel-inner .carousel-item:last`).hasClass('active')) {
            $(`${controlPrev}`).removeClass('desaparecido');
            $(`${controlPrev}`).prop("disabled",false);
            $(`${controlNext}`).addClass('desaparecido');
            $(`${controlNext}`).prop("disabled",true);
        } else {
            $(`${controlPrev}`).removeClass('desaparecido');
            $(`${controlPrev}`).prop("disabled",false);
            $(`${controlNext}`).removeClass('desaparecido');
            $(`${controlNext}`).prop("disabled",false);
        }
    }

    $('.js-boton-control-carousel').click(function() {
        var carouselObjetivo = $(this).attr('data-target');
        var direction = $(this).attr('data-direction');
        $(carouselObjetivo).carousel(direction);
    });

    $(".carousel-con-indicadores").on('slid.bs.carousel', function() {
        indicadoresCarousel($(this));
    });

    $(".carousel").on('slid.bs.carousel', function() {
        verificarBotonesCarousel($(this));
    });
    
    $('.modal-computadora').on('shown.bs.modal', function () {
        $('.modal-backdrop.show').css('background-color', '#edd892');
    });

    $('.simulador-enlace').on('click', function() {
        var url = $(this).attr('url-target');
        window.open(url, '_blank');
    });

    $('.simulador-enlace-descarga').on('click', function() {
        var url = $(this).attr('url-target');
        var link = document.createElement('a');
        document.body.appendChild(link);
        link.href = url;
        link.download = '';
        link.click();
    });

    
    var carouseles = $('.carousel');
    var carouselesConIndicadores = $('.carousel-con-indicadores');

    for (let i = 0; i < carouselesConIndicadores.length; i++) {
        indicadoresCarousel($(carouselesConIndicadores[i]));
    }

    for (let i = 0; i < carouseles.length; i++) {
        verificarBotonesCarousel($(carouseles[i]));
    }
})