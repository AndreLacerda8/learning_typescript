let canal: string = 'Gaveta'
let inscritos: number = 610234

// canal = inscritos  ativando "noEmitOnError": true ele não compila isso
console.log(canal)

function saudar(isManha: boolean): string{
    let saudacao: string
    if(isManha){
        saudacao = 'Bom dia'
    } else {
        saudacao = 'Boa vida'
    }

    return saudacao
}