import RestaurantDetails from "@/components/RestaurantDetails/RestaurantDetails";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function RestaurantDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR("/api/restaurants");

  if (isLoading) <h1>Loading...</h1>;

  if (!data) {
    return;
  }
  const restaurant = data.find((data) => data._id === id);

  if (!restaurant) {
    return null;
  }

  return <RestaurantDetails restaurant={restaurant} />;
}
