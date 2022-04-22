function validaResposta() {
  var certo = 10;
  var tentativas = 0;

  while (tentativas < 3) {
    var resposta = parseInt(prompt("Sua Resposta"));
    if (certo == resposta) {
      alert("Voce acertou! Clique em OK para ir para a próxima fase");
      window.open("../hopper3/index.html");
      window.close();
    } else {
      alert("Tente novamente.");
      tentativas++;
    }
  }
  window.location.replace("../../gameover/index.html");
}
