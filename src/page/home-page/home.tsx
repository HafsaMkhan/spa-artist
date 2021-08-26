import { FC, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { Artists, HeroComponent } from "../../components";
import { SearchContext } from "../../state";

export const Home: FC = () => {
  const {
    location: { search, pathname },
    push,
  } = useHistory();

  const searchValue = useMemo(() => {
    if (search) return new URLSearchParams(search).get("search");
    return "";
  }, [search]);

  const setSearchValue = (str: string) => {
    const params = new URLSearchParams({ search: str?.trim() }).toString();
    push({ pathname, search: params });
  };

  return (
    <SearchContext.Provider
      value={{ searchValue: searchValue || "", setSearchValue }}
    >
      <HeroComponent />
      {searchValue && <Artists />}
    </SearchContext.Provider>
  );
};
