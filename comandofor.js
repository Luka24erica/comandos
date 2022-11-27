function contagem(entrada1) {
    var texto = "";

    var n = Number(document.getElementById(entrada1).value);
    for (i = 1; i <= n; i++) {
        texto = texto + i + "<br>";
    }

    document.getElementById("resultado").innerHTML = texto;
}