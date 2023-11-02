import styled from "styled-components";

export const SearchFormBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 450px;
  background-image: url("../../public/essential-spices.jpg");
  background-size: cover;
  filter: brightness(40%);
  z-index: -1;
`;

export const SearchFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 450px;
`;

export const SearchButton = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 18px;
  font-weight: bold;
  background-color: var(--accent-colour);
  color: white;
  &:active {
    transform: scale(0.98);
  }
`;
