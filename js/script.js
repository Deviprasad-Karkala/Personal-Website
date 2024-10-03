let menu_icon = document.querySelector('#menu-icon');
let menu = document.querySelector('.menu');

menu_icon.onclick = () => {
    menu_icon.classList.toggle('bx-x');
    menu.classList.toggle('open');
}