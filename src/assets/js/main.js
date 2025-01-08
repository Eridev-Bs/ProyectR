$(document).ready(function () {

  // Variables de uso publico 🔽.
  const Listar = JSON.parse(sessionStorage.getItem("Listar")) || [];
  

  // Funciones de uso publico 🔽.
  function createStar() {
    var star = $('<span class="star">*</span>');
    var startPositionX = Math.random() * $(window).width();
    var animationDuration = Math.random() * 3 + 2;

    star.css({
      left: startPositionX + "px",
      animationDuration: animationDuration + "s",
    });

    $(".falling-dots").append(star);

    star.on("animationend", function () {
      var starBottomPosition = star.offset().top + star.height();
      var footerTopPosition = $("footer").offset().top;

      if (starBottomPosition >= footerTopPosition - 1000) {
        star.remove();
      }
    });
  }
  setInterval(createStar, 3500);


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


  function manageStars() {
    Listar.forEach((item) => {
      $("#result").append(item);
    });
  }



  // Efectos de Nav y botones 🔽.
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

  $(".btnss").hover(
    function () {
      $(this).css({
        background: "rebeccapurple",
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




  // Funciones de Botones y Apis 🔽.
  $("#prmBtn").click(function () {
    $(".progress-bar").css("width", "50%");
    $(".progress").attr("aria-valuenow", 50);
    const nombre = $("input#Name").val();
    const mail = $("input#Email").val();
    const comen = $("#Coment").val();
    const star = createCard(mail, nombre, comen);

    Listar.push(star);

    sessionStorage.setItem("Listar", JSON.stringify(Listar));

    $(".card").hide(700);
    $("#card-2").show(1000);
  });

  $("#fnlBtn").click(function () {
    $(".progress-bar").css("width", "100%");
    $(".progress").attr("aria-valuenow", 100);
    $("#card-2").hide(700);
    $("#card-3").show(1000);
  });
  $("#allBtn").click(function () {
    $(".card").hide(700);
    $("#load").fadeIn(500);
    setTimeout(function () {
      $("#load").fadeOut(500);
      $("#result").fadeIn(500);
      $("#tituls").fadeIn(500);
      $("#tu").fadeIn(500);
      $("#ot").fadeIn(500);
      $("#rtituls").fadeIn(500);
      $("#resultAll").fadeIn(500);
    }, 2000);
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/comments",
      method: "GET",
      dataType: "json",
      success: function (data) {
        data.slice(0, 4).forEach((item) => {
          const cardHTML = createCard(item.email, item.name, item.body);
          $("#resultAll").append(cardHTML);
        });
      },
      error: function () {
        console.error("Error al obtener datos");
        $("#resultAll").text("Ocurrió un error al obtener los datos.");
      },
    });
    manageStars();
  });

  $("#myBtn").click(function () {
    $(".card").hide(700);
    $("#load").fadeIn(500);
    setTimeout(function () {
      $("#load").fadeOut(500);
      $("#tituls").fadeIn(500);
      $("#tu").fadeIn(500);
      $("#rtituls").fadeIn(500);
      $("#result").fadeIn(500);
    }, 2000);
    manageStars();
  });

  $("#conBtn").click(function () {
    $(".card").hide(700);
    $("#load").fadeIn(500);
    setTimeout(function () {
      $("#load").fadeOut(500);
      $("#tituls").fadeIn(500);
      $("#ot").fadeIn(500);
      $("#rtituls").fadeIn(500);
      $("#resultAll").fadeIn(500);
    }, 2000);
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/comments",
      method: "GET",
      dataType: "json",
      success: function (data) {
        data.slice(0, 4).forEach((item) => {
          const cardHTML = createCard(item.email, item.name, item.body);
          $("#resultAll").append(cardHTML);
        });
      },
      error: function () {
        console.error("Error al obtener datos");
        $("#resultAll").text("Ocurrió un error al obtener los datos.");
      },
    });
  });
});
