/* 1) Site de conteúdo adulto. Imaginar que estamos trabalhando para um site de conteúdo adulto. Quando carregamos a página no navegador, verificar a idade do usuário logado.
// Se a idade informada pelo usuário for menor que 18 anos, mostrar a mensagem "Conteúdo proibido para menores de 18 anos de idade" */

let nome = "Karina" // Considerando que foi um "imput de entrada" no teclado pelo usuário
let idade = 18

if (idade >= 18) {  
    console.log (`${nome} Parabéns seu acesso foi permitido. Você acabou de nos informar que tem ${idade} anos.`)
} else {
    console.log (nome, " não insista. Seu acesso foi negado")
}
