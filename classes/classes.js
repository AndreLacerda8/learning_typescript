"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(12, 4, 2003);
aniversario.dia = 13;
console.log(aniversario);
const casamento = new Data;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(12, 4, 2003);
aniversario.dia = 13;
console.log(aniversario);
const casamentoEsperto = new DataEsperta;
console.log(casamento);
//Desafio
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        const preco = this.preco * (1 - this.desconto);
        return preco.toFixed(2).replace('.', ',');
    }
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
}
const pc = new Produto('PC', 4000, 0.2);
console.log(pc.resumo());
const mouse = new Produto('Mouse', 70);
console.log(mouse.resumo());
//private, public e protected (o private não é transmitido por herança, já o protected é)
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 &&
            novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
Array(20).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.frear());
// Herança
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
// getters e setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -10;
console.log(pessoa1.idade);
//static
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * (Math.pow(raio, 2));
    }
}
Matematica.PI = 3.1416;
console.log(Matematica.PI);
console.log(Matematica.areaCirc(4));
// classe abstrata (não pode ser instanciada, mas pode ser uma classe pai)
// abstract class X {
//     abstract y(a: number): number //podemos ter esses metodos, que sabemos que existem, mas cada filho vai ter uma implementação
//     w(b: number): void{
//         console.log(b)
//     }
// }
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(1, 3, 4);
console.log(c1.getResultado());
let c2 = new Multiplicacao();
c2.executar(2, 3, 4);
console.log(c2.getResultado());
//singleton
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
console.log(Unico.getInstance().agora());
//Somente leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'Pt-ABC');
// turboHelice.modelo = 'outro'
console.log(turboHelice);
//# sourceMappingURL=classes.js.map