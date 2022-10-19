/** * @jest-environment jsdom */
/* import React from 'react';
import '@testing-library/react';
import {render} from '@testing-library/react'
//para renderizar e inspeccionar 1 componente
import { Login } from './src/views/Login';
import {BrowserRouter} from 'react-router-dom' */

/* jest.spyOn('./src/views/Login', () => ({
    loginUsers: jest.fn(),
  }));
  
describe('Componente Login', () => {
    it('Shouls be exist button with className "butonIniciar"', () => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const component = render(<Login/>);
        expect(component).toBeDefined();
    })
}) */

import {render, screen} from '@testing-library/react'
// screen recuperar elem del componente que se esta renderizando
import Login from '../views/Login/Login'


describe('Login component', ()=> {
    test('The button is in the document', () => {
        render(<Login/>);
        expect(screen.getByRole('button' , {className: 'buttonIniciar'})).toBeInTheDocument();
    });
});



