import { mail, nombre, coment } from '../js/estrellas';

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
        "background-color": "rebeccapurple", 
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

  function createCard(email, name, body) {
    return `
      <div class="col">
        <div id="api" class="card m-2" style="width: 100%;">
          <div class="card-header">
            ${email}
          </div>
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${body}</p>
          </div>
        </div>
      </div>
    `;
  }

  $("#card").click(function () {
    $(".card").hide(700);
    $("#load").fadeIn(500);
    setTimeout(function () {
      $("#load").fadeOut(500);
      $("#result").fadeIn(500);
    }, 2000);

    // Verificar si mail tiene valor y agregar la carta correspondiente
    if (mail) {
      const cardmHTML = createCard(mail, nombre, coment);
      $("#result").append(cardmHTML);
    }

    $.ajax({
      url: "https://jsonplaceholder.typicode.com/comments", // URL de la API
      method: "GET", // Método HTTP
      dataType: "json", // Tipo de datos esperados
      success: function (data) {
        // Limita la cantidad de resultados a 6 para mostrar 2 filas de 3 cartas
        data.slice(0, 6).forEach((item) => {
          let cardHTML = createCard(item.email, item.name, item.body);
          // Agregar la carta al contenedor
          $("#result").append(cardHTML);
        });
      },
      error: function (xhr, status, error) {
        // Manejo de errores
        console.error("Error: ", error);
        $("#result").text("Ocurrió un error al obtener los datos.");
      },
    });
  });
});
