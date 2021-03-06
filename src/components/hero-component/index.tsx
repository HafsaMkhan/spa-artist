import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { SearchBox } from '../search-box';
import { HeroStyled } from './hero.styled';

export const HeroComponent: FC = () => {
  const { artist } = useParams<{ artist: string }>();

  return (
    <HeroStyled isSearched={!!artist?.trim()} data-testid="hero-component">
      <div className="search-btn">
        <a href="/artist/history">Search History</a>
      </div>
      <h2>Find Your Favourite Artist</h2>
      <SearchBox />
    </HeroStyled>
  );
};
