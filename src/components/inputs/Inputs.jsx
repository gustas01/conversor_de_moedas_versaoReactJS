import React from 'react'
import './Inputs.css'
import {pegaDadosDolar, pegaDadosEuro} from '../../requisicao/req.js';


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
            </div>

       
        )
    }
}