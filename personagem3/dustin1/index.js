function validaResposta(resposta) {
  var resposta = prompt("Sua Resposta (escreva em minusculo)");
  var certo = "b";
  if (resposta == certo) {
    alert("Voce acertou! Clique em OK para ir para a próxima fase");
    window.open(
      "file:///C:/Users/ester/Desktop/finalDeModulo1/personagem3/dustin2/index.html"
    );
  } else {
    alert(
      "Decidindo ignorar o que quer que fosse aquela noticia, Dustin se encaminha para a lanchonete, mas é impedido pelo valentão da escola que, enquanto o zoa, o expulsa do fliper com seus amigos"
    );
    window.open(
      "file:///C:/Users/ester/Desktop/finalDeModulo1/gameover/index.html"
    );
    window.close();
  }
}
