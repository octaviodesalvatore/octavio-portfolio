window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel__lista"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    type: "slider",
    draggable: true,
    dots: ".carousel__indicadores",
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
          //   itemWidth: 150,
          //   duration: 0.25,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25,
        },
      },
    ],
  });
});

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };

$(document).ready(function () {
  $(".submit").click(function (event) {
    let email = $(".email").val();
    let subject = $(".subject").val();
    let message = $(".message").val();
    let statusElm = $(".status");
    statusElm.empty();

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div>Email es valido</div>");
    } else {
      statusElm.append("<div>Email no es valido</div>");
      event.preventDefault();
    }

    if (subject.length >= 2) {
      statusElm.append("<div>Asunto es valido</div>");
    } else {
      statusElm.append("<div>Asunto no es valido</div>");
      event.preventDefault();
    }

    if (message.length >= 10) {
      statusElm.append("<div>Mensaje es valido</div>");
    } else {
      statusElm.append("<div>Mensaje no es valido</div>");
      event.preventDefault();
    }
  });
});
