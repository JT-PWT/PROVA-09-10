//Crie uma calculadora que deve permitir apenas operações entre dois números.//
//O usuário deve fornecer uma expressão completa contendo os dois números e o operador, no formato: número1 operador número2 (por exemplo, 5 + 3 ou 10 / 2).
//A entrada deve ser fornecida pelo usuário através de um prompt (pode ser adaptado para outros ambientes de execução, como linha de comando ou interface gráfica).
//Deve existir uma função que realiza o cálculo (calcular) com base no operador digitado, que deve suportar as seguintes operações:
//+ para soma. 
//- para subtração.
//* para multiplicação.
// para divisão (com verificação para evitar divisão por zero)./
//A expressão fornecida pelo usuário deve ser analisada e dividida em três partes: o primeiro número (número1), o operador (operador) e o segundo número (número2).
//O programa deve validar se a entrada é válida, verificando: Se os valores fornecidos para número1 e número2 são números válidos.
//Se o operador é um dos operadores suportados (+, -, *, /).
//Se a entrada não for válida, deve exibir uma mensagem informando o erro e solicitar que o usuário tente novamente.
//O programa deve exibir o resultado da operação no formato número1 operador número2 = resultado (por exemplo, 5 + 3 = 8).
let numero1= parseFloat(prompt("Digite o primeiro número:"));
let operador= parseInt(prompt("Digite o operador:"));
let numero2= parseFloat(prompt("Digite o segundo número:"));

let resultado = (numero1 + operador + numero2);
console.log(resultado);


    
