function AulaModalStart(id) {
    const modal = document.querySelector('#confirmation-modal');
    modal.classList.add('show');
    console.log(id)
    let saveButton = document.querySelector("#saveButtonTask")  
    saveButton.setAttribute('onclick', `putAula(${id})`)  
    modal.addEventListener('click', (event) => {
        if(event.target.id == 'confirmation-modal' || event.target.className == 'close-button') {
            modal.classList.remove('show');
            window.location.href = './aula.html';
        }
    });
}