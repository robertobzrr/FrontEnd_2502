let alturas = [];
let generos = [];

for (let i = 0; i < 15; i++) {
    let altura = parseFloat(prompt(`Digite a altura da pessoa ${i + 1}: `));
    let genero = prompt(`Digite o gênero da pessoa ${i + 1} (m/f): `).trim().toLowerCase();
    alturas.push(altura);
    generos.push(genero);
}

let maiorAltura = Math.max(...alturas);
let menorAltura = Math.min(...alturas);

let alturasM = alturas.filter((altura, index) => generos[index] === "masculino");
let mediaAlturaMasculino = alturasM.length > 0 ? alturasM.reduce((a, b) => a + b, 0) / alturasM.length : 0;

let numeroFeminino = generos.filter(genero => genero === "feminino").length;

console.log(`A maior altura do grupo é: ${maiorAltura}`);
console.log(`A menor altura do grupo é: ${menorAltura}`);
console.log(`A média de altura das pessoas do gênero Masculino é: ${mediaAlturaMasculino}`);
console.log(`O número de pessoas do gênero Feminino é: ${numeroFeminino}`);
