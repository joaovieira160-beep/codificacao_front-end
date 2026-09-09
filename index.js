const prompt = require('prompt-sync')();

let notas =[
n1 = Number(prompt("qual sua primeira nota?:")),
n2 = Number(prompt("qual sua segunda nota?:")),
n3 = Number(prompt("qual sua terceira nota?:")),
]
 
let resultado = 0

for (let i = 0; i < notas.length ; i++){
    resultado += notas[i];
}

let media = resultado / notas.length

console.log(`sua media do semestre é: ${media.toFixed(1)}`)
