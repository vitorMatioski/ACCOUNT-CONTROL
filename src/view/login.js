const form = {
    email: () => document.getElementById("email"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
}

function login(){
    firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value
    ).then(response => {
        window.location.href = "app/dist/screens/aula.html"
     }).catch(error =>{
        console.log('error', error)
     })
}
 