
function iniciarFormulario() {

    const form = document.getElementById('solicitud');
    if (form) {
        form.addEventListener('submit', enviarDatos);
    }
    
}

function enviarDatos(event) {
    event.preventDefault()
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const ingreso = document.getElementById('ingreso').value;
    const legajo = document.getElementById('legajo').value;
    const porcentaje = document.getElementById('porcentaje').value;
    const motivo = document.getElementById('motivo').value;

    const data = {
        apellido: apellido,
        nombre: nombre,
        ingreso: ingreso,
        legajo: legajo,
        porcentaje: porcentaje,
        motivo: motivo
    };

    console.log(data);
    console.log('Información exitosamente enviada')

    fetch('/Formulario', {
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
        
        window.location.href = '/finalizado'
    })
    .catch(error => {
        mostrarErrorModal(error.message);
    });
}

function mostrarErrorModal(mensaje) {
    const modal = document.getElementById('miModal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = 'block';
}

function cerrarModal() {
    const modal = document.getElementById('miModal');
    modal.style.display = 'none';
}


function volver() {
    window.history.back();
}