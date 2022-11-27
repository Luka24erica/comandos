 var data = new Date(2022, 11, 27);
 var dia = data.getDay();

 document.getElementById("resultado").innerHTML = dia_da_semana();

function dia_da_semana(dia) {
    var resposta = "";
    switch (dia) {
        case 0:
           resposta = "Domingo";
           break;
        case 1:
            resposta = "Segunda-feira";
            break;
        case 2:
            resposta = "Terça-feira";
            break;
        case 3:
            resposta = "Quarta-feira";
            break;
        case 4:
            resposta = "Quinta-feira";
            break;
        case 5:
            resposta = "Sexta-feira";
            break;
        case 6:
            resposta = "Sabado";
            break;
    }
}