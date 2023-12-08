import Link from "next/link";
import Image from "next/image";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import { useSession } from "next-auth/react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const BackLink = styled.a`
  display: inline-block;
  color: #0066cc;
  margin-bottom: 25px;
  font-size: 1em;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5em;
  margin-bottom: 15px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ExternalLink = styled.a`
  display: block;
  color: #0077cc;
  margin: 10px 0;
  font-size: 1.1em;
  text-decoration: none;
  &:hover {
    color: #0056a3;
    text-decoration: underline;
  }
`;

const Address = styled.p`
  font-size: 1.1em;
  color: #555;
  margin-bottom: 20px;
`;

const DirectionLink = styled(ExternalLink)`
  font-weight: bold;
  color: #008000;
  &:hover {
    color: #006400;
  }
`;

const CommentsSection = styled.div`
  margin-top: 30px;
`;

export default function RestaurantDetails({ restaurant, comments }) {
  const { data: session } = useSession();

  return (
    <Container>
      <Link href="/" passHref>
        <BackLink>Go back</BackLink>
      </Link>
      <Title>{restaurant.name}</Title>
      <StyledImage src={restaurant.image} alt={restaurant.name} />
      <ExternalLink href={restaurant.link} target="_blank">
        Visit {restaurant.name}`s website
      </ExternalLink>
      <ExternalLink href={restaurant.menu} target="_blank">
        See the menu
      </ExternalLink>
      <Address>
        <strong>Address:</strong> {restaurant.address}
      </Address>
      <DirectionLink
        href={`https://www.google.com/maps/?q=${restaurant.coordinates.lat},${restaurant.coordinates.long}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get the directions on Google Maps
      </DirectionLink>
      <CommentsSection>
        <Comments comments={comments} />
        {session && <CommentForm />}
      </CommentsSection>
    </Container>
  );
}
