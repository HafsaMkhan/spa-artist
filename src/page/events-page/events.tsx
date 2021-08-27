import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Artists, Events } from 'src/components';

export const EventsPage: FC = () => {
  const { artist } = useParams<{ artist: string }>();

  return (
    <Container>
      <div className="d-flex align-items-center mt-5">
        <a href={`/${artist}`} className="back-btn">
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </a>
        <h2 className="ml-3 mb-0">ARTIST</h2>
      </div>
      <Artists />
      <Events />
    </Container>
  );
};
