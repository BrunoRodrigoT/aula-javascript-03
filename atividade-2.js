function sO(sistema_operacional){
    switch (sistema_operacional) {
        case 'linux' && 'Linux':
            console.log("O Linux é um sistema operacional de código aberto.");    
            break;

        case 'windows' && 'Windows':
            console.log("O Windows é um sistema operacional da empresa Microsoft.");
            break;

        case 'macOS':
            console.log("O macOS é um sistema operacional da empresa Apple.");
            break;

        case 'Chrome OS':
            console.log("O Chrome OS é um sistema operacional da empresa Google.");
            break;

        default:
            console.log("Há a possibilidade de você estar utilizando um sistema mobile.")
            break;
    }
}
sO('Chrome OS')