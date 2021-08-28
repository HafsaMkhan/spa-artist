import { render, screen } from '@testing-library/react';
import { HeroComponent } from './index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
  useParams: () => ({
    artist: '',
  }),
}));

describe('<HeroComponent /> tests', () => {
  beforeEach(() => {
    render(<HeroComponent />);
  });

  it('renders the HeroComponent component',  () => {
    const linkElement = screen.getByText(/Find Your Favourite Artist/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('', () => {
    const hero = screen.getByTestId(/hero-component/i);
    const heroElem = document.getElementsByClassName(hero.className);
    const heroStyle = window.getComputedStyle(heroElem[0]);
    expect(heroStyle.minHeight).toBe('100vh')
  })
});