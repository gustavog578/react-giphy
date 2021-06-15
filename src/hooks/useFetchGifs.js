
import  { useEffect, useState } from 'react'
import { getGifs } from "../helpers/getGifs";

// los effect no pueden ser async 

export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data : [],
        loading: true
    })
    // el componente solo debe renderizarse y cargarse cuando cambia la categoria
    useEffect( ()=> {
            getGifs( category)
            .then( imgs => {
                    setState({
                        data: imgs,
                        loading:false
                    })                   
            } )
    },[category])

    return state;

}

