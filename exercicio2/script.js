/*let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}*/

const país = prompt("Nacionalidade").toLowerCase()

switch(país){
    case "brasileira":
        console.log("brasileiro(a)")
        break
    case "argentina":
        console.log("argentino(a)")
        break
    case "uruguaia":
        console.log("uruguaio(a)")
        break
    case "chilena":
        console.log("chileno(a)")
        break
    case "colombiana":
        console.log("colombiano(a)")
        break
    default:
        console.log("Nacionalidade não encontrada") 
}