import React from 'react'

function Pesquisa(props) {
    return (
        <div className="search">
            <input 
                type="text"
                placeholder="Pesquisar por estado"
                value={props.search}
                onChange={e => props.setSearch(e.target.value)}
            />
            <button onClick={()=>{props.setSearch('')}}>Limpar</button>
        </div>
    )
}

export default Pesquisa
