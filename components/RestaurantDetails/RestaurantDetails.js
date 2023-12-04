import Link from "next/link";
import Image from "next/image";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import { useSession } from "next-auth/react";

export default function RestaurantDetails({ restaurant, comments }) {
  const { data: session } = useSession();
  return (
    <>
      <Link href="/"> Go back </Link>
      <h1>{restaurant.name}</h1>
      <Image
        src={restaurant.image}
        alt={restaurant.name}
        width={300}
        height={400}
      />
      <Link href={restaurant.link} target="_blank">
        Visit the {restaurant.name}`s website
      </Link>
      <Link href={restaurant.menu} target="_blank">
        See the menu
      </Link>
      <Comments comments={comments} />
      {session && <CommentForm />}
    </>
  );
}
