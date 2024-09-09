import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('Demo test', () => {
    render(<App />);
    screen.debug();

    expect(
      screen.getByText('Titulo de la aplicacion con Lucy!!!')
    ).toBeDefined();
  });
});
