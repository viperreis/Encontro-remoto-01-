/// === -> Verificar se o valor e o tipo do valor são iguais.
//Exemplo:
let idade = 25;
if (idade === 25){
console.log ("valor e tipo de valor corresponde")

}else{
    console.log("Fora do padrão")

}
if (idade === "25"){
console.log ("valor e tipo de valor corresponde")

}else{
    console.log("Fora do padrão")

}
// != -> comparador de diferente.
// = -> Atribuição de valor para uma variável.
var listadePecas = ["Motor", "Amortecedor", "Freio", "Cambio", "Disco de Freio", "Radiador"];

if (listadePecas.length < 10){
    console.log("É possível cadastrar mais peças")
}else{
    console.log("Não tem mais espaço na lista")

}

let peso = 50;

if (peso < 100){
    console.log ("Peca peça fora do padrão de peso")
}else{
    console.log ("Peca dentro do padrão de peso")

}

let nomePeca = "Motor";

if (nomePeca.length >3){
    console.log("nome dentro do padrão de mais de 3 caracteres")

// == -> Verificação se os valores são iguais.    
} else if (nomePeca ==0) {
    console.log ("nome da peça não pode ser vazio")
} else {
    console.log("Nome deve ter mais de 3 caracteres, digite um nome adequado")

}

switch (nomePeca.length) {
    case 0:
    console.log ("nome da peça não pode ser vazio")

        break;

    case 1:
    case 2:
    case 3:
        console.log("Nome deve ter mais de 3 caracteres, digite um nome adequado")    

        break;
        
    default:
        console.log("nome dentro do padrão de mais de 3 caracteres")
        break;
}