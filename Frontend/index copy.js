function modificar() {
    // Obtener el nuevo nombre (puede estar vacío)
    const nuevoNombre = document.getElementById("nombreModificar").value.trim();
    
    if (nuevoNombre !== "") {
        departamento = nuevoNombre;
        // Actualizar la visualización automáticamente
        document.getElementById("nombreMostrar").textContent = departamento;
        // Limpiar el campo de modificación
        document.getElementById("nombreModificar").value = "";
        alert("Departamento modificado exitosamente");
    } else {
        alert("Por favor ingrese un nombre válido");
    }
}

// Mostrar el nombre actual al cargar la página
document.getElementById("nombreMostrar").textContent = departamento;