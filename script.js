// Selecionando os elementos do DOM
const btnCalcular = document.getElementById('btn-calcular');
const inputPessoas = document.getElementById('pessoas');
const divResultado = document.getElementById('resultado');
const spanLitros = document.getElementById('litros');

// Função para calcular a economia
function calcularEconomia() {
    const numPessoas = parseInt(inputPessoas.value);

    if (isNaN(numPessoas) || numPessoas <= 0) {
        alert('Por favor, insira um número válido de pessoas.');
        return;
    }

    // Média: 11 litros por escovação economizados * 3 vezes ao dia * 365 dias no ano
    const economiaPorPessoaAno = 11 * 3 * 365;
    const economiaTotal = numPessoas * economiaPorPessoaAno;

    // Atualiza o texto com o valor formatado (ex: 12.000)
    spanLitros.textContent = economiaTotal.toLocaleString('pt-BR');

    // Mostra o resultado removendo a classe 'hidden'
    divResultado.classList.remove('hidden');
}

// Adicionando o evento de clique ao botão
btnCalcular.addEventListener('click', calcularEconomia);
