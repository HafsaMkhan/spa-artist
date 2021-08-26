import { FC, useMemo, Suspense } from "react";
import { useHistory } from "react-router-dom";
import { lazyLoader } from "src/lazy";
import { HeroComponent, FullScreenLoader } from "../../components";
import { SearchContext } from "../../state";

const Artists = lazyLoader(() => import("../../components"), "Artists");

export const HomePage: FC = () => {
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
      {searchValue && (
        <Suspense fallback={FullScreenLoader}>
          <Artists />
        </Suspense>
      )}
    </SearchContext.Provider>
  );
};
