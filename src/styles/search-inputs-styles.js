import styled from "styled-components";

export const SearchInputsContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 2rem;
`;

export const SearchLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  gap: 0.5rem;
  color: white;
`;

export const SearchInput = styled.input`
  width: 400px;
  height: 40px;
  padding: 0 1rem;
  border: none;
  border-radius: 4px;
  outline: none;
  color: #eeeee;
  &::placeholder {
    color: #999;
  }
  &:focus,
  &:active {
    border: 2px solid #999;
  }
`;
