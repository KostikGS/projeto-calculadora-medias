const form = document.getElementById('formAtividade');
const imgAprovado = '<img src="images/aprovado.png" alt= "emoji celebrando" />'
const imgReprovado = '<img src="images/reprovado.png" alt= "emoji decepcionado" />'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota minima: "));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha(); 
    atualizaTabela();
    atualizaMedia();
});

function addLinha(){

    const inputNomeAtividade = document.getElementById('NomeAtividade');
    const inputNotaAtividade = document.getElementById('NotaAtividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td> ${inputNomeAtividade.value}</td>`
        linha += `<td> ${inputNotaAtividade.value}</td>`
        linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`
    
        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

}

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}

function atualizaMedia() {
    const mediaFinal = calculoMediaFinal();

    document.getElementById('media-final').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-result').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculoMediaFinal(){

    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;

}