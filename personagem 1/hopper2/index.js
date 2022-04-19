function validaResposta(resposta) {
  var resposta = prompt("Sua Resposta (escreva em minusculo)");
  var certo = "a";
  if (resposta == certo) {
    alert("Voce acertou! Clique em OK para ir para a próxima fase");
    window.open(
      "file:///C:/Users/ester/Desktop/finalDeModulo1/personagem%201/hopper3/index.html"
    );
    window.close();
  } else {
    alert(
      "Com medo, Hopper decidiu voltar para o carro e ir para casa, mas no meio do caminho acabou atropelando um ser desconhecido e capotou o carro, morrendo."
    );
    window.open(
      "file:///C:/Users/ester/Desktop/finalDeModulo1/gameover/index.html"
    );
    window.close();
  }
}
