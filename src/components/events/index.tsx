import { FC } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEvents } from "src/state";
import { GetEventInterface } from "src/state/events/artists.interface";
import { EventInfo } from "../event-info-card";
import { FullScreenLoader } from "../loader";
import { NoSearchResults } from "../no-search-results";
import { EventsStyled } from "./events.styled";

export const Events: FC = () => {
  const { artist } = useParams<{ artist: string }>();
  const {
    res: { data, loading },
  } = useEvents(artist);

  return (
    <EventsStyled>
      {loading && <FullScreenLoader />}
      {!loading && (
        <>
          <h2 className="mb-5">{data?.length} Upcoming Events</h2>
          {data?.length ? (
            <Row xs={1} md={2} lg={3} className="g-4">
              {data.map(
                ({ datetime, venue }: GetEventInterface, idx: number) => (
                  <EventInfo
                    key={idx}
                    country={venue?.country}
                    city={venue?.city}
                    venue={venue?.name}
                    date={datetime}
                  />
                )
              )}
            </Row>
          ) : (
            <NoSearchResults />
          )}
        </>
      )}
    </EventsStyled>
  );
};
