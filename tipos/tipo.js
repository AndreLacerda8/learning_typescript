"use strict";
//string
let nome = 'Joao';
console.log(nome);
// nome = 8    isso gera erro, pois o tipo string foi inferido. Apesar do erro ele executa(por padrão), mas podemos mudar isso
//numbers
let idade = 18;
// idade = 'Andre'  gera erro
idade = 18.5;
console.log(idade);
//boolean
let possuiHobbies = false;
// possuiHobbies = 1  gera erro
console.log(possuiHobbies);
//tipos explicitos
let minhaIdade;
minhaIdade = 18;
minhaIdade = '18'; //aqui não dá erro, pois a variavel foi inicializada depois da declaração, então ele recebeu o tipo any, por padrão
console.log(minhaIdade);
let meuNome;
meuNome = 'Andre';
console.log(meuNome);
//array
let hobbies = ['Cozinhar', 'Praticar esportes'];
console.log(hobbies);
//tuplas - array com quantidade e tipos definidos
let endereco = ["Av principal", 99];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul"; //101
})(Cor || (Cor = {}));
let minhaCor = Cor.Azul;
console.log(minhaCor);
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
//funções
function retornaMeuNome() {
    return meuNome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 4));
//tipo função
let calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(3, 6));
//objetos
let usuario = {
    nome: 'Andre',
    idade: 18
};
console.log(usuario);
let functionario = {
    supervisores: ['Joao', 'Mateus'],
    baterPonto(hora) {
        return hora <= 8 ? 'Ponto normal' : 'Fora do horário';
    }
};
let functionario2 = {
    supervisores: ['Lucas', 'Marcos'],
    baterPonto(hora) {
        return hora <= 8 ? 'Ponto normal' : 'Fora do horário';
    }
};
console.log(functionario.supervisores);
console.log(functionario2.supervisores);
console.log(functionario.baterPonto(8));
console.log(functionario2.baterPonto(10));
//Union Types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
//never - quando a função vai terminar com erro ou ficar em loop 
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa de um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
// sobre null
let altura = 12;
// altura = null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '39999999999',
    tel2: null
};
let poderSerNulo = null; // declarando assim ele atribui o tipo any à variável
poderSerNulo = '12';
poderSerNulo = 2;
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipo.js.map