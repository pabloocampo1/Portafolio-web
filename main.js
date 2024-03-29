const proyects = [
    {
        name: "Lista de tareas",
        description: "Aplicacion web hecha con react para la creacion de lista de tareas, marcar como hechas y eliminar tareas, resposive",
        lenguaje: "react y css",
        linksRepo: "https://github.com/pabloocampo1/ToDo-List",
        linkWeb: "https://pabloocampo-task-list-react.netlify.app/",
        urlImage: "./images/todolist.png",
    },
    {
        name: "Pagina de climas",
        description: "Aplicacion web hecha con react para la consultar el clima de todas las ciudades del mundo trayendo datos de una API de climas, y es resposive",
        lenguaje: "react y css",
        linksRepo: "https://github.com/pabloocampo1/React-Weather-app",
        linkWeb: "https://friendly-pie-d44ed9.netlify.app/",
        urlImage: "./images/climas.png",
    },
    {
        name: "Consumo de API",
        description: "Web hecha con el proposito de consumir una api de youtube, trayendo los ultimos videos que se suben en youtube, en este caso de un cantante de genero urbano, hecha con HTML, CSS, JS Y resposive",
        lenguaje: "HTML, CSS Y JAVASCRIPT",
        linksRepo: "https://github.com/pabloocampo1/langind-page-API",
        linkWeb: "https://pabloocampo1.github.io/langind-page-API/#contactOut",
        urlImage: "./images/eladio.png",
    },
    {
        name: "Inventario de productos",
        description: "Web de inventario de productos, formulario para guardar productos en el localStorage hecho con HTML, CSS Y JAVASCRIPT ",
        lenguaje: "HTML, CSS Y JAVASCRIPT",
        linksRepo: "https://github.com/pabloocampo1/InventaryProducts",
        linkWeb: "https://pabloocampo1.github.io/InventaryProducts/",
        urlImage: "./images/invetary.png",
    },
    {
        name: "Calculadora de descuentos",
        description: "Web calculadora de descuentos, resposive, con DarkMode y dos idiomas incluidos, hecha con HTML, CSS Y JAVASCRIPT ",
        lenguaje: "HTML, CSS Y JAVASCRIPT",
        linksRepo: "https://github.com/pabloocampo1/Discount-Calculator",
        linkWeb: "https://pabloocampo1.github.io/Discount-Calculator/",
        urlImage: "./images/descuento.png",
    },
]

const proyectViuw = document.querySelector(".proyects")

function viuwProyets() {
    const proyectsAll = proyects.map((proyect, index) => `
    <div class="card-proyect" data-index="${index}">
        <div class="img-proyect">
            <img src="${proyect.urlImage}" alt="imagen de proyecto">
        </div>
        <div class="proyect-text">
            <h3>${proyect.name}</h3>
            <p>${proyect.description}</p>
            <span>${proyect.lenguaje}</span>
            <a href="${proyect.linkWeb}" target="_blank"><img src="./images/icon-website-png-0.jpg" alt="icon web"></a>  <a href="${proyect.linksRepo}" target="_blank"><img src="./images/github_PNG80.png" alt="icon repo"></a>
        </div>
    </div>
    `).join("");
    proyectViuw.innerHTML = proyectsAll;
}



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

window.addEventListener("DOMContentLoaded", () => {
    viuwProyets()
})

