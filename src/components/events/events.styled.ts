import { Container, Form } from 'react-bootstrap';
import styled from 'styled-components';

export const EventsStyled = styled(Container)`
  margin-top: 20px;
  .heading-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    @media screen and (max-width: 575px) {
      flex-direction: column;
    }
  }
`;

export const SearchStyled = styled(Form.Group)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  padding-left: 1%;
  padding-right: 1%;
  border-radius: 10px;

  & input {
    width: 100%;
    min-height: 50px;
    border: none;
    padding: 4px 10px;
    font-size: 20px;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;
