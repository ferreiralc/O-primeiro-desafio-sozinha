//esse o GPT que fez, só copiei pra eu me lembrar que meu código não roda no VS Code pq precisa ser com o Node.

const readline = require('readline');

// Cria uma interface para leitura de entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta ao usuário um número
rl.question('Insira um número qualquer: ', (input) => {
    // Converte a entrada para um número inteiro
    const a = parseInt(input);
    
    // Calcula o antecessor e o sucessor
    const b = a + 1;
    const c = a - 1;

    // Imprime o resultado
    console.log(`O antecessor de ${a} é ${c} e o sucessor de ${a} é ${b}`);

    // Fecha a interface
    rl.close();
});
