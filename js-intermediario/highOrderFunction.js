// const calcularAnoDeNascimento = function(idade, mesDeNascimento, imprimir){
//     const mesAtual = 7
//     let anoDeNascimento = 2026 - idade
//     if (mesDeNascimento > mesAtual) calcularAnoDeNascimento-- 
//     imprimir(anoDeNascimento)
// }

// let imprimirAnoDeNascimento = anoDeNascimento=> {
//     console.log('sua idade é ' + anoDeNascimento);
// }


// imprimirAnoDeNascimento(25, 4, imprimirAnoDeNascimento)


function multiplicar(multiplicador) {
    return function (numero) {
        return numero * multiplicador        
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(3))
