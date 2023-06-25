

const menu = document.querySelector(".menu");
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");

openMenu.addEventListener("click", () => {
  if (openMenu) menu.classList.add(".showMenu")
  console.log("Funcioando")
})

closeMenu.addEventListener("click", () =>{
  if (closeMenu) menu.classList.remove(".showMenu")
})
