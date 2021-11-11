class Data {
    //Público por padrão
    dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(12, 4, 2003)
aniversario.dia = 13
console.log(aniversario)

const casamento = new Data
console.log(casamento)


class DataEsperta {
    constructor(
        public dia: number = 1, 
        public mes: number = 1, 
        public ano: number = 1970
    ){}
}

const aniversarioEsperto = new DataEsperta(12, 4, 2003)
aniversario.dia = 13
console.log(aniversario)

const casamentoEsperto = new DataEsperta
console.log(casamento)


//Desafio
class Produto {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0
    ){}

    precoComDesconto(): string{
        const preco = this.preco * (1 - this.desconto)
        return preco.toFixed(2).replace('.', ',')
    }

    resumo(): string{
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`
    }
}

const pc = new Produto('PC', 4000, 0.2)
console.log(pc.resumo())
const mouse = new Produto('Mouse', 70)
console.log(mouse.resumo())


//private, public e protected (o private não é transmitido por herança, já o protected é)
class Carro {
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string, 
        private velocidadeMaxima: number = 200){}
    
    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 &&
            novaVelocidade <= this.velocidadeMaxima
        
        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number{
        return this.alterarVelocidade(5)
    }

    public frear(): number{
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford', 'Ka', 185)
Array(20).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())
console.log(carro1.frear())


// Herança
class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number){
        super('Ferrari', modelo, velocidadeMaxima)
    }

    public acelerar(): number{
        return this.alterarVelocidade(20)
    }

    public frear(): number{
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())


// getters e setters
class Pessoa {
    private _idade: number = 0

    get idade(): number{
        return this._idade
    }

    set idade(valor: number){
        if(valor >= 0 && valor <= 120){
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)
pessoa1.idade = -10
console.log(pessoa1.idade)


//static
class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number{
        return Matematica.PI * (raio ** 2)
    }
}

console.log(Matematica.PI)
console.log(Matematica.areaCirc(4))


// classe abstrata (não pode ser instanciada, mas pode ser uma classe pai)
// abstract class X {
//     abstract y(a: number): number //podemos ter esses metodos, que sabemos que existem, mas cada filho vai ter uma implementação

//     w(b: number): void{
//         console.log(b)
//     }
// }
abstract class Calculo {
    protected resultado: number = 0
    
    abstract executar(...numeros: number[]): void

    getResultado(): number{
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void{
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void{
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

let c1 = new Soma()
c1.executar(1, 3, 4)
console.log(c1.getResultado())

let c2 = new Multiplicacao()
c2.executar(2, 3, 4)
console.log(c2.getResultado())


//singleton
class Unico {
    private static instance: Unico = new Unico
    private constructor(){}

    static getInstance(): Unico{
        return Unico.instance
    }

    agora(){
        return new Date
    }
}

console.log(Unico.getInstance().agora())

//Somente leitura
class Aviao {
    public readonly modelo: string

    constructor(modelo: string, public readonly prefixo: string){
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-114', 'Pt-ABC')
// turboHelice.modelo = 'outro'
console.log(turboHelice)