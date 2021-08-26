import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useContext } from "react";
import { Form } from "react-bootstrap";
import { SearchContext } from "src/state";
import { SearchBoxStyled } from "./searchBox.styled";

export const SearchBox: FC = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  // const [search, setSearch] = useState(searchValue);
  // let timeout: NodeJS.Timeout;

  const onChange = (event: any) => {
    // clearTimeout(timeout);
    event.preventDefault();
    const value = event.target.value?.trim();
    setSearchValue(value);
    // timeout = setTimeout(() => setSearchValue(search), 500)
  };

  return (
    <SearchBoxStyled className="mb-3">
      <FontAwesomeIcon icon={faSearch} size="lg" />
      <Form.Control
        type="text"
        placeholder="Search Artist"
        value={searchValue}
        onChange={onChange}
      />
    </SearchBoxStyled>
  );
};
