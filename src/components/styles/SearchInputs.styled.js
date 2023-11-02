import styled from "styled-components";

export const SearchInputsContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  gap: 2rem;
  @media (max-width: 936px) {
    flex-direction: column;
  }
  @media (max-width: 548px) {
    width: 300px;
  }
`;

export const SearchLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  gap: 0.5rem;
  color: white;
`;

export const SearchInput = styled.input`
  width: 420px;
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
    border: 2px solid var(--accent-colour);
  }
  @media (max-width: 548px) {
    width: 300px;
  }
`;
