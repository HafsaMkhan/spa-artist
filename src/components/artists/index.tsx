import { FC, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { renderLoader } from '../../common';
import { ArtistContext, useArtist } from '../../state';
import { ArtistInfo } from '..';
import { NoSearchResults } from '../no-search-results';
import { ArtistsStyled } from './artists.styled';

export const Artists: FC = () => {
  const { artist } = useParams<{ artist: string }>();
  const {
    res: { data, loading },
  } = useArtist(artist);
  const { pushToHistory } = useContext(ArtistContext);

  useEffect(() => {
    data && pushToHistory(data);
  }, [data]);

  return (
    <ArtistsStyled>
      {renderLoader(loading)}
      {data ? (
        <ArtistInfo
          name={data.name}
          media={data.image_url}
          link={data.url}
          fbLink={data.facebook_url}
          upcomingEvents={data.upcoming_event_count}
        />
      ) : (
        <NoSearchResults />
      )}
    </ArtistsStyled>
  );
};
