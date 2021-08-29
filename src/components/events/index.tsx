import { FC, useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { renderLoader } from '../../common';
import { useEvents } from '../../state';
import { GetEventInterface } from '../../state';
import { EventInfo } from '../event-info-card';
import { NoSearchResults } from '../no-search-results';
import { EventsStyled, SearchStyled } from './events.styled';
import { ShouldRender } from 'should-render';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Events: FC = () => {
  const { artist } = useParams<{ artist: string }>();
  const {
    res: { data, loading },
  } = useEvents(artist);
  const [search, setSearch] = useState('');

  const onSearch = (event: any) => {
    const { value } = event?.target;
    setSearch(value.toLocaleLowerCase());
  };

  return (
    <EventsStyled>
      {renderLoader(loading)}
      <ShouldRender if={!loading}>
        <div className="heading-container">
          <h2>{data?.length} Upcoming Events</h2>
          <SearchStyled>
            <FontAwesomeIcon icon={faSearch} size="lg" />
            <Form.Control
              data-testid="search"
              type="text"
              placeholder="Search Artist"
              value={search}
              onChange={onSearch}
            />
          </SearchStyled>
        </div>
        <ShouldRender if={data?.length}>
          <Row xs={1} md={2} lg={3} className="g-4">
            {data
              ?.filter(
                ({ venue }) =>
                  !search ||
                  venue?.name.toLocaleLowerCase().includes(search) ||
                  venue?.city.toLocaleLowerCase().includes(search) ||
                  venue?.country.toLocaleLowerCase().includes(search)
              )
              .map(({ datetime, venue }: GetEventInterface, idx: number) => (
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
