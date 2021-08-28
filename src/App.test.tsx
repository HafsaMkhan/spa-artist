import { render, screen } from '@testing-library/react';
import App from './App';

describe('tests for <App />', () => {
  it('renders <App /> component', () => {
    render(<App />);
    const linkElement = screen.getByText(/Find Your Favourite Artist/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('test routing in app', () => {
    render(<App />);
    const push = jest.fn();
    push('/A/events');
    const element = screen.getByText(/Find Your Favourite Artist/i);
    expect(element).toBeInTheDocument();
  });
});
