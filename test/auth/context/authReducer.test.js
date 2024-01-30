import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';

describe('prubeas en authReducer', () => {
    const initialState = [{
        logged: false
    }];

    test('debe de regresar el estado inicial', () => {
        const newState = authReducer( initialState, {} );
        expect( newState ).toBe( initialState );
    });

    test('debe de agregar establecer al usuario logeado', () => {
        const action = {
            type: types.login,
            payload: 'User Test'
        };

        const newState = authReducer( initialState, action );
        expect( newState.user ).toBeTruthy();
        expect( newState.user ).toContain( action.payload );
        expect( newState.logged ).toBe( true );
    });

    test('debe de remover el usuario logeado', () => {

        const state = {
            logged: false,
            user: 'User Test'
        };

        const action = {
            type: types.logout,
            payload: 'User Test'
        };

        const newState = authReducer( state, action );

        expect( newState.user ).not.toBeTruthy();
        expect( newState.logged ).toBe( false );
    });
})