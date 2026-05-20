var x = 5;

console.log(x);

//window.alert('Ola mundo!')

var nome = window.prompt('Digite seu nome')

//document.writeln('O nome digitado foi '+ nome)

document.getElementById('title').innerHTML = `Voce digitou: ${nome} e lindo`

var issoeumastring = "Isso é uma string";

console.log(issoeumastring);
let tambemeumastring = "25";
let eUmNumero = 25;

console.log(tambemeumastring);
console.log(eUmNumero);

if (tambemeumastring === eUmNumero) {
    console.log("Isso é verdade");
} else {
    console.log("Isso é falso");
}

let idade = 0; 
//prompt("Digite sua idade: ");

if (idade <= 15) {
    console.log("Você é uma crianca");
} else if (idade > 14 && idade < 21) {
    console.log("Você é um adolescente");
} else if (idade >= 21 && idade < 65) {
    console.log("Você é um adulto");
} else {
    console.log("Você é um idoso"); 
}

let numero = 0
while (numero < 10) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
    numero++;
}

for (let i = 0; i < 10; i++) {
    i % 2 !== 0 ? console.log(i):0;
}

for( let i=1; i < 10; i+=2) {
    console.log(i)
}

for (let i=0; i<6; i++)
{
    console.log(i*2)
}

let floatvalor = 0.06

floatvalor = floatvalor + 0.01

console.log(floatvalor)

let evetor = [0, 2, 4,6,8, 'nove']

console.log(evetor)