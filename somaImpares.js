function somaImpares(array){
    soma = 0
  
    for(let i = 0;i < array.length;i++){
      if(array[i] % 2 !== 0){
        soma += array[i]
      }
    }
  
    return soma
  }
  
  console.log(somaImpares([2, 5, 1, 7]))