// function echo(objeto: any){
//     return objeto
// }

// console.log(echo('Joao'))
// console.log(echo(27))
// console.log(echo({ nome: 'Joao', idade: 27 }))

function echo<T>(objeto: T): T { //isso que colocamos entre <> é o tipo generico, que ele define quando chamamos a função passando o parametro, aí ele define que é do tipo do parametro, ou quando especificamos como no 2° console abaixo
    return objeto
}

console.log(echo('Joao').length)
console.log(echo<number>(27))
console.log(echo({ nome: 'Joao', idade: 27 }).nome)

//Array
const avaliacoes: Array<number> = [10, 9, 8.8]
avaliacoes.push(7.5)
// avaliacoes.push('6.3')
console.log(avaliacoes)


function imprimir<T>(args: T[]) {
    args.forEach(el => console.log(el))
}

imprimir([1, 2, 3])
imprimir<string>(['1', '2', '3'])

//Tipo generico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echo
console.log(chamarEcho<string>('Alguma coisa'))


//classe
abstract class OperacaoBinaria<T, R>{
    constructor(public operando1: T, public operando2: T){}
    abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number{
        return this.operando1 + this.operando2
    }
}
console.log(new SomaBinaria(3, 5).executar())

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
class Fila<T> {
    private fila: Array<T>

    constructor(...args: T[]){
        this.fila = args
    }

    entrar(elemento: T){
        this.fila.push(elemento)
    }

    proximo(): T | null{
        if(this.fila.length > 0){
            const primeiro = this.fila[0]
            this.fila.splice(0, 1)
            return primeiro
        }
        else {
            return null
        }
    }

    imprimir(){
        console.log(this.fila)
    }
}

const fila = new Fila<string>('Ana', 'Bia', 'Carlos')
fila.entrar('Davi')
fila.imprimir()
console.log(fila.proximo())
fila.imprimir()


//Podemos passar algumas restrições pro generic, ex: <T extends string | number>


// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
class Mapa<T, R> {
    private itens: Array<{chave: T, valor: R}> = new Array<{chave: T, valor: R}>()
    
    obter(chave: T): {chave: T, valor: R} | null{
        return this.itens.filter(item => item.chave === chave)[0] || null
    }

    colocar(objeto: {chave: T, valor: R}){
        const alreadyExists = this.obter(objeto.chave)
        if(alreadyExists){
            alreadyExists.valor = objeto.valor
        } else {
            this.itens.push(objeto)
        }
    }

    limpar(){
        this.itens = new Array<{chave: T, valor: R}>()
    }

    imprimir(){
        console.log(this.itens)
    }
}

 
const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()