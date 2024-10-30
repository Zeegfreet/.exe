const inputLeds = document.querySelector("input[name='ledsQuantity']")
const inputPotency = document.querySelector("input[name='ledsPotency']")
const inputFontVoltage = document.querySelector("input[name='fontTension']")

const localKey = "@App:default"


inputLeds.addEventListener('change', onChangeFields)
inputPotency.addEventListener('change', onChangeFields)
inputFontVoltage.addEventListener('change', onChangeFields)

onLoadPage()

function onLoadPage(){
    const object = localStorage.getItem(localKey)
    if (object) {
        const values = JSON.parse(object)
        inputLeds.value = values['quantity']
        inputPotency.value = values['potency']
        inputFontVoltage.value = values['fontVoltage']
        changeComponents(values)
    }
};

function onChangeFields(){
    const quantity = Number(inputLeds.value)
    const potency = Number(inputPotency.value)
    const fontVoltage = Number(inputFontVoltage.value)

    onRefreshCalcs(quantity, potency, fontVoltage)
};


function onRefreshCalcs(quantity, potency, fontVoltage){
    console.log(fontVoltage)
    const totalPotency = quantity * potency
    const resultDividido = totalPotency / fontVoltage
    const resultMultiplicado50 = resultDividido * 1.5
    const resultMultiplicado30 = resultDividido * 1.3

    changeComponents({quantity, potency, fontVoltage, totalPotency, resultDividido, resultMultiplicado50, resultMultiplicado30})
};

function onSaveState(state){
    localStorage.setItem(localKey, JSON.stringify(state))
};

function changeComponents(values){
    Object.keys(values).forEach((key) => {
        const obj = document.getElementById(key)
        if (obj) {
            obj.innerHTML = Number(values[key].toFixed(2))
                .toLocaleString('pt-BR', { minimumFractionDigits: 2 })
        } 
    })
    onSaveState(values)
};