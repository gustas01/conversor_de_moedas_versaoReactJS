import React from 'react'
import './Inputs.css'
import pegaDados from '../../requisicao/req.js';


export default class Inputs extends React.Component{
    state = {
        reaisValor: 0,
        dolaresValor: 0,
        eurosValor: 0
    }
    
    
    
    // reaisChange = () => {
    //     this.setState({
    //         dolaresValor: (this.reaisValor * valores.USD.buy),
    //         eurosValor: (this.reaisValor * valores.EUR.buy)
    //     })
    // }

    // dolaresChange = () => {
    //     this.setState({
            
    //     })
    // }

    // eurosChange = () => {
    //     this.setState({
                
    //     })
    // }
    




    render(){   

       this.reaisChange = () =>{
           pegaDados().then( response => {
               const dados = response.data
               this.setState({
                    dolaresValor: dados.USD.buy,
                    eurosValor: dados.USD.buy
                })
            })
        }
        
        // this.setState({
        //     dolaresValor: dolaresValor+1
        // })

        const {reaisValor, dolaresValor, eurosValor} = this.state;


        return(
            <div className="inputGeral">
                
                <label htmlFor="Reais">Reais</label>
                <div className="inputSimbolo">
                    <label htmlFor="Reais">R$</label>
                    <input onChange={this.reaisChange} value={reaisValor} type="number" id="Reais" />
                </div>
                
                <label htmlFor="Dolarers">Dólarers</label>
                <div className="inputSimbolo">
                    <label htmlFor="Dolarers">US$</label>
                    <input onChange={this.dolaresChange} value={dolaresValor} type="number" id="Dolarers" />
                </div>
                
                <label htmlFor="Euros">Euros</label>
                <div className="inputSimbolo">
                    <label htmlFor="Euros">Є</label>
                    <input onChange={this.eurosChange} value={eurosValor} type="number" id="Euros" />
                </div>
            </div>

       
        )
    }
}