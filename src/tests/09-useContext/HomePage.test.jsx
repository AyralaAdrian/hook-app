import { render, screen } from '@testing-library/react';
import { HomePage } from '../../09-useContext/HomePage';
import { UserContext } from '../../09-useContext/context/UserContext';

describe('Pruebas en <HomePage />', () => {

    const user = {id: 1, name: 'Adrian'};
    
    test('debe de mostrar el componente sin el usuario', () => {
        
        render(
        <UserContext.Provider value={{user: null}}>
            <HomePage />
        </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

    });

    test('debe de mostrar el componente con el usuario', () => {
        
        render(
        <UserContext.Provider value={{user}}>
            <HomePage />
        </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect(JSON.parse(preTag.innerHTML)).toEqual(user);

    });
    

});