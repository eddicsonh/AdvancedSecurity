import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import './main.css'
import 'boxicons';
import {router} from './router/index.router'

var $ = require('jquery');
window.$ = $;
require('bootstrap');


const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread");
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer){
        menu.classList.toggle("spread");
    }
})
// router(window.location.hash);

// window.addEventListener('hashchange', () => {
//     console.log(window.location.hash);
//     router(window.location.hash);
// })