function Calcular(){
    var nota1 = Number(document.getElementById('nota1').value);
    var nota2 = Number(document.getElementById('nota2').value);
    var nota3 = Number(document.getElementById('nota3').value);
    var nota4 = Number(document.getElementById('nota4').value);
    
    var notaFinal = (nota1 + nota2 + nota3 + nota4) / 4
    var notaFixada = notaFinal.toFixed(2)
    var condicao = "";  
    if (notaFixada >= 7) {
      condicao = "aprovado";
    } else {
      condicao = "reprovado";
  }
  
   resultado.innerHTML = `Você está ${condicao} com nota ${notaFixada}`;
  }