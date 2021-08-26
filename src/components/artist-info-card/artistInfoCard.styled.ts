import { Card } from "react-bootstrap";
import styled from "styled-components";

export const ArtistInfoStyled = styled(Card)`
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color: #fff;
  box-shadow: 16px 10px 20px rgb(0 0 0 / 5%);
  margin-bottom: 30px;
  min-height: 100px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
`;

export const ArtistImg = styled.span`
  width: 100px;
  height: 100px;
  border: 1px solid #dde4f4;
  border-radius: 50%;
  overflow: hidden;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ArtistDetailStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 20px;
  justify-content: center;

  .artist-name {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
    line-height: 24px;
    text-transform: capitalize;

    @media screen and (max-width: 575px) {
      font-size: 16px;
      line-height: 18px;
    }
  }
`;

export const ArtistIconsDiv = styled.div`
  .event-text {
    margin-left: 4px;
    color: #808080;
  }
  & a {
    margin-right: 10px;
    text-decoration: none;
  }
`;
