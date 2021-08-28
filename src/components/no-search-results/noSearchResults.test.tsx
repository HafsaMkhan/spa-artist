import { render, screen } from '@testing-library/react';
import { NoSearchResults } from './index';

describe('<NoSearchResults /> tests', () => {
  it('renders the NoSearchResults component', () => {
    render(<NoSearchResults />);
    const element = screen.getByTestId('no-search-results');
    expect(element).toBeInTheDocument();
  });
});
