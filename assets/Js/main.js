
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


//Contacto
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    var templateParams = {
        name: event.target[0].value,
        email: event.target[1].value,
        message: event.target[2].value,
        to_name: 'Luis Olivares'
    };
    emailjs.send('service_2ht32ft', 'template_uhymdwj', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       Swal.fire(
        'Mensaje enviado',
        'Muchas gracias!',
        'success'
      );

      form.reset();

    }, function(error) {
       console.log('FAILED...', error);
    });

});




