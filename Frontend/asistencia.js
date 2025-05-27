// Datos de ejemplo (puedes reemplazar por datos reales)
let asistencias = [
    { nombre: "Juan Pérez", fecha: "2025-05-26", asistencia: "Presente" }
];

let editIndex = null;

function renderTabla() {
    const tbody = document.querySelector("table tbody");
    tbody.innerHTML = "";
    asistencias.forEach((reg, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${reg.nombre}</td>
            <td>${reg.fecha}</td>
            <td>${reg.asistencia}</td>
            <td><button onclick="modificarRegistro(${idx})">Modificar</button></td>
        `;
        tbody.appendChild(tr);
    });
}

window.modificarRegistro = function(idx) {
    const reg = asistencias[idx];
    document.getElementById("nombre").value = reg.nombre;
    document.getElementById("fecha").value = reg.fecha;
    document.getElementById("asistencia").value = reg.asistencia;
    editIndex = idx;
};

document.addEventListener("DOMContentLoaded", function() {
    renderTabla();

    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const fecha = document.getElementById("fecha").value;
        const asistencia = document.getElementById("asistencia").value;

        if (editIndex !== null) {
            // Modificar registro existente
            asistencias[editIndex] = { nombre, fecha, asistencia };
            editIndex = null;
        } else {
            // Agregar nuevo registro (opcional)
            asistencias.push({ nombre, fecha, asistencia });
        }

        this.reset();
        renderTabla();
    });
});