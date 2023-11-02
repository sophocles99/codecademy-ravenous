import styled from "styled-components";

export const Container = styled.article`
  width: 250px;
  margin: 2rem;
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Text = styled.div`
  padding: 0.5rem;
`;

export const Name = styled.h3`
  margin-bottom: 0.5rem;
`;

export const Details = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const Address = styled.div`
  font-size: 0.75rem;
  line-height: 1.3;
`;

export const Info = styled.div`
  text-align: right;
`;

export const Category = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  color: olive;
`;

export const Rating = styled.p`
  font-weight: bold;
  color: olive;
`;

export const Reviews = styled.p``;