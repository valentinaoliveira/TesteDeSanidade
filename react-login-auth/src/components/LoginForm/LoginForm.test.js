// Importa funções úteis do React Testing Library para realizar os testes
import { render, screen, fireEvent } from '@testing-library/react';

// Importa o componente LoginForm, que será testado
import LoginForm from './LoginForm';

// Primeiro teste: Verificar se o formulário de login é renderizado corretamente
test('renders login form', () => {
  // Renderiza o componente LoginForm para simular como ele aparece na tela
  render(<LoginForm />);

  // Verifica se o campo de login (identificado por seu rótulo) está presente no documento
  expect(screen.getByLabelText(/login/i)).toBeInTheDocument();

  // Verifica se o campo de senha (identificado por seu rótulo) está presente no documento
  expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();

  // Verifica se o botão com o nome "Entrar" está presente no documento
  expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
});

// Segundo teste: Verificar se uma mensagem de erro aparece quando credenciais inválidas são fornecidas
test('shows error on invalid credentials', () => {
  // Renderiza o componente LoginForm para simular como ele aparece na tela
  render(<LoginForm />);

  // Simula a entrada de um texto no campo de login, inserindo "wrongUser"
  fireEvent.change(screen.getByLabelText(/login/i), { target: { value: 'wrongUser' } });

  // Simula a entrada de um texto no campo de senha, inserindo "wrongPassword"
  fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: 'wrongPassword' } });

  // Simula um clique no botão "Entrar"
  fireEvent.click(screen.getByRole('button', { name: /entrar/i }));

  // Verifica se a mensagem "Credenciais inválidas" aparece na tela após a interação
  expect(screen.getByText(/credenciais inválidas/i)).toBeInTheDocument();
});
