const btnCalcular = document.getElementById('calcular');

function calcularPoupanca() {
  const nome = document.getElementById('nome').value;
  const aplicacao = document.getElementById('aplicacao').value;
  const juros = document.getElementById('juros').value;
  const parcelas = document.getElementById('parcelas').value;
  const result = document.getElementById('resultado');
  const resultName = document.getElementById('resultName');
  const resultText = document.getElementById('resultText');

  if (
    nome !== '' &&
    aplicacao !== '' &&
    juros !== '' &&
    parcelas !== ''
  ) {
    const Poupado = (
      aplicacao *
      (((1 + juros / 100) ** parcelas - 1) / (juros / 100))
    ).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    resultadoName.textContent = `${nome},`;
    resultadoText.textContent = `Se você aplicar R$ ${aplicacao}
    , à taxa de juros de ${juros}% ao mês, durante ${parcelas} meses, acumulará uma poupança de R$ ${Poupado}`;
  } else {
    resultado.textContent =
      'Por favor, preencha todos os campos.';

    resultadoName.textContent = '';
    resultadoText.textContent = '';
  }
}

btnCalcular.addEventListener('click', calcularPoupanca);