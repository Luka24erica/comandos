function sorteio() {
    var n = Math.floor(Math.random() * 10) + 1;
    var num;
    var contagem = 1;

    num = prompt("Escolha um número entre 1 a 10");
    while (num != n) {
        num = prompt("Escolha um número entre 1 e 10");
        contagem++;
    }
    document.getElementById("resultado").innerHTML = 
        "O número era " +
        n +
        ". Você acertou em " +
        contagem +
        " tentativas!!!";
}