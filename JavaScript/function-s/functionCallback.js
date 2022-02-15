function sayMyName(jogo) {
    console.log('antes de executar a callback')
    jogo()
    console.log('depois de executar a callback')

}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

