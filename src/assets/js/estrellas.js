let mail = "";
let nombre = "";
let coment = "";

$(document).ready(function () {
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
        "background-color": "rebeccapurple", // Asegúrate de incluir las comillas para propiedades con guion
        color: "#fff",
        "text-shadow": 
          "0 0 10px rgba(255, 255, 255, 0.9), 0 0 20px rgba(255, 255, 255, 0.7)",
        "transition": "all 0.5s ease", // Incluye las comillas para consistencia
      });
    },
    function () {
      $(this).css({
        color: "",
        "text-shadow": "",
      });
    }
  );
  
  $("#prmBtn").click(function () {
    $(".progress-bar").css("width", "50%"); // Anima el ancho de 0% a 50%
    $(".progress").attr("aria-valuenow", 50); // Actualiza el valor de accesibilidad
    $(".card").hide(700); // Oculta el formulario con una animación de 500ms
    $("#card-2").show(1000);
    mail = $("#floatingEmail").val();
    nombre = $("#floatingName").val();
    coment = $("#exampleFormControlTextarea1").val();
  });
  
  $("#fnlBtn").click(function (){
    $(".progress-bar").css("width", "100%"); // Anima el ancho de 0% a 50%
    $(".progress").attr("aria-valuenow", 100); // Actualiza el valor de accesibilidad
    $("#card-2").hide(700);
    $("#card-3").show(1000);
  });
});

export { mail, nombre, coment };
