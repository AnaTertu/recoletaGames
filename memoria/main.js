const cardBoard = document.querySelector("#cardboard");
const images = [
    'alimento.jpg',
    'alimento2.jpg',
    'bicicleta1.jpg',
    'bicicleta2.jpg',
    'caminhar.jpg',
    'caminhar2.jpg',
    'exercicio.jpg',
    'exercicio2.jpg',
    'lavar.jpg',
    'lavar2.jpg',
    'recolha.jpg',
    'recolha2.jpg'
];

let cardHTML = '';

images.forEach(img => {
    cardHTML +=
    // <div>
    //     <img src="img/${img}">
    //     <img src="img/recoleta.jpg">
    // </div>
});