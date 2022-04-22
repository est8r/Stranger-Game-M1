function validaResposta(resposta) {
  var resposta = prompt("Sua Resposta").toLowerCase();
  var certo = "a";
  if (resposta == certo) {
    alert("Voce GANHOU!");
    window.location.href = "../hopper4/index.html";
  } else {
    alert(
      "Perdido, Hopper entra no carro e leva o bebe devolta á fazenda de seu conhecido a fim de deixar a criança por lá e passar a responsabilidade, mas ao chegar e notar que a porta do fazendeiro estava entreaberta, se depara com um grupo de criaturas extraterrestres horrendas que mataram a familia e agora o faria sua próxima vitima."
    );
    window.location.replace("../../gameover/index.html");
  }
}
