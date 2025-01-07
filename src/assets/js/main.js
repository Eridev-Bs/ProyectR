$(document).ready(function () {
  // Reutilizable para estilos hover
  function applyHoverEffect(selector, hoverStyles, defaultStyles) {
    $(selector).hover(
      function () {
        $(this).css(hoverStyles);
      },
      function () {
        $(this).css(defaultStyles);
      }
    );
  }

  // Aplicar efectos hover
  applyHoverEffect(".nav-link", {
    color: "#fff",
    "text-shadow":
      "0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)",
    transition: "all 0.5s ease",
  }, {
    color: "",
    "text-shadow": "",
  });

  applyHoverEffect(".btn", {
    color: "#fff",
    "text-shadow":
      "0 0 10px rgba(255, 255, 255, 0.9), 0 0 20px rgba(255, 255, 255, 0.7)",
    transition: "all 0.5s ease",
  }, {
    color: "",
    "text-shadow": "",
  });

  // Crear cartas dinámicas
  function createCard(email, name, body) {
    return `
      <div class="col">
        <div id="api" class="card m-2" style="width: 100%;">
          <div class="card-header">${email}</div>
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${body}</p>
          </div>
        </div>
      </div>`;
  }
  // Botón `prmBtn`
  $("#prmBtn").click(function () {
    $(".progress-bar").css("width", "50%");
    $(".progress").attr("aria-valuenow", 50);
    const nombre = $("input#Name").val();
    const mail = $("input#Email").val();
    const comen = $("#Coment").val();
    sessionStorage.setItem('name', nombre);
    sessionStorage.setItem('mail', mail);
    sessionStorage.setItem('comen', comen);
    $(".card").hide(700);
    $("#card-2").show(1000);
  });
  // Botón `fnlBtn`
  $("#fnlBtn").click(function () {
    $(".progress-bar").css("width", "100%");
    $(".progress").attr("aria-valuenow", 100);
    $("#card-2").hide(700);
    $("#card-3").show(1000);
  });

  // Acción al cargar cartas desde la API
  $("#card").click(function () {
    $(".card").hide(700);
    $("#load").fadeIn(500);
    setTimeout(function () {
      $("#load").fadeOut(500);
      $("#result").fadeIn(500);
      const tmail = sessionStorage.getItem('mail');
      const tnombre = sessionStorage.getItem('name');
      const tcomen = sessionStorage.getItem('comen');
      const star = createCard(tmail,tnombre,tcomen);
      $("#result").append(star);
    }, 2000);
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/comments",
      method: "GET",
      dataType: "json",
      success: function (data) {
        data.slice(0,4).forEach((item) => {
          const cardHTML = createCard(item.email, item.name, item.body);
          $("#result").append(cardHTML);
        });
      },
      error: function () {
        console.error("Error al obtener datos");
        $("#result").text("Ocurrió un error al obtener los datos.");
      },
    });
  });
});
