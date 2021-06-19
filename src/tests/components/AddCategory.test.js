
import React from 'react';
import '@testing-library/jest-dom'

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en AddCategory', () => {

    //jest.fn() es lo mismo que decir () => {}
    const setCategories = jest.fn();
    
    let wrapper = shallow( <AddCategory setCategories={ setCategories } />)

    // cuando se hace el submit inputValue tiene un valor entonces dispara handleSubmit y el test falla.
    // para eso hay que poner el componente como esta originalmente
    beforeEach( ()=> {
        jest.clearAllMocks(); // limpia mocks
        wrapper = shallow( <AddCategory setCategories={ setCategories } />)
    })

    test('Debe mostrarse correctamente', () => {

       
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        // hay que pasarle el ( e.target.value ) por que en la funcion lo imprime desde alli    
        input.simulate('change', { target:{ value } });

        expect(wrapper.find('p').text().trim()).toBe( value )
    })

    test('NO debe postear la informacion en Submit ', () => {

        // se puede { preventDefault: () => {} } o sino la forma corta preventDefault(){}
        wrapper.find('form').simulate('submit', { preventDefault(){} } )
        
        expect( setCategories ).not.toHaveBeenCalled()

    })

    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';

        //1. Simular inputChange
        wrapper.find('input').simulate('change', { target:{ value }});
        //2. simular submit
        wrapper.find('form').simulate('submit', { preventDefault(){} })
        //3. setCategories se debe haber llamado
        expect( setCategories ).toHaveBeenCalled();
            //3.1 Si quiero preguntar por cuantas veces se llamo uso:
        expect( setCategories ).toHaveBeenCalledTimes(1);
            //3.2 si quiero preguntar si se llamo con una funcion. 
            //ej setCategories(125499779) en vez de setCategories(cats => [Inputvalue, ...cats]) 
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        //4. el valor del input debe estar ''        
        expect( wrapper.find('input').prop('value') ).toBe( '' )

    })

})