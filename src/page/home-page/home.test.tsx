import { render, screen } from '@testing-library/react';
import { HomePage } from './home';

test('renders <Home /> Page', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/Find Your Favourite Artist/i);
  expect(linkElement).toBeInTheDocument();
});
