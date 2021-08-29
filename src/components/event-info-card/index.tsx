import { FC, useCallback } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {
  EventCardStyled,
  EventInfoHeader,
  EventInfoText,
  EventInfoTitle,
} from './eventInfo.styled';

export const EventInfo: FC<{
  country: string;
  city: string;
  venue: string;
  date: string;
}> = ({ country, city, venue, date }) => {
  const getDateStr = new Date(date).toLocaleDateString();

  const getDetails = useCallback(
    (key: string, value: string) => (
      <Col xs={12} md={6}>
        <EventInfoTitle>{key}</EventInfoTitle>
        <EventInfoText>{value}</EventInfoText>
      </Col>
    ),
    []
  );

  return (
    <Col className="d-flex">
      <EventCardStyled>
        <EventInfoHeader>Event Details</EventInfoHeader>
        <Card.Body>
          <Row xs={2}>
            {getDetails('Country', country)}
            {getDetails('City', city)}
            {getDetails('Venue', venue)}
            {getDetails('Date', getDateStr)}
          </Row>
        </Card.Body>
      </EventCardStyled>
    </Col>
  );
};
