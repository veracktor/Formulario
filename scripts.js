function redireccionar() {
    event.preventDefault(); 
    window.location.href = "bienvenido.html"; 
}


document.getElementById('registro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se recargue la página
    enviarDatos();
});

function enviarDatos() {
    // Obtener los valores del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Crear un objeto con los datos
    const data = {
        email: email,
        password: password
    };

    // Enviar los datos al servidor
    fetch('https://tu-api.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        console.log('Éxito:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}