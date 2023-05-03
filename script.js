let nota1;
let nota2;
let nota3;
let provaInstitucional;
let notaFinalID = document.querySelector("#notafinal");
let situacaoFinalID = document.querySelector("#situacaofinal");

function calcularNotas() {
  nota1 = parseFloat(document.getElementById("nota1").value.replace(",", "."));
  nota2 = parseFloat(document.getElementById("nota2").value.replace(",", "."));
  nota3 = parseFloat(document.getElementById("nota3").value.replace(",", "."));

  const somaAtividades = nota1 + nota2 + nota3;

  if (
    (nota1 > 3 && nota2 > 3) ||
    (nota1 > 3 && nota3 > 4) ||
    (nota3 > 4 && nota2 > 3)
  ) {
    alert("Digite uma nota válida para as Atividades Avaliativas");
    limpar();
  } else if (
    (isNaN(nota1) && isNaN(nota2)) ||
    (isNaN(nota1) && isNaN(nota3)) ||
    (isNaN(nota3) && isNaN(nota2))
  ) {
    alert("Digite uma nota válida para as Atividades Avaliativas");
    limpar();
  } else if (nota1 > 3 || isNaN(nota1) || nota1 < 0) {
    alert("Digite uma nota válida para a Atividade Avaliativa 1");
    document.getElementById("nota1").value = "";
  } else if (nota2 > 3 || isNaN(nota2) || nota2 < 0) {
    alert("Digite uma nota válida para a Atividade Avaliativa 2");
    document.getElementById("nota2").value = "";
  } else if (nota3 > 4 || isNaN(nota3) || nota3 < 0) {
    alert("Digite uma nota válida para a Atividade Avaliativa 3");
    document.getElementById("nota3").value = "";
  } else if (somaAtividades >= 7) {
    notaFinalID.innerHTML = somaAtividades.toFixed(2);
    situacaoFinalID.innerHTML = "Aprovado";
  } else if (somaAtividades >= 6.5 && somaAtividades <= 6.9) {
    alert(
      "Alunos com a Soma das Atividades entre 6,5 e 6,9 terão sua NF arredondada para 7"
    );
  } else if (somaAtividades < 3) {
    notaFinalID.innerHTML = somaAtividades.toFixed(2);
    situacaoFinalID.innerHTML = "Reprovado";
  } else {
    provaInstitucional = parseFloat(
      prompt("Digite sua nota da Prova Institucional").replace(",", ".")
    );
    while (
      provaInstitucional > 10 ||
      isNaN(provaInstitucional) ||
      provaInstitucional == ""
    ) {
      alert("Digite uma nota válida para a Prova Institucional");
      provaInstitucional = parseFloat(
        prompt("Digite sua nota da Prova Institucional").replace(",", ".")
      );
    }
    provaInstitucional += somaAtividades;
    provaInstitucional /= 2;
    if (provaInstitucional > 5) {
      notaFinalID.innerHTML = provaInstitucional.toFixed(2);
      situacaoFinalID.innerHTML = "Aprovado";
    } else {
      notaFinalID.innerHTML = provaInstitucional.toFixed(2);
      situacaoFinalID.innerHTML = "Reprovado";
    }
  }
}

function limpar() {
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
  notaFinalID.innerHTML = "";
  situacaoFinalID.innerHTML = "";
}

const clearAll = document.getElementById("limpar");
clearAll.addEventListener("click", () => {
  limpar();
});

const calc = document.getElementById("calcular");
calc.addEventListener("click", () => {
  calcularNotas();
});
