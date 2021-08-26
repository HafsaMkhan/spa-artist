import { FC } from "react";
import { Button } from "react-bootstrap";
import { NotFoundStyled } from "./404.styled";

export const NotFound: FC = () => {
  return (
    <NotFoundStyled>
      <div className="number">404</div>
      <div className="text">
        Oops. The page you're looking for doesn't exist.
      </div>
      <Button variant="light" href="/">
        Back to Home
      </Button>
    </NotFoundStyled>
  );
};
