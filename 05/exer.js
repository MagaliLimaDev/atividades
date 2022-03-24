function bebedeira(idade, beber){
    

    if(idade => beber){
        document.write('Você pode beber!');
    }else{
        document.write('Você não pode beber!');
    }
}

var idade = prompt ('Qual sua idade?');
var beber = prompt ('Qual idade é permitido beber em seu país?');
bebedeira(idade, beber);