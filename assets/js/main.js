document.addEventListener("scroll", ajustarMenu);

var header_message = document.getElementById("header-message");
header_message.addEventListener("mouseover", mostrarForm);
header_message.addEventListener("mouseout", ocultarForm);

function mostrarForm () {
    var inputs_ocultos = document.getElementsByClassName("input-dinamico");
    for (var i = 0; i <= inputs_ocultos.length; i++) {
        inputs_ocultos[i].classList.remove("input-oculto");
    }
}

function ocultarForm () {
    var inputs_ocultos = document.getElementsByClassName("input-dinamico");
    for (var i = 0; i <= inputs_ocultos.length; i++) {
        inputs_ocultos[i].classList.add("input-oculto");
    }
}

function ajustarMenu() {
    var nav = document.getElementsByTagName("nav")[0];
    var logo = document.getElementById("logo");
    var login = document.getElementById("login");
    var menu = document.getElementById("menu");
    var sign;
    var signUp;

    if (document.body.scrollTop > 100) {
        if(document.getElementsByClassName("nav-blanco")[0] == null) {
            nav.classList.add("nav-blanco");
            logo.setAttribute("src", "assets/img/logo-pink.png");
            document.getElementById("sign").classList.toggle("hidden");
      }
    } else {
        if(document.getElementsByClassName("nav-blanco")[0] != null) {
            nav.classList.remove("nav-blanco");
            logo.setAttribute("src", "assets/img/logo-white.png");
            document.getElementById("sign").classList.toggle("hidden");
        }
    }
} 