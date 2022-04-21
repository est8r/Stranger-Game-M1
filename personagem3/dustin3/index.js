function validaResposta(resposta) {
  var resposta = prompt("Sua Resposta").toLowerCase();
  var certo = "a";
  if (resposta == certo) {
    alert("Voce GANHOU!");
    window.location.href =
      "file:///C:/Users/ester/Desktop/finalDeModulo1/personagem3/dustin4/index.html";
  } else {
    alert(
      "Desistindo de jogar, Dustin foi pra casa cabisbaixo se sentindo desanimado com qualquer coisa que pudesse pensar em jogar. Desde então ele nunca mais pode voltar para o fliperama e nem conseguir jogar com seus amigos"
    );
    window.location.href =
      "file:///C:/Users/ester/Desktop/finalDeModulo1/gameover/index.html";
  }
}
