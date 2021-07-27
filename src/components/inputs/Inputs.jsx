import React from 'react'
import './Inputs.css'
import {pegaDadosDolar, pegaDadosEuro, pegaDadosDolarParaEuro, pegaDadosEuroParaDolar, pegaDadosBitcoin} from '../../requisicao/req.js';


export default class Inputs extends React.Component{
    state = {
        reaisValor: 0,
        dolaresValor: 0,
        eurosValor: 0
    }
    




    render(){   
        
       this.reaisChange = (e) =>{
           let valorReaisInput = e.target.value
           let dolaresInput = document.getElementById("Dolares")
           let eurosInput = document.getElementById("Euros")
           
           pegaDadosDolar().then( response => {
               const dados = response
               this.setState({
                   reaisValor: valorReaisInput,
                   dolaresValor: valorReaisInput/dados,
                })
                dolaresInput.value = this.state.dolaresValor.toFixed(2)
            })
            
            pegaDadosEuro().then(response => {
                const dados = response
                this.setState({
                    reaisValor: valorReaisInput,
                    eurosValor: valorReaisInput/dados
            })
            eurosInput.value = this.state.eurosValor.toFixed(2)
        })

    }

       this.dolaresChange = (e) =>{
           let valorDolaresInput = e.target.value
           let reaisInput = document.getElementById("Reais")
           let eurosInput = document.getElementById("Euros")
           
           pegaDadosDolar().then( response => {
               const dados = response
               this.setState({
                   dolaresValor: valorDolaresInput,
                   reaisValor: valorDolaresInput*dados
                })
                reaisInput.value = this.state.reaisValor.toFixed(2)
            })
            
            pegaDadosDolarParaEuro().then(response => {
                const dados = response
                this.setState({
                    dolaresValor: valorDolaresInput,
                    eurosValor: dados*valorDolaresInput
            })
                eurosInput.value = this.state.eurosValor.toFixed(2)
            })

    }


       this.eurosChange = (e) =>{
           let valorEurosInput = e.target.value
           let reaisInput = document.getElementById("Reais")
           let dolaresInput = document.getElementById("Dolares")
           
           pegaDadosEuro().then( response => {
               const dados = response
               this.setState({
                   eurosValor: valorEurosInput,
                   reaisValor: valorEurosInput*dados
                })
                reaisInput.value = this.state.reaisValor.toFixed(2)
            })
            
            pegaDadosEuroParaDolar().then(response => {
                const dados = response
                this.setState({
                    eurosValor: valorEurosInput,
                    dolaresValor: dados*valorEurosInput
            })
                dolaresInput.value = this.state.dolaresValor.toFixed(2)
            })

    }
    
    
    (this.bitcoinLoad = (e) => {
        pegaDadosBitcoin().then( response => {
            document.getElementById("Bitcoin").value = response
        })
    })() //função IIFE


    // const {reaisValor, dolaresValor, eurosValor} = this.state;

    


        return(
            <div className="inputGeral">
                
                <label htmlFor="Reais">Reais</label>
                <div className="inputSimbolo">
                    <label htmlFor="Reais">R$</label>
                    <input onChange={this.reaisChange} type="number" id="Reais" />
                </div>
                
                <label htmlFor="Dolarers">Dólarers</label>
                <div className="inputSimbolo">
                    <label htmlFor="Dolares">US$</label>
                    <input onChange={this.dolaresChange} type="number" id="Dolares" />
                </div>
                
                <label htmlFor="Euros">Euros</label>
                <div className="inputSimbolo">
                    <label htmlFor="Euros">Є</label>
                    <input onChange={this.eurosChange} type="number" id="Euros" />
                </div>
                
                <label htmlFor="Bitcoin" style={{color: "red"}}>Bitcoin</label>
                <div className="inputSimboloBitcoin">
                    <label htmlFor="Bitcoin">R$</label>
                    <input type="text" id="Bitcoin" disabled={true}/>
                </div>
            </div>

       
        )
    }
}