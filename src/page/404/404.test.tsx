import { render, screen } from '@testing-library/react';
import { NotFound } from './404';

test('renders <NotFound /> Page', () => {
  render(<NotFound />);
  expect(screen.getByText(/404/i)).toBeInTheDocument();
});
