import React from 'react'
import './Corpo.css'
import Inputs from '../inputs/Inputs'
import cifraoIcon from '../../imagens/cifrao.svg'

export default class Corpo extends React.Component{
    render(){
        return (
            <div className="corpo">
                <img src={cifraoIcon} alt="cifrão" />
                <Inputs/>
            </div>
        )
    }
}