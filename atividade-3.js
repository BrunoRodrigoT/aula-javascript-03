//Questao - 1

function calculos(x, y){

    if (x < y) {
        console.log("Olá mundo!")        
    }else if (x > y) {
        console.log("Mundo, olá!")
    }else if (x == y) {
        console.log("Adeus!")
    }
}
calculos(5, 7)

//Questao - 2

function cineminha(fruta){

    switch (fruta) {
        case 'banana':
            console.log("O Filme é Os Minions.")
            break;

        case 'laranja':
            console.log("O filme é Laranja Mecânica.")
            break;

        case 'maçã':
            console.log("O filme é Branca de neve.")
            break;

        default:
            console.log("O cinema tá fechado.")
            break;
    }
}
cineminha('maçã')

