function myFunction(hamburger) {
    hamburger.classList.toggle("change");
    var navb = document.getElementById("navbar");
    if (navb.className === "navbar") {
        navb.className += " responsive";
    } else {
        navb.className = "navbar";
    }
    var btn = document.getElementById("butn");
    var dropd = document.getElementById("dropdown");
    dropd.classList.remove("sys");
    btn.style.backgroundColor="black";
    btn.style.color="white";
}

function myFunction2(butn) {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.className === "dropdown") {
        dropdown.className += " sys";
        butn.style.backgroundColor="White";
        butn.style.color="black";
    } else {
        dropdown.className = "dropdown";
        butn.style.backgroundColor="black";
        butn.style.color="white";
    }
    var container = document.getElementById("container");
    container.classList.remove("change");
    var navba = document.getElementById("navbar");
    navba.classList.remove("responsive");
}

