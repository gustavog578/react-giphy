import React, { useState } from 'react'
import { PropTypes } from "prop-types";

export const AddCategory = ({setCategories}) => {
// poner '' para que el state inicial no sea undefined
const [Inputvalue, setInputvalue] = useState('')



const handleInputChange = (e) => {
    setInputvalue(e.target.value);
}


const handleSubmit = (e) => {
    e.preventDefault();
    
    if(Inputvalue.trim().length > 2){
        setCategories(cats => [Inputvalue, ...cats])
        setInputvalue('')
    }

}


return (
   
        <form onSubmit={ handleSubmit }>         
            <input
                type="text"
                value={ Inputvalue }
                onChange={ handleInputChange }
            />
        </form>


    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}