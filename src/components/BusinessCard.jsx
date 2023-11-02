import {
  Container,
  Image,
  Text,
  Name,
  Details,
  Address,
  Info,
  Category,
  Rating,
  Reviews,
} from "./styles/BusinessCard.styled";

const BusinessCard = ({ business }) => {
  return (
    <Container>
      <Image src={business.imageSrc} alt={business.name} />
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
    </Container>
  );
};

export default BusinessCard;
