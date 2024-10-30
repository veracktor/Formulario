function redireccionar() {
    event.preventDefault(); 
    window.location.href = "finalizado.html"; 
}


document.getElementById('registro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se recargue la página
    enviarDatos();
});

function enviarDatos() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaIng = document.getElementById('fechaIng').value;
    const legajo = document.getElementById('legajo').value;
    const porcentaje = document.getElementById('porcentaje').value;
    const motivo = document.getElementById('motivo').value;

    // Crear un objeto con los datos
    const data = {
        apellido: apellido,
        nombre: nombre,
        fechaIng: fechaIng,
        legajo: legajo,
        porcentaje: porcentaje,
        motivo: motivo
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