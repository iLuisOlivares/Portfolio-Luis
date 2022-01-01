
//Header 

const menuButton = document.querySelector('.menu-icon');
const estado = document.querySelector('ul');
console.log(menuButton)
console.log(estado)


menuButton.addEventListener("click", () => {
    estado.classList.toggle("show");
});
estado.addEventListener("click", () => {
    estado.classList.toggle("show");
});


