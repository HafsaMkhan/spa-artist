import { render, screen } from '@testing-library/react';
import { ArtistInfo } from './index';

describe('<ArtistInfo /> tests', () => {
  it('renders the ArtistInfo component', () => {
    render(
      <ArtistInfo
        name="Artist Testing"
        link="https://www.example.com"
        media="https://photos.bandsintown.com/large/8626869.jpeg"
        fbLink="https://www.facebook.com"
        upcomingEvents={0}
      />
    );
    const linkElement = screen.getByText(/Artist Testing/i);
    expect(linkElement).toBeInTheDocument();
  });
});
