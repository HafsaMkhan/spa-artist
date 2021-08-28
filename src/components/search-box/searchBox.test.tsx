import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBox } from './index';

describe('<SearchBox /> tests', () => {
  beforeEach(() => {
    render(<SearchBox />);
  });
  it('renders the SearchBox component', () => {
    const element = screen.getByTestId('search-box');
    expect(element).toBeInTheDocument();
  });

  it('types in search box', async () => {
    const value = 'artist';
    const element = await screen.getByTestId('search-box');
    await fireEvent.change(element, { target: { value } });
    expect(element?.value).toEqual('artist');
  });
});
