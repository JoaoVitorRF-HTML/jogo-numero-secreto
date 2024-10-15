function verificaSeOChutePossuiUmValorValido (chute) {
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += <div>'Valor inválido'</div>
        return
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML +=`
        <div>Valor inválido: Fale um número 
        entre ${menor-valor} e ${maiorValor}</div>
        `
        return
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Muito bem, você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-angle-down">
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-angle-up">
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor ||numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})