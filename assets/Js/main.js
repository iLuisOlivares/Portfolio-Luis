//Header 

const menuButton = document.querySelector('.menu-icon');
const estado = document.querySelector('ul');

console.log(menuButton)
console.log(estado)


menuButton.addEventListener("click", () => {
    console.log('ola')
    estado.classList.toggle("show");


});