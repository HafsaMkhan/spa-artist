import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { SearchBoxStyled } from "./searchBox.styled";

export const SearchBox: FC = () => {
  const { artist } = useParams<{ artist?: string}>();
  const { push } = useHistory();
  const [search, setSearch] = useState(artist || '');

  const onChange = (event: any) => {
    event.preventDefault();
    const value = event.target.value?.trim();
    setSearch(value);
  };

  useEffect(() => {
    push(`/${search}`)
  }, [search]);

  return (
    <SearchBoxStyled className="mb-3">
      <FontAwesomeIcon icon={faSearch} size="lg" />
      <Form.Control
        type="text"
        placeholder="Search Artist"
        value={search}
        onChange={onChange}
      />
    </SearchBoxStyled>
  );
};
