const form = document.getElementById('formPet'); // Certifique-se de que o ID corresponde
const tabelaBody = document.querySelector('#tabela-pets tbody');
let id = 1; // Contador de ID

// Adiciona um evento de submit ao formulário
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o recarregamento da página

    // Captura os valores dos campos de input
    const nomePet = document.getElementById('nome').value;
    const raca = document.getElementById('raca').value;
    const donoPet = document.getElementById('dono').value;
    const telefone = document.getElementById('fone').value;

    // Cria uma nova linha na tabela
    const linha = document.createElement('tr');

    linha.innerHTML = `
        <td>${id++}</td>
        <td>${nomePet}</td>
        <td>${raca}</td>
        <td>${donoPet}</td>
        <td>${telefone}</td>
        <td class="delete-btn">🗑️</td>
    `;

    // Adiciona a linha ao corpo da tabela
    tabelaBody.appendChild(linha);

    // Adiciona funcionalidade de remoção à lixeira
    linha.querySelector('.delete-btn').addEventListener('click', function () {
        linha.remove();
    });

    // Limpa os campos do formulário
    form.reset();
});
