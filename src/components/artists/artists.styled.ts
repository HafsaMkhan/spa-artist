import { Container } from "react-bootstrap";
import styled from "styled-components";

export const ArtistsStyled = styled(Container)`
  margin: 40px auto;

  .not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 500px;
  }
`;
