//Fuctions

const decreaseNumber = () => {
    number -= 1;
    marcador.textContent = number
    if(number < 0){
        marcador.style.color = 'red';
    }
}
const resetNumber = () => {
    number = 0;
    marcador.textContent = number
    if(number === 0){
        marcador.style.color = 'black';
    }
}
const increaseNumber = () => {
    number += 1;
    marcador.textContent = number
    if(number > 0){
        marcador.style.color = 'green';
    }
}



let number = 0;
const marcador = document.querySelector('.marcador');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');




decrease.addEventListener('click', decreaseNumber);
reset.addEventListener('click', resetNumber);
increase.addEventListener('click', increaseNumber);

