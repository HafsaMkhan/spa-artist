import { FC } from 'react';
import { Spinner } from 'react-bootstrap';
import { FullLoaderStyled } from './loader.styled';

export const FullScreenLoader: FC = () => {
  return (
    <FullLoaderStyled>
      <Spinner animation="border" role="status" className="loader-style">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </FullLoaderStyled>
  );
};
