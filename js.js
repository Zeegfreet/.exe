const inputLeds = document.querySelector("input[name='ledsQuantity']")


inputLeds.addEventListener('change', onChangeQuantiti)


function onChangeQuantiti(event){
    const value = Number(event.target.value)
    const resultMultiplicado = value * 1.7
    const resultDividido = value / 2
    const resultMultiplicado50 = value * 0.5
    const resultMultiplicado30 = value * 0.3

    changeComponents({resultMultiplicado, resultDividido, resultMultiplicado50, resultMultiplicado30})
}

function changeComponents(values){
    Object.keys(values).forEach((key) => {
        const obj = document.getElementById(key)
        if (obj) {
            obj.innerHTML = Number(values[key].toFixed(2))
                .toLocaleString('pt-BR', { minimumFractionDigits: 2 })
        } 
    })
}