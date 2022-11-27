function sorteio() {
    var n = Math.floor(Math.random() * 10) + 1;
    var num;
    var contagem = 0;

    do {
        num = prompt("Escolha um número entre 1 e 10");
        contagem++;
    } while (num != n);
    document.getElementById("resultado").innerHTML = 
        "O número era " +
        n +
        ". Você acertou em " +
        contagem +
        " tentativas!!!";
}