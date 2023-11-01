import styled from "styled-components";

const BusinessCard = styled.article`
  width: 300px;
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
`;

const Name = styled.h2`
  font-family: quicksand, helvetica, sans-serif;
`;

const Details = styled.section`
  display: flex;
  justify-contents: space-between;
`;

const Business = () => {
  return (
    <BusinessCard>
      <Image src="" alt="" />
      <Name>MarginOtto Pizeria</Name>
      <Details></Details>
    </BusinessCard>
  );
};

export default Business;
