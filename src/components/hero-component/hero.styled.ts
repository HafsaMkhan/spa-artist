import styled from 'styled-components';

export const HeroStyled = styled.div<{ isSearched: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/images/hero-image.jpg);
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: ${(props) => (props.isSearched ? '30vh' : '100vh')};
  max-height: ${(props) => (props.isSearched ? '30vh' : '100vh')};
  transition: ${(props) =>
    props.isSearched ? 'min-height 1s ease-in' : 'min-height 1s ease-out'};

  & .search-btn {
    display: flex;
    justify-content: flex-end;
    width: 90%;
    padding-top: 15px;
    & a {
      color: #fff;
      text-decoration: solid;
      font-size: 24px;
      padding: 2px 20px;
      border: 1px solid;
      border-radius: 10px;
    }
    @media only screen and (max-width: 525px) {
      width: unset;
    }
  }

  & h2 {
    color: #fff;
    font-size: 3.2em;
    margin: 0 5px 10px;
    text-align: center;
    margin-top: 20px;

    @media only screen and (max-width: 525px) {
      font-size: 1.8em;
    }
  }
`;
