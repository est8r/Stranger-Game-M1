function validaResposta(resposta) {
  var resposta = prompt("Sua Resposta (escreva em minusculo)");
  var certo = "a";
  if (resposta == certo) {
    alert("Voce acertou! Clique em OK para ir para a próxima fase");
    window.open(
      "file:///C:/Users/ester/Desktop/finalDeModulo1/personagem2/eleven3/index.html"
    );
  } else {
    alert(
      "Eleven sai correndo assustada com medo de ser algum bicho, mas acaba se perdendo mais ainda em meio a mata até encontrar uma cobra venenosa que vivia na reserva do parque, que a pica"
    );
    window.open(
      "file:///C:/Users/ester/Desktop/finalDeModulo1/gameover/index.html"
    );
    window.close();
  }
}
