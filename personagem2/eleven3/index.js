function validaResposta() {
  var certo = "a";
  var tentativas = 0;

  while (tentativas < 3) {
    var resposta = prompt("Sua Resposta (escreva em minusculo)");

    if (certo == resposta) {
      alert("Voce GANHOU!");
      window.open(
        "file:///C:/Users/ester/Desktop/finalDeModulo1/personagem2/eleven4/index.html"
      );
      break;
    } else {
      alert("tente novamente.");
      tentativas++;
    }
  }
  window.open(
    "file:///C:/Users/ester/Desktop/finalDeModulo1/gameover/index.html"
  );
  window.close();
}
