import { render, screen } from '@testing-library/react';
import { Events } from './index';

describe('<Events /> tests', () => {
  it('renders the Events component', () => {
    render(<Events />);
    const element = screen.getByText(/A/i);
    expect(element).toBeInTheDocument();
  });
});
