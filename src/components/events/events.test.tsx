import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { Events } from './index';

describe('<Events /> tests', () => {
  beforeEach(() => {
    render(<Events />);
  });
  it('renders the Events component', () => {
    const element = screen.getByText(/A/i);
    expect(element).toBeInTheDocument();
  });

  it('tests the search component', async () => {
    await waitForElementToBeRemoved(screen.getByText(/Loading.../i), {
      timeout: 5 * 1000,
    });
    const element = await screen.getByTestId('search');
    await fireEvent.change(element, { target: { value: 'Switzerland' } });
    expect(element).toBeInTheDocument();
  });
});
