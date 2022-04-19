function validaResposta(resposta) {
  var resposta = prompt("Sua Resposta (escreva em minusculo)");
  var certo = "a";
  if (resposta == certo) {
    alert("Voce acertou! Clique em OK para ir para a próxima fase");
    window.open(
      "file:///C:/Users/ester/Desktop/finalDeModulo1/personagem3/dustin3/index.html"
    );
  } else {
    alert(
      "Escolheu não ir atrás do suposto, era arriscado, mas seus amigos não entenderam da mesma forma e começaram a fazer brincadeiras atraindo a atenção do valentão que estava conversando jogado na última cadeira da lanchonete."
    );
    window.open(
      "file:///C:/Users/ester/Desktop/finalDeModulo1/gameover/index.html"
    );
    window.close();
  }
}
