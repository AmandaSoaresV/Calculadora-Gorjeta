
document.addEventListener('DOMContentLoaded', function () {
    const calcularGorjeta = () => {
      let valorContaInput = document.getElementById('valorConta');
      let qualidadeServicoSelect = document.getElementById('qualidadeServico');
      let valorGorjetaInput = document.getElementById('tipoConta');
      let valorTotalInput = document.getElementById('valorTotal');
      let valorConta = parseFloat(valorContaInput.value);
      let qualidadeServico = parseFloat(qualidadeServicoSelect.value);

     
  
      if (isNaN(valorConta) || isNaN(qualidadeServico)) {
        alert('Pro favor, preencha todos os campos!');
        return;
      }
  
      const gorjeta = valorConta * qualidadeServico;
      const valorTotal = valorConta + gorjeta;
  
      valorGorjetaInput.value = gorjeta.toFixed(2);
      valorTotalInput.value = valorTotal.toFixed(2);
        };
  
    const calcularGorjetaButton = document.querySelector('button');
    calcularGorjetaButton.addEventListener('click', calcularGorjeta);
    });