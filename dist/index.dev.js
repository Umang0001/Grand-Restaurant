"use strict";

var burger_menu_icon = document.getElementsByClassName("burger-menu-icon")[0];
var burger_menu_section = document.getElementsByClassName("burger-menu-section")[0];
var overlay_section = document.getElementsByClassName("overlay-section")[0];
var register_btn = document.getElementsByClassName("register-btn")[0];
burger_menu_icon.addEventListener("click", function () {
  if (burger_menu_section.style.opacity == 0) {
    burger_menu_section.style.opacity = "1";
    burger_menu_section.style.visibility = "visible";
    burger_menu_icon.style.position = "fixed";
    burger_menu_icon.style.left = "45%";
    burger_menu_section.style.left = "50%";
    overlay_section.style.visibility = "visible";
    overlay_section.style.opacity = "0.6";
    register_btn.style.display = "none";
  } else {
    burger_menu_section.style.opacity = "0";
    burger_menu_section.style.visibility = "hidden";
    burger_menu_icon.style.position = "static";
    burger_menu_section.style.left = "100%";
    overlay_section.style.visibility = "hidden";
    overlay_section.style.opacity = "0";
    register_btn.style.display = "none";
  }
});