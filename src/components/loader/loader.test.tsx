import { render, screen } from '@testing-library/react';
import { FullScreenLoader } from './index';

describe('<FullScreenLoader /> tests', () => {
  it('renders the FullScreenLoader component', () => {
    render(<FullScreenLoader />);
    const linkElement = screen.getByText(/Loading/i);
    expect(linkElement).toBeInTheDocument();
  });
});
