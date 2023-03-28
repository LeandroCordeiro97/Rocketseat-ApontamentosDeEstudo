

let techs = ["html", "css", "js"]

//Adicionar um item no fim
techs.push("nodejs")

//adicionar no começo
techs.unshift("sql")

//Remover do fim
techs.pop()

//remover do começo
techs.shift()

//Pegar somente alguns elementos do array
console.log(techs.slice(1,2))

//Remover 1 ou mais itens em qualquer posiçao
techs.splice(1,2)

//Encontrar a posiçao de um elemento no array
let index =techs.indexOf('css')



console.log(index)