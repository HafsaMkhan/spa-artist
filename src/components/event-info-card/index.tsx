import { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";
import {
  EventCardStyled,
  EventInfoHeader,
  EventInfoText,
  EventInfoTitle,
} from "./eventInfo.styled";

export const EventInfo: FC<{
  country: string;
  city: string;
  venue: string;
  date: string;
}> = ({ country, city, venue, date }) => {
  const getDetails = (key: string, value: string) => (
    <Col>
      <EventInfoTitle>{key}</EventInfoTitle>
      <EventInfoText>{value}</EventInfoText>
    </Col>
  );

  return (
    <Col>
      <EventCardStyled>
        <EventInfoHeader>Event Details</EventInfoHeader>
        <Card.Body>
          <Row xs={2}>
            {getDetails("Country", country)}
            {getDetails("City", city)}
            {getDetails("Venue", venue)}
            {getDetails("Date", date)}
          </Row>
        </Card.Body>
      </EventCardStyled>
    </Col>
  );
};
