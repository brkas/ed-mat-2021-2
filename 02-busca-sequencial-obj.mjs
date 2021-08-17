/*
    Quando um algoritmo de busca precisa atuar sobre um vetor
    de objetos, a comparação não deve ser feita dentro da função
    que implementa o algoritmo. Em vez disso, recebemos uma outra
    função (externa) como parâmetro que resolverá a comparação.

    Essa função externa será chamada passando o objeto atual do vetor
    e esperará um retorno true, caso a função externa determine que 
    o objeto atual contém o valor de busca, ou false, caso contrário.
*/

function buscaSequencial(vetor, fnComp) {
    // Percurso do vetor com for tradicional
    for(let i = 0; i < vetor.length; i++) {
       // A comparação será feita pela função externa fnComp()
       if(fnComp(vetor[i])) return i
    }
    return -1 // valorBusca não existe em vetor
}

function comparaNome(obj) {
    return obj.first_name === 'FAUSTO'
}

import { objNomes } from './data/vetor-obj-nomes.mjs'

console.time('Buscando FAUSTO...')
console.log('Posição de FAUSTO:', buscaSequencial(objNomes, comparaNome))
console.timeEnd('Buscando FAUSTO...')

console.log('----------------------------------------------------------------------')

console.time('Buscando MOACIR...')
console.log('Posição de MOACIR:', buscaSequencial(objNomes, function(obj) {
    return obj.first_name === 'MOACIR'
}))
console.timeEnd('Buscando MOACIR...')

console.log('----------------------------------------------------------------------')

console.time('Buscando GERCINA...')
console.log('Posição de GERCINA:', buscaSequencial(objNomes, obj => obj.first_name === 'GERCINA'))
console.timeEnd('Buscando GERCINA...')

console.log('----------------------------------------------------------------------')

console.time('Buscando frequency_total 14909...')
console.log('Posição frequency_total 14909:', buscaSequencial(objNomes, obj => obj.frequency_total === 14909))
console.timeEnd('Buscando frequency_total 14909...')

