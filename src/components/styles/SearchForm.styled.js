import styled from "styled-components";

export const SearchFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 450px;
  background-image: url("/background_search_desktop.jpg");
  background-size: cover;
  @media (max-width: 548px) {
    background-image: url("/background_search_mobile.jpg");
  }
`;

export const SearchButton = styled.button`
  width: 120px;
  height: 50px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 18px;
  font-weight: bold;
  background-color: var(--accent-colour);
  color: white;
  &:hover {
    font-size: 20px;
  }
  &:active {
    transform: scale(0.98);
  }
`;
