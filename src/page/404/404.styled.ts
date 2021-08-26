import styled from "styled-components";

export const NotFoundStyled = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  color: #293b49;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;

  .number {
    font-weight: 900;
    font-size: 15rem;
    line-height: 1;
    @media screen and (max-width: 575px) {
      font-size: 10rem;
    }
  }
`;
