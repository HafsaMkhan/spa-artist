import { render, screen } from '@testing-library/react';
import { HeroComponent } from './index';

describe('<HeroComponent /> tests', () => {
  it('renders the HeroComponent component', () => {
    render(<HeroComponent />);
    const linkElement = screen.getByText(/Find Your Favourite Artist/i);
    expect(linkElement).toBeInTheDocument();
  });
});
