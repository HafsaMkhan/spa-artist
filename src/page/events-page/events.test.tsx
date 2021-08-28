import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { EventsPage } from './events';

test('renders <EventsPage /> Page', async () => {
  await render(<EventsPage />);
  await waitForElementToBeRemoved(screen.getAllByText(/Loading.../i), {
    timeout: 10 * 1000,
  });
  await expect(screen.getByText(/ARTIST/i)).toBeInTheDocument();
  await expect(screen.getByText(/Upcoming Events/i)).toBeInTheDocument();
});
