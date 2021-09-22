//Questao - 1

function deMaiorOuDeMenor(idade) {
    if (idade >= 18) {
        console.log("Que legal! Você já pode ter a carteira de habilitação.")
    } else {
        console.log("Poxa, que pena! Você ainda não pode ter a carteira de habilitação")
    }
}
deMaiorOuDeMenor(19)

//Questao - 2

function escolaridade(ensino) {

    console.log("Já concluiu o ensino médio?")
    switch (ensino) {
        case 'sim':
            console.log("Poxa, que legal!")
            break;

        case 'não':
            console.log("Falta pouco! Logo você termina.")
            break

        default:
            console.log("Resposta inválida.")
            break;
    }
}
escolaridade('sim')