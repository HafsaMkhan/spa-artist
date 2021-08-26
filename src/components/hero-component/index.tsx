import { FC } from "react";
import { useParams } from "react-router-dom";
// import { SearchContext } from "src/state";
import { SearchBox } from "../search-box";
import { HeroStyled } from "./hero.styled";

export const HeroComponent: FC = () => {
  const { artist } = useParams<{ artist: string }>();

  return (
    <HeroStyled isSearched={!!artist?.trim()}>
      <h2>
        Find Your <span>Favourite Artist</span>
      </h2>
      <SearchBox />
    </HeroStyled>
  );
};
