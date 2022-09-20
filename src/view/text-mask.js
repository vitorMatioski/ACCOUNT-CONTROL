function addTextMask() {
    const inputsText = document.querySelectorAll('.inputsText');

    for(let i = 0; i < inputsText.length; i++){

        inputsText[i].addEventListener('keypress', (event) => {
            let keyCode = (event.keyCode ? event.keyCode : event.wich);
    
            if(keyCode > 32 && keyCode < 65 || keyCode > 90 && keyCode < 97){
                event.preventDefault();
            } else if(keyCode > 90 && keyCode < 97) {
                event.preventDefault();
            } else if(keyCode > 122 && keyCode < 126) {
                event.preventDefault();
            }
        });
    }
}