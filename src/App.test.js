import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main navigation and the cars page', () => {
  render(<App />);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Coches' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Nuevo coche' })).toBeInTheDocument();
});
