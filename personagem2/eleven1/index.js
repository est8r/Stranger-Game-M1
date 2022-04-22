function validaResposta(resposta) {
  var resposta = prompt("Sua Resposta").toLowerCase();
  var certo = "b";
  if (resposta == certo) {
    alert("Voce acertou! Clique em OK para ir para a próxima fase");
    window.location.href = "../eleven2/index.html";
  } else {
    alert(
      "Chateada, Eleven decide voltar pra casa e se encaminha para atravessar a rua, mas é atropela por um caminhão pois não prestou atenção no sinal aberto."
    );
    window.location.replace("../../gameover/index.html");
  }
}
