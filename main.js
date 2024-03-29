const openMenu = document.querySelector(".menu-mobile");
const nav = document.querySelector(".nav");
const closeMenu = document.querySelector(".close-menu");
const body = document.querySelector(".body")
const aLink = document.querySelectorAll(".aLink");
const darkMode = document.querySelector(".darkmode");


openMenu.addEventListener("click", () => {
    nav.style.display = "flex";
})

closeMenu.addEventListener("click", () => {
    nav.style.display = "none";
})

aLink.forEach((element) => {
    element.addEventListener("click", () => {
        nav.style.display = "none";
    })
})

darkMode.addEventListener("click", () => {
    DarkMode()
})

let Modestate = false;

function DarkMode() {
    const texts = document.querySelectorAll(".text-Darkmode");
    const btnIntro = document.querySelectorAll(".btn-intro");
    const btnIntro_a = document.querySelectorAll(".btn-intro__a");
    const imgLogo = document.querySelector(".logoImg");
    const back1 = document.querySelectorAll(".back1");
    const back2 = document.querySelectorAll(".back2");
    const cur = document.querySelectorAll(".cur");
    const cur2 = document.querySelector(".cur2");

    if (!Modestate) {
        texts.forEach(element => {
            element.style.color = "black";
        });
        btnIntro.forEach(element => {
            element.style.background = "#9674ff";
        });
        btnIntro_a.forEach(element => {
            element.style.color = "white";
        });
        back1.forEach(element => {
            element.style.background = "white";
        });
        back2.forEach(element => {
            element.style.background = "#e9e9e9";
        });
        cur.forEach(element => {
            element.style.fill = "white";
        });
        cur2.style.fill = "#e9e9e9";
        imgLogo.src = "./logo-claro-removebg-preview.png";

        Modestate = true;
    } else {
        texts.forEach(element => {
            element.style.color = "";
        });
        btnIntro.forEach(element => {
            element.style.background = "";
        });
        btnIntro_a.forEach(element => {
            element.style.color = "";
        });
        back1.forEach(element => {
            element.style.background = "";
        });
        back2.forEach(element => {
            element.style.background = "";
        });
        cur.forEach(element => {
            element.style.fill = "";
        });
        cur2.style.fill = "";
        imgLogo.src = "./logo-dark.png";

        Modestate = false;
    }
}



