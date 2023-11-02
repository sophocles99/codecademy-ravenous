import styled from "styled-components";
import { Container } from "../styles/business-list-styles";
import BusinessCard from "./BusinessCard";

// ** currently hard-coded **
const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavourtown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};
const businesses = new Array(8).fill(business);

const BusinessList = () => {
  return (
    <Container>
      {businesses.map((business, index) => (
        <BusinessCard business={business} key={index}/>
      ))}
    </Container>
  );
};

export default BusinessList;
