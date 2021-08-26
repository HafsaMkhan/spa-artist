import { Card } from "react-bootstrap";
import styled from "styled-components";

export const EventCardStyled = styled(Card)`
  display: flex;
  padding: 20px;
  background-color: #fff;
  box-shadow: 16px 10px 20px rgb(0 0 0 / 5%);
  margin-bottom: 30px;
  min-height: 100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
`;

export const EventInfoHeader = styled(Card.Header)`
  background-color: inherit;
  font-size: 24px;
  font-weight: 500;
`;

export const EventInfoTitle = styled(Card.Title)`
  font-size: 18px;
  margin-top: 12px;
  margin-bottom: 4px;
`;

export const EventInfoText = styled(Card.Text)`
  font-size: 14px;
  color: #696969;
`;
