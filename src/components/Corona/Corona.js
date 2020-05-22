import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Estados from '../Estados/Estados'
import Brasil from '../Brasil/Brasil'
import Pesquisa from '../Pesquisa/Pesquisa'
import Creditos from '../Creditos/Creditos'

function Corona() {

    const [casos, setCasos] = useState({})
    const [taxaMort, setTaxaMort] = useState(0);
    const [casosEstados, setCasosEstados] = useState([]);    
    const [search, setSearch] = useState('');

    useEffect(()=>{
        const fetchData = async () => {
            const result = await axios(
                'https://covid19-brazil-api.now.sh/api/report/v1/brazil',
            );        
            setCasos(result.data.data);
            setTaxaMort(((result.data.data.deaths/result.data.data.confirmed)*100).toFixed(2))
        }
        fetchData()
    },[casos]);

    useEffect(()=>{
        loadAllStates()
    },[])

    useEffect(() => {
        if (search != '') {
            const searchResults = casosEstados.filter(estado => estado.state.toLowerCase().includes(search));
            setCasosEstados(searchResults);
        } else {
            loadAllStates()
        }           
    }, [search])

    function loadAllStates() {
        const fetchDataEstados = async () => {
            const resultEstados = await axios(
                'https://covid19-brazil-api.now.sh/api/report/v1',
            )
            setCasosEstados(resultEstados.data.data);            
        }
        fetchDataEstados()
    }
    
    return (
        <div>            
            <Brasil 
                casosConfirmados={casos.confirmed}
                casosMorte={casos.deaths}
                casosRecuperados={casos.recovered}
                taxaMort={taxaMort}
            />
            <Pesquisa 
                search={search}
                setSearch={setSearch}
            />                       
            <Estados casosEstados={casosEstados}/>  
            <Creditos />          
        </div>          
    )
}

export default Corona
