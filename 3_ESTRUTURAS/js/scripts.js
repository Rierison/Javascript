// // 1 - Variáveis
// let nome = "Rierison";

// console.log(nome);

// nome = "Rierison Pinheiro";

// console.log(nome);

// const idade = 31;

// console.log(idade);

// console.log(typeof nome);

// console.log(typeof idade);  

// // 2 - Mais sobre Variáveis
// let a = 10,
// b = 20,
// c = 30;

// console.log(a, b, c);

// const nomecompleto = "Rierison Pinheiro Matos";

// const nomeCompleto = "Rierison Pinheiro Matos";

// console.log(nomecompleto);

// console.log(nomeCompleto);  

// // Simbolos permitidos para criação de variáveis
// let $teste = "ok"; // cifrão

// let _teste = "ok"; // underline

// console.log($teste, _teste);

// prompt
// const age = prompt("Digite a sua idade?");

// console.log(`Você tem ${age} anos`);

// 4 - alert
// alert("Testando");

// const z = 10;

// alert(`O número é ${z}`);



// 5 - Math // Biblioteca de funções para fins matemáticos
// console.log(Math.max(5, 2, 1, 10)); // maior número

// console.log(Math.floor(5.14)); // arredondamento de números

// console.log(Math.ceil(5.14)); // arredondamento para cima

// console.log(Math.round(5.5)); // arredondamento para o mais próximo


// 6 - Console
// console.log("Teste!"); // Mensagem de log

// console.error("Erro!"); // Mensagem de erro

// console.warn("Aviso!"); // Mensagem de aviso



// 7 - if  - // Estrutura condicional
// const m = 10;

// if (m > 5) {
//     console.log("M é maior que 5");
// }

// const user = "João";

// if(user === "João") {
//     console.log("Olá, João!");

// }

// if(user === "Maria") {
//     console.log("Olá, Maria!");
// }

// console.log(user === "João", user === "Maria"); // true

// 8 - else  - // Estrutura condicional alternativa
// const loggedIn = false; // variável booleana

// if (loggedIn) { // se estiver autenticado
//     console.log("Está autenticado!"); // Imprima está mensagem
// } else { // caso contrário
//     console.log("Não está autenticado!"); // Imprima está outra mensagem
// }

// const q = 10;
// const w = 15;

// if (q > 5 && w > 20) { // se q for maior que 5 e w for maior que 10
//     console.log("Números mais altos"); // Imprima essa mensagem
// } else { // caso contrário
//     console.log("Os números não são mais altos"); // Imprima essa outra mensagem
// }

// 9 - else if  - // Estrutura condicional com múltiplas alternativas
// if (1 > 2) { // condição 1
//     console.log("Teste"); // ação 1
// } else if(2 > 3) { // condição 2
//     console.log("Teste 2"); // ação 2
// } else if (5 > 1) { // condição 3
//     console.log("Agora sim!"); // ação 3
// }

// const userName = "Maria";
// const userAge = 25;

// if (userName === "José") { // condição 1
//     console.log("Bem vindo José!"); // ação 1
// } else if (userName === "Maria" && userAge === 25) { // 
//     console.log("Olá Maria, você tem 25 anos!"); // ação 2
// } else { // caso nenhuma condição seja atendida
//     console.log("Nenbuma condição aceita"); // ação padrão
// }


// 10 - while - // Estrutura de repetição com teste lógico no início
let p = 0;

while(p < 5) { // enquanto p for menor que 5
    console.log(`Repetindo ${p}`); // imprima essa mensagem
}