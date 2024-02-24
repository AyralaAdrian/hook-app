import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../03-examples';
import { useCounter, useFetch } from '../../hooks';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });
    
    beforeEach( () => { jest.clearAllMocks});

    test('debe de mostrar el componente por defecto', () => {
        
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks />);
        expect(screen.getByText('Loading...'));
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton).toBeTruthy();
        //screen.debug();

    });

    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{author: 'Adrian', quote:'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Adrian')).toBeTruthy();
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton).toBeTruthy();
        
    });

    test('debe de llamar la función incrementar', () => {

        useFetch.mockReturnValue({
            data: [{author: 'Adrian', quote:'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });  

        render( <MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();

    });

});