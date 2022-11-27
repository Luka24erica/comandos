function tabuada(){
    var texto = "";
    var i, j;

    for (i = 1; i <= 10; i++) {
        texto = texto + "-------------<br>";
        texto = texto + "Tabuada de " + i + "<br>";
        texto = texto + "-------------<br>";
        for (j = 1; j <= 10; j++) {
            texto = texto + (i + " x ") + (j + " = ") + i * j + "<br>";
        }
        texto = texto + "-------------<br>";
    }

    document.getElementById("resultado").innerHTML = texto;
}