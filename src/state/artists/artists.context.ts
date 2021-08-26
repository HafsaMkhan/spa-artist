import { createContext } from "react";

export const SearchContext = createContext({
  searchValue: "",
  setSearchValue: (str: string) => {},
});
