import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';

// Debe estar aqui debajo
import { shallow } from "enzyme"

describe('Test GifGridItem', () => {
    
    const title = 'Un titulo';
    const url='http://localhost:3030';
    const wrapper = shallow( <GifGridItem title= {title} url={url}  /> )


    test('debe momstrar el componente correctamente', () => {
      
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe tener un parrafo con el title', () =>{

        const p = wrapper.find('p');
        expect( p.text().trim()).toBe( title );
    })
    
    test('Debe tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        expect( img.prop('src')).toBe(url);
        expect( img.prop('alt')).toBe(title);

    })

    test('Debe tener animate_fadeIn', () => {

        const div = wrapper.find('div');
        // dos maneras de preguntar
        expect( div.prop('className')).toContain('animate__fadeIn')
        expect( div.prop('className').includes('animate__fadeIn')).toBe(true)

    })


})

