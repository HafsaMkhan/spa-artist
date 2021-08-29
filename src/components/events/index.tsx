import { FC } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { renderLoader } from '../../common';
import { useEvents } from '../../state';
import { GetEventInterface } from '../../state';
import { EventInfo } from '../event-info-card';
import { NoSearchResults } from '../no-search-results';
import { EventsStyled } from './events.styled';
import { ShouldRender } from 'should-render';

export const Events: FC = () => {
  const { artist } = useParams<{ artist: string }>();
  const {
    res: { data, loading },
  } = useEvents(artist);

  return (
    <EventsStyled>
      {renderLoader(loading)}
      <ShouldRender if={!loading}>
        <h2 className="mb-5">{data?.length} Upcoming Events</h2>
        <ShouldRender if={data?.length}>
          <Row xs={1} md={2} lg={3} className="g-4">
            {data?.map(({ datetime, venue }: GetEventInterface, idx: number) => (
              <EventInfo
                key={idx}
                country={venue?.country}
                city={venue?.city}
                venue={venue?.name}
                date={datetime}
              />
            ))}
          </Row>
        </ShouldRender>
        <ShouldRender if={!data?.length}>
          <NoSearchResults />
        </ShouldRender>
      </ShouldRender>
    </EventsStyled>
  );
};
