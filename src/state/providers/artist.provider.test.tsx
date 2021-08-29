import { render, screen } from '@testing-library/react';
import { ArtistProvider } from './artist.provider';

const cacheMockData = [
  {
    thumb_url: 'https://photos.bandsintown.com/thumb/133211.jpeg',
    mbid: '9406bc20-c431-4714-b401-dc1319f5a667',
    support_url: '',
    facebook_page_url: '',
    image_url: 'https://photos.bandsintown.com/large/133211.jpeg',
    name: 'AD',
    options: { display_listen_unit: false },
    id: '44522',
    tracker_count: 13292,
    upcoming_event_count: 1,
    url: 'https://www.bandsintown.com/a/44522?came_from=267&app_id=abc',
  },
];

describe('Artist Provider tests', () => {
  it('renders <ArtistProvider/>', () => {
    const body = 'This is rendered inside context';
    render(
      <ArtistProvider>
        <h2>{body}</h2>
      </ArtistProvider>
    );
    expect(screen.getByText(body)).toBeInTheDocument();
  });

  it('testing data with localStorage', () => {
    localStorage.setItem('artists', JSON.stringify(cacheMockData));
    const cache = JSON.parse(localStorage.getItem('artists') || '[]');

    render(
      <ArtistProvider>
        <div>
          Artists are listed as below
          {cache?.length &&
            cacheMockData.map((artist, index) => <h2 key={index}>{artist.name}</h2>)}
        </div>
      </ArtistProvider>
    );
    expect(screen.getByText(/AD/i)).toBeInTheDocument();
  });
});
