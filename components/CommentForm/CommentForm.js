import { useRouter } from "next/router";
import { mutate } from "swr";
import { useSession } from "next-auth/react";

export default function CommentForm() {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    event.target.reset();
    data.restaurantID = id;
    data.username = session.user.name;
    console.log(data);

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        mutate(`/api/restaurants/${id}`);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Enter Your Comment Here</label>
      <textarea name="comment" id="comment" cols="30" rows="10" required />
      <button type="submit">Add your comment</button>
    </form>
  );
}
