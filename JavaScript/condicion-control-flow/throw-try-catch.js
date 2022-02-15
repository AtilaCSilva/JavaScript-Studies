// throw
function sayMyName(name = '') {
    if (name === '') {
        throw "Nome é necessario"    
    }


    console.log(name)
}    

// try...catch
try {
   sayMyName('atila')
} catch(e) {
    console.log(e)
}