import views from '../views/404.html'


export default () => {
    
    const divElement = document.getElementById('root');
    divElement.innerHTML = views;

    return divElement;
};