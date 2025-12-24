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
// let p = 0; // inicialização da variável

// while(p < 5) { // enquanto p for menor que 5
//     console.log(`Repetindo ${p}`); // imprima essa mensagem
//     p = p + 1; // incremente o valor de p
// }

// // loop infinito // 
// let x = 10; // inicialização da variável

// while (x > 5) { // enquanto x for maior que 5
//     console.log(`Imprimindo ${x}`); // imprima essa mensagem
// }

// 11 - do...while - // Estrutura de repetição com teste lógico no final
// let o = 10; // inicialização da variável

// do { // faça
//     console.log(`Valor de o: ${o}`); // imprima essa mensagem
//     o--; // decremente o valor de o
// } while (o > 1); // enquanto o for maior que 1



// // 12 - for - // Estrutura de repetição com contador
// for (let t = 0; t < 10; t++) { // inicialização, condição e incremento
//     console.log("Repetindo algo..."); // imprima essa mensagem
// }

// let r = 10;

// for (r; r > 0; r = r - 1) { // inicialização, condição e decremento
//     console.log(`O r está diminuindo: ${r}`); // imprima essa mensagem
// }

// 13 - Identação de código
// for (let u = 0; u < 10; u++) { // inicialização, condição e incremento
//     if (u * 2 > 10) { // se u vezes 2 for maior que 10
//         console.log(`Maior que 10! ${u}`) // imprima essa mensagem
//     } else { // caso contrário
//     if (u / 2 === 0) { // se u dividido por 2 for igual a 0
//         console.log(`Deu 0`) // imprima essa mensagem
//     }
// }
// }


// 14 - Break // Interrompendo loops para de executar o loop por meio da palavra-chave break
// for (let g = 20; g > 10; g--) { // inicialização, condição e decremento
//     console.log(`O valor de g é: ${g}`); // imprima o valor de g

//     if(g === 15) { // se g for igual a 12
//         console.log(`O g é 15!`); // imprima essa mensagem
//         break; // interrompa o loop
// }

// }


// for(let p = 30; p > 20; p--) { // inicialização, condição e decremento
//     console.log(`O valor de p é: ${p}`); // imprima o valor de p

//     if(p === 25) { // se p for igual a 25
//         console.log("O p é 25!"); // imprima essa mensagem
//         break;
//     }

// }

// 15 - Continue // Pulando iterações em loops por meio da palavra-chave continue
// for (let s= 0; s < 10; s = s + 1 ) { // inicialização, condição e incremento
//     // operador de resto = %   
//     if (s % 2 === 0) { // se s for par
//         console.log("Número par") // 'imprima essa mensagem
//         continue; // pule para a próxima iteração 

// }
// console.log(s); // imprima o valor de s
// }

// 16 - Switch  // Estrutura condicional múltipla com a palavra-chave switch
const job = "Advogado"; // variável com o valor "Advogado"

switch (job) { // variável para testar
    case "Programador": // caso seja "Programador"
        console.log("Você é um programador!");
        break; // encerra o bloco
    case "Advogado": // caso seja "Advogado"
        console.log("Você é um advogado!");
        break; // encerra o bloco
    case "Engenheiro": // caso seja "Engenheiro"
        console.log("Você é um engenheiro!");
        break; // encerra o bloco    
    default: // caso nenhuma das condições seja atendida
        console.log("Profissão não encontrada.");
} 

// Switch "errado" // sem o uso do break, maneira errada de criar o switch
let l = 100;


// Estrutura de código com switch
switch (l) {
    case 200:
        console.log("L é 200");        
    case 100:
        console.log("L é 100");        
    case 10:
        console.log("L é 10");                
    default: // caso nenhuma das condições seja atendida
        console.log("L não foi encontrado");
}


