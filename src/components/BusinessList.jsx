import { BusinessListContainer } from "./styles/BusinessList.styled";
import BusinessCard from "./BusinessCard";

const BusinessList = ({ businesses }) => {
  return (
    <BusinessListContainer>
      {businesses.map((business, index) => (
        <BusinessCard business={business} key={index} />
      ))}
    </BusinessListContainer>
  );
};

export default BusinessList;
