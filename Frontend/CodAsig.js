const subjects = [];

function showAddSubject() {
    document.getElementById('addSubjectForm').style.display = 'block';
    document.getElementById('modifySubjectForm').style.display = 'none';
}

function addSubject() {
    const subjectName = document.getElementById('subjectName').value.trim();
    if (subjectName) {
        subjects.push(subjectName);
        document.getElementById('subjectName').value = '';
        alert('Asignatura adicionada correctamente.');
    } else {
        alert('Por favor, ingrese un nombre válido.');
    }
}

function listSubjects() {
    const subjectList = document.getElementById('subjects');
    subjectList.innerHTML = '';
    subjects.forEach((subject, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${subject}`;
        subjectList.appendChild(li);
    });
    document.getElementById('modifySubjectForm').style.display = 'block';
}

function modifySubject() {
    const subjectIndex = parseInt(document.getElementById('subjectIndex').value, 10) - 1;
    const newSubjectName = document.getElementById('newSubjectName').value.trim();

    if (subjectIndex >= 0 && subjectIndex < subjects.length && newSubjectName) {
        subjects[subjectIndex] = newSubjectName;
        alert('Asignatura modificada correctamente.');
        listSubjects();
    } else {
        alert('Por favor, ingrese un índice válido y un nuevo nombre.');
    }
}