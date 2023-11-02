import { SortByButton, SortByBarContainer } from "../styles/sort-by-bar-styles";

const SortByBar = ({ sortByOptions, sortBy, setSortBy }) => {
  return (
    <SortByBarContainer>
      {sortByOptions.map((sortByOption, index) => (
        <SortByButton
          key={index}
          selected={index === sortBy ? true : false}
          onClick={() => setSortBy(index)}
        >
          {sortByOption.name}
        </SortByButton>
      ))}
    </SortByBarContainer>
  );
};

export default SortByBar;
