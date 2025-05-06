function agregarEstudianteDepartamento() {
    const estudentId = document.getElementById('idEstAddDep').value;
    const departmentoId = document.getElementById('codDepartamento').value;

    const raw = JSON.stringify({
        "studentId":document.getElementById("estudentId").value,
        "departmentoId":document.getElementById("departmentoId").value
    });

    const myHeaders = new Headers()
        myHeaders.append("Content-Type","application/json")
        event.preventDefault()
    };

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch('url', requestOptions)
        .then((response) => response.textContent())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));
