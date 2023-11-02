import { useState } from "react";
import SortByBar from "./SortByBar";
import SearchInputs from "./SearchInputs";
import {
  SearchButton,
  SearchFormContainer,
} from "./styles/SearchForm.styled";

const sortByOptions = [
  { name: "Best Match", value: "best_match" },
  { name: "Highest Rated", value: "rating" },
  { name: "Most Reviewed", value: "review_count" },
];

const SearchForm = () => {
  const [sortBy, setSortBy] = useState(0);
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");

  return (
    <>
      <SearchFormContainer>
        <SortByBar
          sortByOptions={sortByOptions}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <SearchInputs
          term={term}
          setTerm={setTerm}
          location={location}
          setLocation={setLocation}
        />
        <SearchButton>Let's Go</SearchButton>
      </SearchFormContainer>
    </>
  );
};

export default SearchForm;
