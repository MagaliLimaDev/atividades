
function dados(idade, dirigir){
    //var informeIdade = prompt ("Digite sua idade");
    if(idade >= dirigir){
        document.write(`Você pode dirigir`);
    }else {
        document.write(`Você não pode dirigir`);
    
    }
    
}

var informeIdade = prompt ("Digite sua idade");
var informeIdadepermitida = prompt ("Digite permitida para dirigir");

dados(informeIdade, informeIdadepermitida)