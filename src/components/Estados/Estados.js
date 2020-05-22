import React from 'react'

function Estados(props) {
    return (
        <div className="estados">
            <ul>
                {props.casosEstados.map(estado => (
                    <li>
                        <h2>{estado.state}</h2>
                        <p>Confirmados</p>
                        <h3 className="confirmados">{estado.cases}</h3>
                        <p>Suspeitos</p>
                        <h3 className="recuperados">{estado.suspects}</h3>
                        <p>Mortes</p>
                        <h3 className="mortes">{estado.deaths}</h3>                            
                    </li>
                ))}                                        
            </ul>
        </div>
    )
}

export default Estados
