//Throw

function sayMyName(name = ''){
    //throw new Error ("Nome é necessário")
    throw 'Nome é obrigatório'
}

    console-log('depois do erro')


    //try..catch
    try {
        sayMyName()
    } catch (e) {
        console.log(e)
    }
    