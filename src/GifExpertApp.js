import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({defaultCategories = [] }) => {
    
    //const categories = ['Banana', 'Manzana', 'Pera'];
    const [categories, setCategories] = useState(defaultCategories)

    //const handledAdd = () => {
        //usando spread
        // setCategories([...categories, 'Frutilla'])
        //cambiando orden
        //setCategories([ 'Frutilla', ...categories])
        //toma el estado actual y le agrega uno mas
        //setCategories( cats => [...cats, 'Higo'])
    //}

    return(
        <div>
            <h2> GifExpertApp</h2>
            <AddCategory  setCategories={setCategories} />
            <hr />
            {
                categories.map( category => 
                
                    <GifGrid
                        key= { category }
                        category={ category }                    
                    />
                
                )
            }
        </div>
    )

}