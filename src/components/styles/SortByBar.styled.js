import styled from "styled-components";

export const SortByBarContainer = styled.div`
  display: flex;
  width: 420px;
  height: 40px;
  margin-bottom: 2rem;
  @media (max-width: 548px) {
    width: 300px;
    height: 80px;
  }
`;

export const SortByButton = styled.button`
  width: 140px;
  border: none;
  border-bottom: 2px solid white;
  font-family: inherit;
  font-size: ${({ selected }) => (selected ? "18px" : "16px")};
  font-weight: bold;
  color: white;
  background-color: transparent;
  opacity: ${({ selected }) => (selected ? "1" : "0.7")};
  &:hover {
    font-size: 18px;
  }
  @media (max-width: 548px) {
    width: 100px;
  }
`;
