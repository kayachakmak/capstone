import Link from "next/link";
import Image from "next/image";

const customLoader = ({ src }) => {
  return src;
};

export default function RestaurantPopuP({ restaurant }) {
  return (
    <>
      <h2>{restaurant.name}</h2>
      <p>
        {restaurant.type.map((type, index) => (
          <strong key={index}> |{type}|</strong>
        ))}
      </p>
      <p>
        {restaurant.isAnimalFriendly ? (
          <Image
            loader={customLoader}
            src="@/public/animal-friendly.svg"
            alt="animal friendly logo"
            width={100}
            height={100}
          />
        ) : (
          <Image
            src="/public/animal-unfriendly.svg"
            alt="animal unfriendly logo"
            width={10}
            height={10}
          />
        )}
      </p>
      <Image
        loader={customLoader}
        src={restaurant.image}
        alt={restaurant.name}
        width={100}
        height={100}
      />
      <a
        href={`https://www.google.com/maps/?q=${restaurant.coordinates.lat},${restaurant.coordinates.long}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>Address:</strong> {restaurant.address}
      </a>
      <Link href={`/${restaurant._id}`}> Click to see more details</Link>
    </>
  );
}
