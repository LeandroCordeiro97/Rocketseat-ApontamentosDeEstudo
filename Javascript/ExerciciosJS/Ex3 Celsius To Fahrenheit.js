

/*Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32*/

 
 
    //transform ('50F')
 function transformDegree(degree){
    const celsiusExists = degree.toUppperCase().includes('C')
    const fahrenheitExists = degree.toUppperCase().includes('f')
        
    //Fluxo De Erro
    
        if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }

    //Flixo ideal, F -> C
    let updateDegree = Number(degree.toUppperCase().replace("F, "));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9 
    let degreeSign ='C'
    
    //Fluxo Alternativo C ->
    
    if(celsiusExists){
    updateDegree = Number(degree.toUppperCase().replace("C, "));
    formula = celsius => celsius * 9/5 + 32
    degreeSign = "F"

    }

    return formula(updateDegree) + degreeSign
 }   

 try{
    consol.log(transformDegree('10C'))
    consol.log(transformDegree('50F'))

 }  catch(error){
    console.log(error.message)
 }