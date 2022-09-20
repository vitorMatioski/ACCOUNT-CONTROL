"use strict";
function getAulas() {
    fetch("http://localhost:3000/aulas")
        .then(function (res) {
        return res.json();
    })
        .then(function (data) {
        showAulas(data);
    });
}
function showAulas(aulas) {
    return aulas.map((aula) => {
        var _a;
        let ul = document.createElement('ul');
        ul.setAttribute('class', 'ul-lists');
        let a = document.createElement('a');
        a.innerHTML = "Editar";
        a.setAttribute("onclick", "editAula(this); AulaModalStart()");
        a.setAttribute("id", aula._id);
        a.classList.add('editButton');
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.innerHTML = "Pagar";
        deleteButton.setAttribute("onclick", "deleteAula(this)");
        deleteButton.setAttribute("id", aula._id);
        let nome = document.createElement('li');
        let dataAula = document.createElement('li');
        let valorAula = document.createElement('li');
        let descricao = document.createElement('li');
        nome.innerHTML = `Nome: ${aula.nome}`;
        dataAula.innerHTML = `Data: ${aula.dataAula}`;
        valorAula.innerHTML = `Valor: ${aula.valorAula}`;
        descricao.innerHTML = `Descrição: ${aula.descricao}`;
        ul.appendChild(nome);
        ul.appendChild(dataAula);
        ul.appendChild(valorAula);
        ul.appendChild(descricao);
        ul.appendChild(a);
        ul.appendChild(deleteButton);
        (_a = document.querySelector('.div-informations')) === null || _a === void 0 ? void 0 : _a.appendChild(ul);
    });
}
function postAula() {
    const nome = document.getElementById('nome');
    const dataAula = document.getElementById('dataAula');
    const valorAula = document.getElementById('valorAula');
    const descricao = document.getElementById('descricao');
    let dados = {
        nome: `${nome.value}`,
        dataAula: `${dataAula.value}`,
        valorAula: `${valorAula.value}`,
        descricao: `${descricao.value}`,
    };
    fetch("http://localhost:3000/aulas", {
        method: "POST",
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(function (res) {
        return res.json();
    })
        .then(function (json) {
        console.log(json);
    });
}
function editAula(aula) {
    fetch(`http://localhost:3000/aulas/${aula.id}`, {
        method: "GET"
    })
        .then(function (res) {
        return res.json();
    })
        .then(function (data) {
        populateInputAula(data);
    });
}
function putAula() {
    const nome = document.getElementById('nomeEdit');
    const dataAula = document.getElementById('dataAulaEdit');
    const valorAula = document.getElementById('valorAulaEdit');
    const descricao = document.getElementById('descricaoEdit');
    const inputHidden = document.getElementById('id-task');
    const idAula = inputHidden.value;
    let dadosEdit = {
        nome: `${nome.value}`,
        dataAula: `${dataAula.value}`,
        valorAula: `${valorAula.value}`,
        descricao: `${descricao.value}`,
    };
    fetch(`http://localhost:3000/aulas/${idAula}`, {
        method: "PUT",
        body: JSON.stringify(dadosEdit),
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
function deleteAula(aula) {
    fetch(`http://localhost:3000/aulas/${aula.id}`, {
        method: "DELETE"
    })
        .then(function (res) {
        return res.json();
    })
        .then(function (json) {
        console.log(json);
    });
}
function populateInputAula(data) {
    const nome = document.getElementById('nomeEdit');
    const dataAula = document.getElementById('dataAulaEdit');
    const valorAula = document.getElementById('valorAulaEdit');
    const descricao = document.getElementById('descricaoEdit');
    const inputHidden = document.querySelector('#id-task');
    inputHidden.setAttribute('value', data._id);
    nome.value = data.nome;
    dataAula.value = data.dataAula;
    valorAula.value = data.valorAula;
    descricao.value = data.descricao;
}
