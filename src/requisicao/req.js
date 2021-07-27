const urldolar = "https://economia.awesomeapi.com.br/json/last/USD-BRL"
const urleuro = "https://economia.awesomeapi.com.br/json/last/EUR-BRL"
const urlDolarParaEuro = "https://economia.awesomeapi.com.br/json/last/USD-EUR"
const urlEuroParaDolar = "https://economia.awesomeapi.com.br/json/last/EUR-USD"

const { default: axios } = require("axios")


async function pegaDadosDolar(){
    const response = await axios.get(urldolar)
    const dados = response.data
    const resultado = dados.USDBRL.high
    return resultado
}

async function pegaDadosEuro(){
    const response = await axios.get(urleuro)
    const dados = response.data
    const resultado = dados.EURBRL.high
    return resultado
}

async function pegaDadosDolarParaEuro(){
    const response = await axios.get(urlDolarParaEuro)
    const dados = response.data
    const resultado = dados.USDEUR.high
    return resultado
}

async function pegaDadosEuroParaDolar(){
    const response = await axios.get(urlEuroParaDolar)
    const dados = response.data
    const resultado = dados.EURUSD.high
    return resultado
}



export {pegaDadosDolar, pegaDadosEuro, pegaDadosDolarParaEuro, pegaDadosEuroParaDolar};