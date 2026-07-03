// let meses = [['janeiro', 'verao'], ['fevereiro', 'verao'], ['março', 'verao']]

// console.table(meses[0])


//trabalhando com arrays
//array é um objeto, entao tem propriedades e metodos

//iteração em arrays

let carros = ['astra', 'corola', 'hilux', 'celta']



// for(i = 0; i < carros.length ; i++){
//     console.log(carros[i] + ' ');
    
// }

// carros.forEach(function(item, indice, array){
//     console.log('carro' + carros[indice])
//     console.log('carro' + item)
// });

console.log(carros);
carros.push('civic')  //adiciona item ao final do array
console.log(carros);

carros.shift() //remove o primeiro item do array
console.log(carros);

carros.unshift('doblo') //aadiciona item ao começo do array
console.log(carros);

let posicaoCelts = carros.indexOf('celta')
console.log(posicaoCelts);



