var issoeumastring = 'Isso e uma string';
let issoeumnumero = 4;
let issotambemumnumero =5; 
const issoeumbooleano = true;
let issotambemeumastring = '4'; 

console.log(issoeumnumero == issoeumastring);
console.log(issoeumnumero == issotambemeumastring);
console.log(issoeumnumero === issotambemeumastring);
console.log(issoeumnumero === issotambemumnumero);  
console.log(typeof issoeumastring == typeof issoeumnumero);
console.log(typeof issoeumnumero);
console.log(typeof issotambemeumastring);
console.log(typeof issotambemumnumero);

console.log(issoeumnumero + issotambemeumastring);

let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2;
console.log(sum.toPrecision(2)); // Isso pode resultar em 0.07000000000000001 devido à precisão dos números de ponto flutuante


//numeros pares de 0 ate 10
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 0; i <= 10; i += 2) {
        
        console.log(i);
}                           

// gerando os numeros impares de 0 ate 10
let j = 0;
while (j <= 10) {
    if (j % 2 !== 0) {
        console.log(j);
    }  
    j++;
}
j=1;
while (j <= 10) {
    {
        console.log(j);
    }
    j+=2;
}
console.log(j)

var elaglobal = "Eu sou uma variável global";
{
    let issoeumalocal = "Eu sou uma variável local";
    console.log(elaglobal);
    console.log(issoeumalocal);
}

console.log(issoeumalocal)