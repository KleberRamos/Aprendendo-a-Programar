
/* Par ou Impar 
Criação de código para receber um numero (imput do teclado - usuário). Se determindo número recebido for "par" retornar com a mensagem "O numero "X" é par", ou se for impar, retornar a mensagem "O numero "X" é impar".*/

//Dado um numero:
let  numero = 4

// Operador "% - Resto da divisão"
// Faz o resto da divisão por 2. Se o resto for 0 é par. Se não for "0" é impar

if (numero % 2 == 0) {
    console.log (`${numero} é par`)
} else {    
    console.log(`${numero} é impar`)
}
// Resultado par ou ímpar
