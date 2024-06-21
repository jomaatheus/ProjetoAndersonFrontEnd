export function menuShow() {
  let menuMobile = document.querySelector(".nav-menu-mobile ul");

  if (menuMobile.classList.contains("active")) {
    menuMobile.classList.remove("active");
    document.querySelector(".menu-icon img ").src = "images/menu.png";
  } else {
    menuMobile.classList.add("active");
    document.querySelector(".menu-icon img").src = "images/close.png";
  }
}
