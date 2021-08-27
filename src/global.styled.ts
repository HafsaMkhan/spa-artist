import { createGlobalStyle } from 'styled-components';

export const MainStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
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
