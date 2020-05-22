import React from 'react'

function Brasil(props) {
    return (
        <div className="brasil">
            <p>coronavirus no</p>
            <h1>Brasil</h1>
            <div className="brasil-dados">
                <div className="brasil-dados-casos confirmados">
                    <p>Confirmados</p>
                    <h2>{props.casosConfirmados}</h2>
                </div>
                <div className="brasil-dados-casos mortes">
                    <p>Mortes</p>
                    <h2>{props.casosMorte}</h2>
                    <p>mortalidade {props.taxaMort} %</p>
                </div>
                <div className="brasil-dados-casos recuperados">
                    <p>Recuperados</p>
                    <h2>{props.casosRecuperados}</h2>
                </div>              
            </div>            
        </div>
    )
}

export default Brasil
