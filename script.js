class parquimetro {
  constructor(valor = 0, tempo = 0, troco = 0) {
    this.valor = valor;
    this.tempo = tempo;
    this.troco = troco;
  }

  validarValor(valorPago) {
    if (isNaN(valorPago) || valorPago <= 0) {
      alert("Digite um valor valido maior que zero");
      this.limparResultados();
      return false;
    }

    if (valorPago < 1) {
      alert("Valor invalido! Voce precisa de mais R$ " + (1 - valorPago).toFixed(2) + " para o minimo");
      this.limparResultados();
      return false;
    }

    return true;
  }

  limparResultados() {
    document.getElementById("resultadoTempo").textContent = " ";
    document.getElementById("resultadoTroco").textContent = " ";
  }

  calcularTempo(valorPago) {
    this.troco = 0;

    if (valorPago >= 1 && valorPago < 1.75) {
      this.tempo = 30;
      this.troco = valorPago - 1;
    } else if (valorPago >= 1.75 && valorPago < 3) {
      this.tempo = 60;
      this.troco = valorPago - 1.75;
    } else if (valorPago >= 3) {
      this.tempo = 120;
    }

    if (valorPago > 3) {
      this.troco = valorPago - 3;
    }
  }

  mostrarResultados() {
    document.getElementById("resultadoTempo").textContent = "Voce tem " + Math.floor(this.tempo) + " minutos.";

    if (this.troco > 0) {
      document.getElementById("resultadoTroco").textContent = "Seu troco é R$ " + this.troco.toFixed(2);
    } else {
      document.getElementById("resultadoTroco").textContent = "";
    }
  }

  processar(valorPago) {
    this.tempo = 0;
    this.troco = 0;

    if (!this.validarValor(valorPago)) {
      return;
    }

    this.calcularTempo(valorPago);

    this.mostrarResultados();
  }
}

const meuParquimetro = new parquimetro();

const botao = document.getElementById("calcularBtn");

botao.addEventListener("click", function () {
  let valorDigitado = document.getElementById("valorPago").value;

  valorDigitado = valorDigitado.replace(",", ".");

  const valorPago = parseFloat(valorDigitado);

  meuParquimetro.processar(valorPago);
});
