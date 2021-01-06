var HamburgerMenu = document.querySelector(".hamburgerButton");
var menuitems = document.querySelector(".menuItems");

function OpenHamburgerMenu(event){
    HamburgerMenu.style.display = "none";
    menuitems.style.display = "block";
}

HamburgerMenu.addEventListener("click", OpenHamburgerMenu);

