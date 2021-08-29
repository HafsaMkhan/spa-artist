import { render, screen } from '@testing-library/react';
import { ArtistSearchHistory } from './index';

describe('<ArtistSearchHistory /> tests', () => {
  it('renders the ArtistSearchHistory component', () => {
    render(<ArtistSearchHistory />);
    const linkElement = screen.getByText(/Search History/i);
    expect(linkElement).toBeInTheDocument();
  });
});
