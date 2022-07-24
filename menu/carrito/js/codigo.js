var images = [
			"https://i.postimg.cc/7Z68M1tz/zapatilla.png",
            "https://www.runnea.com/archivos/202005/nike-actualizaciones-ultimas-pegasus-37-1200xXx90.png?0",
            "https://i.postimg.cc/G2Bm7wMk/2022-05-22-07h55-55.png",
            "https://i.postimg.cc/5ySdpsMB/2022-05-22-07h57-03.png",
];

var num = 0;

function Siguiente(){
    var deslizar =document.getElementById('deslizar');
    num++;
    if (num >= images.length){
        num = 0;
    }
    deslizar.src = images[num];
}

function anterior(){
    var deslizar = document.getElementById('deslizar');
    num--;
    if (num < 0){
        num = images.length-1;
    }
    deslizar.src = images[num];
}



/*MENU*/
const nav_button = document.querySelector(".nav_button");
const navMenu = document.querySelector(".nav-menu");

nav_button.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
    if(navMenu.classList.contains("nav-menu_visible")){
        nav_button.setAttribute("arial-label", "cerrar menu");

    }
    else{
        nav_button.setAttribute("aria-label", "Abrir menu");
    }
})


