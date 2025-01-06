$(document).ready(function () {
  //HEADER
  $(".nav-link").hover(
    function () {
      $(this).css({
        color: "#fff",
        "text-shadow":
          "0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)",
        transition: "all 0.5s ease",
      });
    },
    function () {
      $(this).css({
        color: "",
        "text-shadow": "",
        "box-shadow": "",
      });
    }
  );

  $(".btn").hover(
    function () {
      $(this).css({
        color: "#fff",
        "text-shadow":
          "0 0 10px rgba(255, 255, 255, 0.9), 0 0 20px rgba(255, 255, 255, 0.7)",
        transition: "all 0.5s ease",
      });
    },
    function () {
      $(this).css({
        color: "",
        "text-shadow": "",
      });
    }
  );

  function createStar() {
    var star = $('<span class="star">*</span>'); // Ahora es un asterisco en lugar de una estrella
    var startPositionX = Math.random() * $(window).width(); // Posición X aleatoria en la pantalla
    var animationDuration = Math.random() * 3 + 2; // Duración aleatoria de la animación entre 2 y 5 segundos

    // Establece la posición inicial del asterisco
    star.css({
      left: startPositionX + 'px',
      animationDuration: animationDuration + 's'
    });

    // Añade el asterisco al contenedor
    $('.falling-dots').append(star);

    // Elimina el asterisco cuando termine la animación
    star.on('animationend', function() {
      var starBottomPosition = star.offset().top + star.height();
      var footerTopPosition = $('footer').offset().top;

      // Si el asterisco ha llegado cerca del footer (por ejemplo, a 10px del footer)
      if (starBottomPosition >= footerTopPosition - 1000) {
        star.remove(); // Elimina el asterisco
      }
    });
  }

  // Crea asteriscos cada 4000ms
  setInterval(createStar, 3500);
});
