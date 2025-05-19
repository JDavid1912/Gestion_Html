const estudiantes = [];


function consultarEstudianteDepto() {
    const idEstudiante = document.getElementById('consultaEstDepto').value;
    const resultadoDiv = document.getElementById('resultadoConsultaEstDepto');

    
    resultadoDiv.textContent = `Consulta realizada para el estudiante con ID: ${idEstudiante}`;
}


function modificarEstudianteDepto() {
    const idEstudiante = document.getElementById('idEstModDepto').value;
    const nuevoDepto = document.getElementById('nuevoDepto').value;
    const resultadoDiv = document.getElementById('resultadoModEstDepto');

   
    resultadoDiv.textContent = `Modificación realizada para estudiante ${idEstudiante}: Nuevo departamento ${nuevoDepto}`;
}


function adicionarEstudianteAsignatura() {
    const idEstudiante = document.getElementById('idEstAddAsig').value;
    const codAsignatura = document.getElementById('codAsignatura').value;
    const resultadoDiv = document.getElementById('resultadoAddEstAsig');

   
    }
    const raw = JSON.stringify({
    "idEstudiante": document.getElementById("id").value,
    "codAsignatura": document.getElementById("codAsignatura").value 

    })
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    
    };
    fetch('https://backend1.netlify.app/.netlify/functions/estudiantes', requestOptions)
        .then(response => console.log(response.status))
        .then((result) => console.log(result))
        .catch(error => console.log('error', error));



function consultarEstudianteAsignatura() {
    const idEstudiante = document.getElementById('consultaEstAsig').value;
    const resultadoDiv = document.getElementById('resultadoConsultaEstAsig');

    resultadoDiv.textContent = `Consulta realizada para el estudiante con ID: ${idEstudiante} en asignaturas`;
}

function modificarEstudianteAsignatura() {
    const idEstudiante = document.getElementById('idEstModAsig').value;
    const asigActual = document.getElementById('asigActual').value;
    const asigNueva = document.getElementById('asigNueva').value;
    const resultadoDiv = document.getElementById('resultadoModEstAsig');

    // Lógica de modificación (ejemplo)
    resultadoDiv.textContent = `Asignatura modificada para estudiante ${idEstudiante}: de ${asigActual} a ${asigNueva}`;
}
