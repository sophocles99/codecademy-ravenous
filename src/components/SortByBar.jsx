import { useState } from "react";
import {
  SortByButton,
  SortByButtonContainer,
} from "../styles/sort-by-bar-styles";

const sortByOptions = [
  { name: "Best Match", value: "best_match" },
  { name: "Highest Rated", value: "rating" },
  { name: "Most Reviewed", value: "review_count" },
];

const SortByBar = () => {
  const [selectedSortByOption, setSelectedSortByOption] = useState(0);

  return (
    <SortByButtonContainer>
      {sortByOptions.map((sortByOption, index) => (
        <SortByButton
          key={index}
          selected={index === selectedSortByOption ? true : false}
          onClick={(e) => {
            console.log(index);
            setSelectedSortByOption(index);
          }}
        >
          {sortByOption.name}
        </SortByButton>
      ))}
    </SortByButtonContainer>
  );
};

export default SortByBar;
