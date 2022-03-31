{
  {
    function simples(x, y) {
      if (metodo == "somar") {
        var restultado = x + y;
        return console.log("A soma dos números é igual a", restultado);
      } else if (metodo == "subtrair") {
        var restultado = x - y;
        return console.log("A subtração dos números é igual a", restultado);
      } else if (metodo == "dividir") {
        var restultado = x / y;
        return console.log("A divisão dos números é igual a", restultado);
      } else if (metodo == "multiplicar") {
        var restultado = x * y;
        return console.log("A multiplicação dos números é igual a", restultado);
      }
    }
    {
      function porcento(porcentos, total) {
        var porcentos = Number(prompt("Calcular porcentagem: Ex.: 3"));
        var total = Number(prompt("De : Ex.: 100 "));
        var porcentagem = porcentos / 100;
        var resultado = porcentagem * total;
        return console.log(porcentos + "porcento de" + total + "é" + resultado);
      }
    }
    {
      function media_aritmetica() {
        var parar = "nao";
        var cont = 0;
        var valores = [];
        var soma = 0;
        var resultado = 0;
        while (parar != "sim") {
          cont++;
          valores.push(
            Number(
              (parar = prompt(
                "Digite o " + cont + "Nº. Para parar digite 'sim'"
              ))
            )
          );
        }
        for (x = 0; x < valores.length - 1; x++) {
          soma += valores[x];
          resultado = soma / (valores.length - 1);
        }
        console.log(resultado);
      }
    }
    {
      function media_ponderada() {
        var valores = [];
        var peso = [];
        var notas_finais = 0;
        var resultado = 0;
        var soma_pesos = 0;
        var notas = Number(
          prompt("Informe quantas notas você irá utilizar: (maximo 4)")
        );
        for (x = 0; x < notas; x++) {
          valores.push(
            Number(prompt("Digite o valor da" + (x + 1) + "nota: "))
          );
          peso.push(
            Number(
              prompt(
                "Digite o peso da" +
                  (x + 1) +
                  " nota: Ps(a soma dos 3 números deve ser exatamente 10)"
              )
            )
          );
          notas_finais += valores[x] * peso[x];
          soma_pesos += peso[x];
          resultado = notas_finais / 10;
        }
        if (soma_pesos > 10) {
          console.log(
            "Você digitou o valor de pesos de forma incorreta. redigite novamente, o valor deve ser exatamente 10."
          );
        } else {
          console.log(resultado);
        }
      }
    }
  }
}
var metodo = "iniciar";
while (metodo != "parar") {
  metodo = prompt(
    "Digite o método a ser utilizado( somar, subtrair, dividir, multiplicar, porcentagem, media aritmetica ou media ponderada. PARA ENCERRAR DIGITE parar"
  );
  if (metodo == "media ponderada") {
    media_ponderada();
  } else if (metodo == "media aritmetica") {
    media_aritmetica();
  } else if (metodo == "porcentagem") {
    porcento();
  } else if (metodo == "somar" || "subtrair" || "dividir" || "multiplicar") {
    var x = Number(prompt("Digite o primeiro número: "));
    var y = Number(prompt("Digite o segundo número: "));
    // excessões de erro
    if (metodo == "dividir" && y == 0) {
      console.log(
        "Ocorreu algum erro, verifique se o divisor é 0 ou indefinido e digite novamente."
      );
    } else if (x === 0 || y === 0) {
      console.log(
        "Algum valor não foi digitado corretamente ou é um valor neutro(0)."
      );
    } else {
      simples(x, y);
    }
    // decisão de metodo
  }
}
