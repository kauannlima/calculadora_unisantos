let nota1;
let nota2;
let notaAp;
let provaInstitucional;
let notaFinalID = document.querySelector("#notafinal");
let situacaoFinalID = document.querySelector("#situacaofinal");

function calcularNotas() {
  try {
    nota1 = parseFloat(document.getElementById("nota1").value.replace(",", "."));
    nota2 = parseFloat(document.getElementById("nota2").value.replace(",", "."));
    notaAp = parseFloat(document.getElementById("nota3").value.replace(",", "."));
    if (nota1 > 3 || nota2 > 3 || notaAp > 4) {
      throw Error("Digite um valor dentro da nota máxima");
    }
    else if (nota1 < 0 || nota2 < 0 || notaAp < 0) {
      throw Error("Digite um valor dentro da nota minima");
    }
    else if (isNaN(nota1) || isNaN(nota2) || isNaN(notaAp)) {
      throw Error("Digite um valor válido.");
    }

    const somaDasAtv = nota1 + nota2 + notaAp;

    if (somaDasAtv >= 7) {
      notaFinalID.innerHTML = somaDasAtv.toFixed(2).replace(".", ",");
      situacaoFinalID.innerHTML = "Aprovado";
    } else {
      if (somaDasAtv >= 6.5 && somaDasAtv <= 6.9) {
        alert("Alunos com Nota Final 6,5 a 6,9 terão NF arredondada para 7!")
        notaFinalID.innerHTML = "7,00";
        situacaoFinalID.innerHTML = "Aprovado";
      } else {
        provaInstitucional = parseFloat(
          prompt("Digite sua nota da Prova Institucional: ").replace(",", ".")
        );

        if (provaInstitucional > 10 || isNaN(provaInstitucional)) {
          throw Error(
            "Digite um valor válido na pontuação máxima."
          );
        }

        const notaFinal = (somaDasAtv + provaInstitucional) / 2;
        notaFinalID.innerHTML = notaFinal.toFixed(2).replace(".", ",");

        if (notaFinal >= 5) {
          situacaoFinalID.innerHTML = "Aprovado";
        } else {
          situacaoFinalID.innerHTML = "Reprovado";
        }
      }
    }
  } catch (error) {
    alert(error.message);
    refazerCode();
  }
}

function refazerCode() {
  document.querySelector("#situacaofinal").innerHTML = "";
  document.querySelector("#notafinal").innerHTML = "";
}
