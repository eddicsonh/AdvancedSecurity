import views from '../views/expertos.html'

export default () => {
    
    const divElement = document.createElement('div')
    divElement.innerHTML = views;

    return divElement;
};