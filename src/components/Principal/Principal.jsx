import React from 'react'
import './Principal.css'
import Cabecalho from '../Cabecalho/Cabecalho'
import Corpo from '../Corpo/Corpo'

export default class Principal extends React.Component{
    render(){
        return(
            <div className="principal">
                <Cabecalho/>
                <Corpo />
            </div>   
        )
    }
}