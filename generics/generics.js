"use strict";
// function echo(objeto: any){
//     return objeto
// }
// console.log(echo('Joao'))
// console.log(echo(27))
// console.log(echo({ nome: 'Joao', idade: 27 }))
function echo(objeto) {
    return objeto;
}
console.log(echo('Joao').length);
console.log(echo(27));
console.log(echo({ nome: 'Joao', idade: 27 }).nome);
//Array
const avaliacoes = [10, 9, 8.8];
avaliacoes.push(7.5);
// avaliacoes.push('6.3')
console.log(avaliacoes);
function imprimir(args) {
    args.forEach(el => console.log(el));
}
imprimir([1, 2, 3]);
imprimir(['1', '2', '3']);
const chamarEcho = echo;
console.log(chamarEcho('Alguma coisa'));
//classe
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 5).executar());
// class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
//     getTime(data: Data): number{
//         let { dia, mes, ano } = data
//         return new Date(`${mes}/${dia}/${ano}`).getTime()
//     }
//     executar(): string{
//         const t1 = this.getTime(this.operando1)
//         const t2 = this.getTime(this.operando2)
//         const diferenca = Math.abs(t1 - t2)
//         const dia = 1000 * 60 * 60 * 24
//         return `${Math.ceil(diferenca / dia)} dia(s)`
//     }
// }
// const d1 = new Data(1, 2, 2020)
// const d2 = new Data(5, 2, 2020)
// console.log(new DiferencaEntreDatas(d1, d2).executar())
//Desafio
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length > 0) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('Ana', 'Bia', 'Carlos');
fila.entrar('Davi');
fila.imprimir();
console.log(fila.proximo());
fila.imprimir();
//Podemos passar algumas restrições pro generic, ex: <T extends string | number>
// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    obter(chave) {
        return this.itens.filter(item => item.chave === chave)[0] || null;
    }
    colocar(objeto) {
        const alreadyExists = this.obter(objeto.chave);
        if (alreadyExists) {
            alreadyExists.valor = objeto.valor;
        }
        else {
            this.itens.push(objeto);
        }
    }
    limpar() {
        this.itens = new Array();
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=generics.js.map