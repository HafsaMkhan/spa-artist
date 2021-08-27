import { render, screen } from '@testing-library/react';
import { HeroComponent } from './index';

describe('<HeadMetaData /> tests', () => {
  it('renders the HeadMetaData component', async () => {
    render(<HeroComponent />);

    const linkElement = screen.getByText(/Find Your Favourite Artist/i);
    expect(linkElement).toBeInTheDocument();
  });
});
