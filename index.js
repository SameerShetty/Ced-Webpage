var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";

});
const nav=document.querySelector(".navbar")
window.addEventListener('scroll',fixnav);

function fixnav()
{
    if(window.scrollY > nav.offsetHeight+150)
    {
        nav.classList.add('activenav')
    }
    else
    {
        nav.classList.remove('activenav')
    }
}
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}