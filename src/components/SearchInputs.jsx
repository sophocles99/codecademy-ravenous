import {
  SearchInputsContainer,
  SearchInput,
  SearchLabel,
} from "../styles/search-inputs-styles";

const SearchInputs = ({ term, setTerm, location, setLocation }) => {
  return (
    <SearchInputsContainer>
      <SearchLabel htmlFor="term">
        Search businesses
        <SearchInput
          id="term"
          type="text"
          placeholder="Search businesses"
          value={term}
          onChange={(e) => {
            console.log(e.target.value);
            setTerm(e.target.value);
          }}
        />
      </SearchLabel>
      <SearchLabel htmlFor="location">
        Location
        <SearchInput
          id="location"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => {
            console.log(e.target.value);
            setLocation(e.target.value);
          }}
        />
      </SearchLabel>
    </SearchInputsContainer>
  );
};

export default SearchInputs;
