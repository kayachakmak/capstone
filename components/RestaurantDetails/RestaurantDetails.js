import Link from "next/link";
import Image from "next/image";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

const customLoader = ({ src }) => {
  return src;
};

//hadi bakalım
export default function RestaurantDetails({ restaurant, comments }) {
  return (
    <>
      <Link href="/"> Go back </Link>
      <h1>{restaurant.name}</h1>
      <Image
        loader={customLoader}
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
      <CommentForm />
    </>
  );
}
