import styled from "styled-components";

const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const BusinessCard = styled.article`
  width: 250px;
  font-family: arial, helvetica, sans-serif;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
`;

const Text = styled.div`
  padding: 0.5rem;
`;

const Name = styled.h3`
  margin-bottom: 0.5rem;
`;

const Details = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Address = styled.div`
  font-size: 0.75rem;
  line-height: 1.3;
`;

const Info = styled.div`
  text-align: right;
`;

const Category = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  color: olive;
`;

const Rating = styled.p`
  font-weight: bold;
  color: olive;
`;

const Reviews = styled.p``;

const Business = () => {
  return (
    <BusinessCard>
      <Image src={business.imageSrc} alt="MarginOtto Pizeria" />
      <Text>
        <Name>MarginOtto Pizeria</Name>
        <Details>
          <Address>
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>
              {business.state} {business.zipCode}
            </p>
          </Address>
          <Info>
            <Category>{business.category}</Category>
            <Rating>
              {business.rating} star{business.rating !== 1 ? "s" : ""}
            </Rating>
            <Reviews>
              {business.reviewCount} review{business.reviewCount > 1 ? "s" : ""}
            </Reviews>
          </Info>
        </Details>
      </Text>
    </BusinessCard>
  );
};

export default Business;
