interface Humano {
    nome: string
    idade?: number
    [prop: string]: any //dessa forma podemos ter um atributo que não sabemos o nome
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano){
    console.log('Ola ' + pessoa.nome)
}

function mudarNome(pessoa: Humano){
    pessoa.nome = 'Anderson'
}

const pessoa: Humano = {
    nome: 'Joao',
    idade: 27,
    saudar(sobrenome: string){
        console.log('Opa ' + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
// saudarComOla({ nome: 'Lucas', idade: 28, altura: 1.78 })
pessoa.saudar('Abreu')


//Usando em classes
class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string){
        console.log('Opa ' + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)


//interface função
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo = function(base: number, exp: number): number{
    return base ** exp
}
console.log(potencia(2, 11))


//Herança
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B{
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

//curiosidade
interface Object {
    log(): void
}

Object.prototype.log = function(){
    console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

x.log()
y.log()
z.log()