"use strict";
function getUsers() {
    fetch("http://localhost:3000/users")
        .then(function (res) {
        return res.json();
    })
        .then(function (data) {
        showUsers(data);
    });
}
function showUsers(users) {
    return users.map((user) => {
        var _a;
        let ul = document.createElement('ul');
        ul.setAttribute('class', 'ul-lists');
        let a = document.createElement('a');
        a.innerHTML = "Edit";
        a.setAttribute("onclick", "editUser(this); UserModalStart()");
        a.setAttribute("id", user._id);
        a.classList.add('editButton');
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.innerHTML = "Delete";
        deleteButton.setAttribute("onclick", "deleteUser(this)");
        deleteButton.setAttribute("id", user._id);
        let name = document.createElement('li');
        let cpf = document.createElement('li');
        let birthDate = document.createElement('li');
        let email = document.createElement('li');
        let address = document.createElement('li');
        let number = document.createElement('li');
        let complement = document.createElement('li');
        let city = document.createElement('li');
        let state = document.createElement('li');
        let country = document.createElement('li');
        let zipCode = document.createElement('li');
        name.innerHTML = `Nome: ${user.name}`;
        cpf.innerHTML = `CPF: ${user.cpf}`;
        birthDate.innerHTML = `Birth Date: ${user.birthDate}`;
        email.innerHTML = `Email: ${user.email}`;
        address.innerHTML = `Address: ${user.address}`;
        number.innerHTML = `Number: ${user.number}`;
        complement.innerHTML = `Complement: ${user.complement}`;
        city.innerHTML = `City: ${user.city}`;
        state.innerHTML = `State: ${user.state}`;
        country.innerHTML = `Country: ${user.country}`;
        zipCode.innerHTML = `Zip Code: ${user.zipCode}`;
        ul.appendChild(name);
        ul.appendChild(cpf);
        ul.appendChild(birthDate);
        ul.appendChild(email);
        ul.appendChild(address);
        ul.appendChild(number);
        ul.appendChild(complement);
        ul.appendChild(city);
        ul.appendChild(state);
        ul.appendChild(country);
        ul.appendChild(zipCode);
        ul.appendChild(a);
        ul.appendChild(deleteButton);
        (_a = document.querySelector('.div-informations')) === null || _a === void 0 ? void 0 : _a.appendChild(ul);
    });
}
function postUser() {
    const name = document.getElementById('inp-name');
    const cpf = document.getElementById('inp-cpf');
    const birthDate = document.getElementById('inp-birthdate');
    const email = document.getElementById('inp-email');
    const password = document.getElementById('inp-password');
    const address = document.getElementById('inp-address');
    const number = document.getElementById('inp-number');
    const complement = document.getElementById('inp-complement');
    const city = document.getElementById('inp-city');
    const state = document.getElementById('inp-state');
    const country = document.getElementById('inp-country');
    const zipCode = document.getElementById('inp-zipcode');
    let data = {
        name: `${name.value}`,
        cpf: `${cpf.value}`,
        birthDate: `${birthDate.value}`,
        email: `${email.value}`,
        password: `${password.value}`,
        address: `${address.value}`,
        number: `${number.value}`,
        complement: `${complement.value}`,
        city: `${city.value}`,
        state: `${state.value}`,
        country: `${country.value}`,
        zipCode: `${zipCode.value}`,
    };
    fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(function (res) {
        return res.json();
    })
        .then(function (json) {
        console.log(json);
    });
}
function editUser(user) {
    fetch(`http://localhost:3000/users/${user.id}`, {
        method: "GET"
    })
        .then(function (res) {
        return res.json();
    })
        .then(function (data) {
        populateInputUsers(data);
    });
}
function putUsers() {
    const name = document.getElementById('inp-name-edit');
    const cpf = document.getElementById('inp-cpf-edit');
    const birthDate = document.getElementById('inp-birthdate-edit');
    const email = document.getElementById('inp-email-edit');
    const password = document.getElementById('inp-password-edit');
    const address = document.getElementById('inp-address-edit');
    const number = document.getElementById('inp-number-edit');
    const complement = document.getElementById('inp-complement-edit');
    const city = document.getElementById('inp-city-edit');
    const state = document.getElementById('inp-state-edit');
    const country = document.getElementById('inp-country-edit');
    const zipCode = document.getElementById('inp-zipcode-edit');
    const inputHidden = document.querySelector('#id-task');
    const idTask = inputHidden.value;
    let dataEdit = {
        name: `${name.value}`,
        cpf: `${cpf.value}`,
        birthDate: `${birthDate.value}`,
        email: `${email.value}`,
        password: `${password.value}`,
        address: `${address.value}`,
        number: `${number.value}`,
        complement: `${complement.value}`,
        city: `${city.value}`,
        state: `${state.value}`,
        country: `${country.value}`,
        zipCode: `${zipCode.value}`,
    };
    console.log(dataEdit);
    fetch(`http://localhost:3000/users/${idTask}`, {
        method: "PUT",
        body: JSON.stringify(dataEdit),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(function (res) {
        return res.json();
    })
        .then(function (json) {
        console.log(json);
    });
    window.location.reload();
}
function deleteUser(user) {
    fetch(`http://localhost:3000/users/${user.id}`, {
        method: "DELETE"
    })
        .then(function (res) {
        return res.json();
    })
        .then(function (json) {
        console.log(json);
    });
}
function populateInputUsers(data) {
    const name = document.getElementById('inp-name-edit');
    const cpf = document.getElementById('inp-cpf-edit');
    const birthDate = document.getElementById('inp-birthdate-edit');
    const email = document.getElementById('inp-email-edit');
    const password = document.getElementById('inp-password-edit');
    const address = document.getElementById('inp-address-edit');
    const number = document.getElementById('inp-number-edit');
    const complement = document.getElementById('inp-complement-edit');
    const city = document.getElementById('inp-city-edit');
    const state = document.getElementById('inp-state-edit');
    const country = document.getElementById('inp-country-edit');
    const zipCode = document.getElementById('inp-zipcode-edit');
    const inputHidden = document.querySelector('#id-task');
    inputHidden.setAttribute('value', data._id);
    name.value = data.name;
    cpf.value = data.cpf;
    birthDate.value = data.birthDate;
    email.value = data.email;
    password.value = data.password;
    address.value = data.address;
    number.value = data.number;
    complement.value = data.complement;
    city.value = data.city;
    state.value = data.state;
    country.value = data.country;
    zipCode.value = data.zipCode;
}
