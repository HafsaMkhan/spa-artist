import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Artists } from './index';

describe('<Artists /> tests', () => {
  it('renders the Artists component', () => {
    render(<Artists />);
    waitForElementToBeRemoved(screen.getByText(/Loading/i));
    const element = screen.getByText(/A/i);
    expect(element).toBeInTheDocument();
  });
});
