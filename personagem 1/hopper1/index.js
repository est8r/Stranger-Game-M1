function validaResposta(resposta) {
  var resposta = prompt("Sua Resposta").toLowerCase();
  var certo = "b";
  if (resposta == certo) {
    alert("Voce acertou! Clique em OK para ir para a próxima fase");
    window.location.href = "../hopper2/index.html";
  } else {
    alert(
      "Com medo, Hopper decidiu voltar para o carro e ir para casa, mas no meio do caminho acabou atropelando um ser desconhecido e capotou o carro."
    );
    window.location.replace("../../gameover/index.html");
  }
}
