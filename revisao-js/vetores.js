let frutas = ['laranja', 'maçâ', 'banana', 'melancia']

// push(): inserção no final do vetor
frutas.push('morango')

console.log(frutas)

// unshift(): inserção no início do vetor
frutas.unshift('maracujá')
console.log(frutas)

// splice(): inserção em posição intermediária
// Parâmetros:
// 1°: a posição para inserçãp
// 2°: quantos elementos serão apagados? (na inserção, informamos 0)
// 3°: o novo elemento a ser inserido
frutas.splice(3, 0, 'mamão')
console.log(frutas)

// pop(): retira o último elemento do vetor
let ultimo = frutas.pop()
console.log(ultimo, frutas)

// shift(): retira o primeiro elemento do vetor
let primeiro = frutas.shift()
console.log(primeiro, frutas)

// splice(): retira um elemento de qualquer posição
// Parâmetros:
// 1°: a posição do elemento a ser removido
// 2°: quantos elementos serão removidos (na remoção, deve ser pelo menos 1)
// splice() SEMPRE retornará um vetor, mesmo que vazio, na remoção
let intermed = frutas.splice(3, 1)
console.log(intermed, frutas)

// Os métodos de inserção (push(), unshift() e splice()) são capazes
// de inserir vários elementos de uma única vez
frutas.push('jabuticaba', 'abacaxi', 'amora', 'abacate')
console.log(frutas)

console.log('-------------------------------------------------------------------')

// Percurso (1): for tradicional
for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

console.log('-------------------------------------------------------------------')

// Percurso (2): for tradicional em ordem inversa
for(let i = frutas.length - 1; i >= 0; i--) {
    console.log(frutas[i])
}

console.log('-------------------------------------------------------------------')

// Percurso (3): for..of
for(let f of frutas) {
    console.log(f)
}
