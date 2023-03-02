


function sayMyName(name){
    console.log('Antes de executar a funcao callback')
    
    name()

    console.log('Depois de executar a funcao callback')
}

//A função a cima vem bucsar esta a meio e depois volta novamente 
sayMyName(
    () =>{
        console.log('estou em callback')
    }
)