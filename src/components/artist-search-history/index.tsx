import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useContext } from 'react';
import { Row } from 'react-bootstrap';
import { ArtistContext } from '../../state';
import { ArtistInfo } from '../artist-info-card';
import { ArtistSearchHistoryStyled } from './artistSearchHistory.styled';
import { ShouldRender } from 'should-render';

export const ArtistSearchHistory: FC = () => {
  const { artists } = useContext(ArtistContext);

  return (
    <ArtistSearchHistoryStyled>
      <div className="d-flex align-items-center mt-5">
        <a href="/" className="back-btn">
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </a>
        <h2 className="ml-3 mb-0">Search History</h2>
      </div>
      <Row xs={1} md={2} className="g-4 mt-5">
        <ShouldRender if={!artists?.length}>
          <h3 className="no-results">No Search Results</h3>
        </ShouldRender>
        {!!artists.length &&
          artists?.map(
            (
              { name, image_url, facebook_url, url, upcoming_event_count },
              index: number
            ) => (
              <ArtistInfo
                key={index}
                name={name}
                media={image_url}
                link={url}
                fbLink={facebook_url}
                upcomingEvents={upcoming_event_count}
              />
            )
          )}
      </Row>
    </ArtistSearchHistoryStyled>
  );
};
