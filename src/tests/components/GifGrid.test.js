import React from 'react';
import '@testing-library/jest-dom';

import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas sobre Gif Grid', ()=> {

    const category = 'One Punch';


    test('Debe mostrarse correctamente', ()=> {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow( <GifGrid category={category}/>)   
        expect(wrapper).toMatchSnapshot()

    });

    test('Debe mostrat items cuando se cargan imagenes en useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'http://localhost/algo/algo',
            title: 'Algo'
        },{
            id: 'ABC1',
            url: 'http://localhost/algo/algo',
            title: 'Algo'
        }] 

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        })

        const wrapper = shallow( <GifGrid category={category}/>);

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('p').exists()).toBe(false)
        expect( wrapper.find('GifGridItem').length).toBe(gifs.length)

    })




})