
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';
describe('Pruebas en el hook useFetchGifs', ()=> {

    test('Debe retornar el estado inicial', async() => {
        
        const { result,waitForNextUpdate  } = renderHook( ()=> useFetchGifs('One Punch'))
 
        const { data , loading} = result.current;
       
        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toEqual(true);

    })

    test('debe retornar un arreglo de imagenes y el loading en false', async ()=> {

        const { result, waitForNextUpdate } = renderHook( ()=> useFetchGifs('One Punch'));
        await waitForNextUpdate();

        const { data , loading} = result.current;

        expect( data.length ).toEqual(10);
        expect( loading ).toEqual(false);


    })

})

// Cuando se testea hooks tener en cuenta si al hacer el setState,
// el custom hook este montado o el componente exista