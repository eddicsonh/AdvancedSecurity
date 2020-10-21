import {pages} from '../controllers/index'

const router = (route) => {
    console.log(route);
    if(route != '/' || route != 'index.html'){
        window.location = "../views/404.html";
    }
};

export {router};