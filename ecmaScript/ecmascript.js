"use strict";
//Pra isso é bom usar es6, pro let e const ser compilado pra let e const mesmo, não pra var
// let e const
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar casaco';
    console.log(acao);
}
const cpf = '123.456.00-00';
// cpf = '190.182.292-10'
console.log(cpf);
//arrow function
const somar = (n1, n2) => n1 + n2;
console.log(somar(2, 6));
const saudacao = () => console.log('Aopa');
saudacao();
//this
// function normalComThis(){
//     console.log(this)
// }
// normalComThis()
// const normalComThisEspecial = normalComThis.bind(2)
// normalComThisEspecial()
// const arrowComThis = () => console.log(this)//esse this aqui é o this do contexto dessa função
// arrowComThis()
//Parametros padrão
function contagemRegressiva(inicio = 3) {
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim');
}
contagemRegressiva();
// Rest e Spread
const numbers = [1, 10, 8, -4];
console.log(Math.max(...numbers));
const turmaA = ['Joao', 'Maria', 'Gabriel'];
const turmaB = ['Fernando', 'Miguel', ...turmaA];
console.log(turmaB);
function retornarAray(...args) {
    return args;
}
const numeros = retornarAray(1, 2, 3, 4, 6, 7);
console.log(numeros);
//Rest e Spread (Tupla)
const tupla = [1, 'a', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
//Destructuring (array)
const caracteristicas = ['Motoz Zetec 1.8', 2020];
const [motor, ano] = caracteristicas;
console.log(motor, ano);
//Destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200
};
const { nome: n, preco } = item;
console.log(n, preco);
//Template string
const user = 'Fulano';
const notifications = 8;
console.log(`Ola ${user}, voce tem ${notifications} notificações`);
//Desafio
//1)
const dobro = (valor) => valor * 2;
console.log(dobro(10));
//2)
const dizerOla = (nome = 'Pessoa') => {
    console.log(`Ola, ${nome}`);
};
dizerOla();
dizerOla("Anna");
//3)
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
//4)
const array = [55, 20];
array.push(...nums);
console.log(array);
//5)
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
//Promises
function esperar3s() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s depois...');
        }, 3000);
    });
}
esperar3s()
    .then(dado => console.log(dado));
fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(filmes => fetch(filmes[0]))
    .then(resFilme => resFilme.json())
    .then(filme => console.log(filme.title))
    .catch(err => console.log(err));
//# sourceMappingURL=ecmascript.js.map