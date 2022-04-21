function validaResposta() {
  var certo = 10;
  var tentativas = 0;

  while (tentativas < 3) {
    var resposta = parseInt(prompt("Sua Resposta"));
    if (certo == resposta) {
      alert("Voce acertou! Clique em OK para ir para a próxima fase");
      window.location.href =
        "file:///C:/Users/ester/Desktop/finalDeModulo1/personagem%201/hopper3/index.html";
      break;
    } else {
      alert("Tente novamente.");
      tentativas++;
    }
  }
  window.location.href =
    "file:///C:/Users/ester/Desktop/finalDeModulo1/gameover/index.html";
}
