import { render, screen } from '@testing-library/react';
import { EventsPage } from './events';

test('renders <EventsPage /> Page', async () => {
  await render(<EventsPage />);
  await expect(screen.getByText(/ARTIST/i)).toBeInTheDocument();
});
