//código a ser reescrito
/*
if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
} */

const nome = prompt("Quem chama?")
nome === "José" ? console.log("Oi, Zé!") : console.log("Olá, "+nome+"!")

const idade = prompt("Idade, por favor:")
idade >= 18 ? console.log("Pode tirar carteira de motorista.") : console.log("Não pode ter habilitação.")