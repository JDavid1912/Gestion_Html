function agregarEstudianteDepartamento() {
    const studentId = document.getElementById('idEstAddDep').value;
    const departmentId = document.getElementById('codDepartamento').value;
    const resultadoDiv = document.getElementById('resultadoAddEstDep');

    const raw = JSON.stringify({
        studentId: studentId,
        departmentId: departmentId
    });

    const myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch('http://localhost:3000/addStudentToDepartment', requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error al agregar el estudiante al departamento');
            }
        })
        .then(result => {
            resultadoDiv.innerHTML = `<p>${result.status}</p>`;
        })
        .catch(error => {
            resultadoDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
        });
}