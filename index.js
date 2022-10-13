let burger_menu_icon=document.getElementsByClassName("burger-menu-icon")[0];
let burger_menu_section=document.getElementsByClassName("burger-menu-section")[0];
let overlay_section=document.getElementsByClassName("overlay-section")[0];

burger_menu_icon.addEventListener("click",()=>{
    burger_menu_section.style.opacity="1";
    burger_menu_section.style.visibility="visible";
    burger_menu_section.style.left="70%";
    overlay_section.style.visibility="visible";
    overlay_section.style.opacity="0.2";
})