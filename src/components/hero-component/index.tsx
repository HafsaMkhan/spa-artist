import { FC, useContext } from "react";
import { SearchContext } from "src/state";
import { SearchBox } from "../search-box";
import { HeroStyled } from "./hero.styled";

export const HeroComponent: FC = () => {
  const { searchValue } = useContext(SearchContext);
  return (
    <HeroStyled isSearched={!!searchValue?.trim()}>
      <h2>
        Find Your <span>Favourite Artist</span>
      </h2>
      <SearchBox />
    </HeroStyled>
  );
};
