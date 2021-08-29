import { render, screen } from '@testing-library/react';
import { EventInfo } from './index';
test('renders learn react link', () => {
  render(
    <EventInfo
      country="Pakistan"
      venue="Avari Hotel"
      city="Lahore"
      date="2022-04-30T18:00:00"
    />
  );
  expect(screen.getByText(/Pakistan/i)).toBeInTheDocument();
  expect(screen.getByText(/Lahore/i)).toBeInTheDocument();
  expect(screen.getByText(/Avari Hotel/i)).toBeInTheDocument();
  expect(screen.getByText('4/30/2022')).toBeInTheDocument();
});
