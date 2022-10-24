import {render, screen} from '@testing-library/react'
// screen recuperar elem del componente que se esta renderizando
import { Login } from './Login';
import { BrowserRouter} from "react-router-dom";

describe('Login component', ()=> {
    test('The button is in the document', () => {
        render(
        <BrowserRouter>
            <Login/>
        </BrowserRouter>)
        expect(screen.getByRole('button' , {className: 'buttonIniciar'})).toBeTruthy();
    });
});



