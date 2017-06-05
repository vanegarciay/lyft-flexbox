document.addEventListener("scroll", ajustarMenu);

function ajustarMenu() {
    var nav = document.getElementsByTagName("nav")[0];
    var logo = document.getElementById("logo");

    if (document.body.scrollTop > 100) {
        nav.classList.add("nav-blanco");
        logo.setAttribute("src", "assets/img/logo-pink.png");
    } else {
        nav.classList.remove("nav-blanco");
        logo.setAttribute("src", "assets/img/logo-white.png");
    }
}