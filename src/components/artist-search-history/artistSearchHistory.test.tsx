import { render, screen } from '@testing-library/react';
import { ArtistSearchHistory } from './index';

describe('<ArtistSearchHistory /> tests', () => {
  beforeEach(() => {
    render(<ArtistSearchHistory />);
  });
  it('renders the ArtistSearchHistory component', () => {
    const linkElement = screen.getByText(/Search History/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('rendering data from cache', () => {
    expect(screen.getByText(/No Search Results/i)).toBeInTheDocument();
  });
});
