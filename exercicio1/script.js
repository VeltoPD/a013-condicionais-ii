
const num = +prompt("Digite um número: ")

if (num % 2 == 0) {
    if (num % 3 == 0) {
        console.log("Divisível tanto por 2 quanto por 3")
    } else {
        console.log("Divisível só por 2")
    }
} else {
    if (num % 3 == 0) {
        console.log("Divisível apenas por 3")
    } else {
        console.log("Não é divisível por 2 e nem por 3")
    }
}





if (num % 2 == 0 && num % num == 0) {
    if (num % 2 == 0 && num % 3 == 0) {
        console.log("Divisível por 2 e 3")
    } else {
        console.log("Divisível por 2")
    }
} else {
    if (num % 3 == 0) {
        console.log("Divisível por 3")
    } else {
        console.log("Não é divisível por 2 e nem por 3")
    }
}