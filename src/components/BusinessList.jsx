import styled from "styled-components";
import Business from "./Business";

// ** currently hard-coded **
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

const businesses = new Array(6).fill(business);

const BusinessGrid = styled.div`
  display: grid;
  gap: 3rem;
`;

const BusinessList = () => {
  return (
    <BusinessGrid>
      {businesses.map((business) => (
        <Business business={business} />
      ))}
    </BusinessGrid>
  );
};

export default BusinessList;
