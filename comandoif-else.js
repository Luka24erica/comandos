function situacao(entrada1, entrada2, saida){
    var x = Number(document.getElementById(entrada1).value);
    var y = Number(document.getElementById(entrada2).value);
    var media = (x + y) / 2;

    document.getElementById(saida).innerHTML = 
    "O resultado é " + resultado(media);
}

function resultado(m) {
    var resultado;
    if (m >= 7){
        resultado = "Aprovado";
    } else{
        resultado = "Reprovado";
    }
    return resultado;
}