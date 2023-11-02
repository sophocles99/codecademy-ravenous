import styled from "styled-components";

export const SortByBarContainer = styled.div`
  display: flex;
  width: 450px;
  height: 40px;
`;

export const SortByButton = styled.button`
  width: 150px;
  border: none;
  border-bottom: 2px solid white;
  font-family: inherit;
  font-size: ${({ selected }) => (selected ? "18px" : "16px")};
  font-weight: bold;
  color: white;
  background-color: transparent;
  opacity: ${({ selected }) => (selected ? "1" : "0.5")};
  &:hover {
    font-size: 18px;
  }
`;
