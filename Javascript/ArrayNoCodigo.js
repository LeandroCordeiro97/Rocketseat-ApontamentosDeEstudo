const pilotos = ['Sena', 'Prost', 'Schumacher', 'Hamilton']

//A indexação (index) começa pelo numero 0
console.log(pilotos[0])//Sena
console.log(pilotos[3])//Hamilton

//Acessar o tamanho do array
console.log(pilotos.length)

//interável
for (let piloto of pilotos){
    console.log(piloto)
}

//adicionar elemento 
pilotos.push ('Alonso')
console.log(pilotos)

//encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log (senna)

//apagar um elemento 
pilotos.splice(1,1)
console.log(pilotos)