import styled from "styled-components";
import { Form } from "react-bootstrap";

export const SearchBoxStyled = styled(Form.Group)`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid #fff;
  padding-left: 1%;
  padding-right: 1%;

  & input {
    width: 100%;
    min-height: 50px;
    font-size: 14px;
    border: none;
    padding: 4px 10px;
    background-color: transparent;
    font-size: 20px;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  & svg {
    color: #fff;
  }
  &:focus-within {
    background-color: #fff;
    border-radius: 10px;
    svg {
      color: #cdcdcd;
    }
  }
`;
