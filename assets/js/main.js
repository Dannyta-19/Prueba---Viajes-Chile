  /*click en el boton de contacto */

$("#boton").click(function(){
    alert("El mensaje fue enviado correctamente")
  });

  /* tooltip de contacto*/

  $(document).ready(function(){
    $('.escri').tooltip({title: "!!!Cuentanos¡¡¡", animation: false, placement: "bottom"}); 
    $('.efenom').tooltip({title: "Acá debes escribir tu nombre completo", animation: true, placement: "bottom"}); 
    $('.efect').tooltip({title: "Acá debes escribir el asunto de tu mensaje", animation: false, placement: "bottom"}); 
  });

   /* js para carrusel*/ 

  var myCarousel = document.querySelector('#demo')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1000,
    cycle: true,
    pause: 'hover'
  })