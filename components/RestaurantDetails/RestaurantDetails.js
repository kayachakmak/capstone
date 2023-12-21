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
  position: relative;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5em;
  margin-bottom: 15px;
  text-align: center;
`;

const StyledImage = styled.img`
  display: block; /* Add this to ensure it's a block-level element */
  width: 50%;
  height: auto;
  margin-left: auto; /* Center the image */
  margin-right: auto; /* Center the image */
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

const DirectionLink = styled(ExternalLink)`
  font-weight: bold;
  color: #008000;
  &:hover {
    color: #006400;
  }
`;
const LeftAlignedLink = styled(ExternalLink)`
  text-align: left;
  margin-left: 20px;
`;

const RightAlignedText = styled.p`
  text-align: right;
  margin-right: 4px;
  /* Rest of your styles */
`;
const CommentsSection = styled.div`
  margin-top: 30px;
`;

export default function RestaurantDetails({ restaurant, comments }) {
  const { data: session } = useSession();

  return (
    <Container>
      <Link
        href="/"
        className="inline-flex px-5 py-2 text-sm ml-16 text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
      >
        <svg
          className="w-5 h-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span>Go back</span>
      </Link>

      <Title>{restaurant.name}</Title>
      <StyledImage src={restaurant.image} alt={restaurant.name} />
      <LeftAlignedLink href={restaurant.link} target="_blank">
        Visit {restaurant.name}`s website
      </LeftAlignedLink>
      <LeftAlignedLink href={restaurant.menu} target="_blank">
        See the menu
      </LeftAlignedLink>
      <RightAlignedText>
        <strong>Address:</strong> {restaurant.address}
      </RightAlignedText>
      <DirectionLink
        className="text-right mr-5"
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
