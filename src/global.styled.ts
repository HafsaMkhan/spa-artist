import { createGlobalStyle } from 'styled-components';

export const MainStyled = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
	}

  h2 {
    color: #212529;
    font-weight: 700;
    font-size: 36px;
  }

  svg {
    color: #808080;
  }

  .color-blue {
    color: blue;
  }

  .not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 500px;
  }

  .back-btn {
    margin-right: 16px;
    padding-top: 4px;
    & svg {
      color: #212529;
    }
  }
`;
