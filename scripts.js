
document.getElementById("formPersona").addEventListener("submit", function(event) {
    event.preventDefault();

    const persona = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        edad: document.getElementById("edad").value,
        genero: document.getElementById("genero").value,
        telefono: document.getElementById("telefono").value,
        email: document.getElementById("email").value,
        direccion: document.getElementById("direccion").value,
        fecha: document.getElementById("fecha").value,
        color: document.getElementById("color").value,
        archivo: document.getElementById("archivo").files.length > 0 ? document.getElementById("archivo").files[0].name : "No subido",
        notificaciones: document.getElementById("notificaciones").checked ? "Sí" : "No",
        estadoCivil: document.querySelector('input[name="estadoCivil"]:checked') ? document.querySelector('input[name="estadoCivil"]:checked').value : "No especificado"
    };

    agregarFila(persona);
    this.reset(); // Limpiar el formulario después de agregar
});

function agregarFila(persona) {
    const tabla = document.getElementById("tablaPersonas").getElementsByTagName("tbody")[0];
    const nuevaFila = tabla.insertRow();

    nuevaFila.innerHTML = `
        <td>${persona.nombre}</td>
        <td>${persona.apellido}</td>
        <td>${persona.edad}</td>
        <td>${persona.genero}</td>
        <td>${persona.telefono}</td>
        <td>${persona.email}</td>
        <td>${persona.direccion}</td>
        <td>${persona.fecha}</td>
        <td><input type="color" value="${persona.color}" disabled></td>
        <td>${persona.archivo}</td>
        <td>${persona.notificaciones}</td>
        <td>${persona.estadoCivil}</td>
    `;
}
