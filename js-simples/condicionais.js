//se condição atendida segue a execução que vem logo em seguida
//pode ser usado mais de um if seguidamente, else é para qualquer outra condição não especificada antes
const estado = 'espirito santo'


if(estado === 'bahia'){
    console.log(`Definitivamente a preguiça domina a ${estado}`);
    
}else if(estado === 'rio de janeiro'){
    console.log(`esse ${estado} só tem bandido`);
    
}else{
    console.log(`O ${estado} é um lugar tranquilo`);
  
}

//operador ternário

//true ? console.log('verdade') : console.log('condição falsa');
estado === 'bahia' ? console.log('preguiça') : console.log('não preguiça');


let nome = `cv
r`