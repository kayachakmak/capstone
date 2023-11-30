export default function CommentForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    event.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Enter Your Comment Here</label>
      <textarea name="comment" id="comment" cols="30" rows="10" />
      <button type="submit">Add your comment</button>
    </form>
  );
}
