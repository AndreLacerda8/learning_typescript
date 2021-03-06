"use strict";
function saudarComOla(pessoa) {
    console.log('Ola ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Anderson';
}
const pessoa = {
    nome: 'Joao',
    idade: 27,
    saudar(sobrenome) {
        console.log('Opa ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
// saudarComOla({ nome: 'Lucas', idade: 28, altura: 1.78 })
pessoa.saudar('Abreu');
//Usando em classes
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Opa ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(potencia(2, 11));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
//# sourceMappingURL=interfaces.js.map