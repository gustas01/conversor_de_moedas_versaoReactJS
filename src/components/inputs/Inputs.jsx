import React from 'react'
import './Inputs.css'

export default function Inputs(props){
    return(
        <div className="corpo">
                
            <div className="inputGeral">
                <label htmlFor={props.moeda}>{props.moeda}</label>
                <div className="inputSimbolo">
                    <label className="simbolo" htmlFor={props.moeda}>{props.simbolo}</label>
                    <input type="number" id={props.moedas} />
                </div>
            </div>

        </div>
    )
}