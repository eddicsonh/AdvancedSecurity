import views from '../views/servicios.html'
import dt_process_svg from '../img/data_process.svg'

export default () => {
    
    const divElement = document.createElement('div')
    divElement.innerHTML = views;

    return divElement;
};