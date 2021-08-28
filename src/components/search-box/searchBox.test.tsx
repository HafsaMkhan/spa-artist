import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBox } from './index';

describe('<SearchBox /> tests', () => {
  it('renders the SearchBox component', () => {
    render(<SearchBox />);
    const element = screen.getByTestId('search-box');
    expect(element).toBeInTheDocument();
  });

  it('types in search box', () => {
    render(<SearchBox />);
    const element = screen.getByTestId('search-box');
    fireEvent.change(element, { value: 'artist' });
  });
});
