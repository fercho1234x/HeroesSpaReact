import { render, screen } from "@testing-library/react";
import { AppRouter } from "../../src/router/AppRouter";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <AppRouter />', () => {
    test('debe de mostrar el login si no esta autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Login') ).toBeTruthy();
    });

    test('debe de mostrar el componente marvel si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: 'Test User'
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Logout') ).toBeTruthy();
    });
})