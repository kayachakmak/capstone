import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const PopupContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 18, 13, 46);
  max-width: 350px;
  text-align: center;
  padding-top: 0px;
`;

const Title = styled.h2`
  color: brown;
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

const RestaurantType = styled.p`
  color: #555;
  font-size: 1em;
  margin-bottom: 1em;
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
  margin-bottom: 1em;
`;

const AddressLink = styled.a`
  display: block;
  color: plum;
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
      <div className="flex justify-end">
        {restaurant.isAnimalFriendly && (
          <Image
            src="https://img.freepik.com/premium-vector/pet-friendly-sign-stamp-with-paw-animal-icon-sticker-allowed-entrance-dog-cat_352905-715.jpg"
            alt="Animal friendly logo"
            width={60}
            height={60}
          />
        )}
        {restaurant.isChildFriendly && (
          <Image
            src="https://en.pimg.jp/028/868/870/1/28868870.jpg"
            alt="Child friendly logo"
            width={60}
            height={60}
          />
        )}
      </div>
      <Title>{restaurant.name}</Title>
      <RestaurantType>
        <strong>{restaurant.type}</strong>
      </RestaurantType>

      <StyledImage
        src={restaurant.image}
        alt={restaurant.name}
        width={300}
        height={200}
        layout="responsive"
      />

      <AddressLink
        href={`https://www.google.com/maps/?q=${restaurant.coordinates.lat},${restaurant.coordinates.long}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>Address:</strong> {restaurant.address}
      </AddressLink>

      <Link href={`/${restaurant._id}`} passHref>
        <DetailsLinkText>See More Details </DetailsLinkText>
      </Link>
    </PopupContainer>
  );
}
