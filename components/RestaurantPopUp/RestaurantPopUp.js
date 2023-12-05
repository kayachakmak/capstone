import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const PopupContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

const RestaurantType = styled.p`
  color: #555;
  font-size: 1em;
  margin-bottom: 1em;
`;

const AnimalFriendlyImage = styled(Image)`
  margin: 10px auto;
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
  margin-bottom: 1em;
`;

const AddressLink = styled.a`
  display: block;
  color: #0077cc;
  text-decoration: none;
  margin-bottom: 1em;
  &:hover {
    text-decoration: underline;
  }
`;

const DetailsLinkText = styled.a`
  display: block;
  background-color: #0077cc;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  text-decoration: none;
  &:hover {
    background-color: #0056a3;
    text-decoration: none;
  }
`;

export default function RestaurantPopuP({ restaurant }) {
  return (
    <PopupContainer>
      <Title>{restaurant.name}</Title>
      <RestaurantType>{restaurant.type}</RestaurantType>

      <StyledImage
        src={restaurant.image}
        alt={restaurant.name}
        width={300}
        height={200}
        layout="responsive"
      />

      {restaurant.isAnimalFriendly ? (
        <AnimalFriendlyImage
          src="@/public/animal-friendly.svg"
          alt="Animal friendly logo"
          width={50}
          height={50}
        />
      ) : (
        <AnimalFriendlyImage
          src="/public/animal-unfriendly.svg"
          alt="Animal unfriendly logo"
          width={50}
          height={50}
        />
      )}

      <AddressLink
        href={`https://www.google.com/maps/?q=${restaurant.coordinates.lat},${restaurant.coordinates.long}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>Address:</strong> {restaurant.address}
      </AddressLink>

      <Link href={`/${restaurant._id}`} passHref>
        <DetailsLinkText>See More Details</DetailsLinkText>
      </Link>
    </PopupContainer>
  );
}
