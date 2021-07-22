const url = "https://api.hgbrasil.com/finance"
const { default: axios } = require("axios")

async function pegaDados(){
    const response = await axios.get(url)
    const dados = response.data
    const resultado = dados.results.currencies
    return resultado
}

export default pegaDados;