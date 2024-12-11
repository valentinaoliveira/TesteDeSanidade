import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login form', () => {
  render(<App />);
  const loginTitle = screen.getByRole('heading', { name: /login/i }); // Busca por um título com o texto "Login"
  expect(loginTitle).toBeInTheDocument();
});


