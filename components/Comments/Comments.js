export default function Comments({ comments }) {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment._id}>
          {comment.username} commented: {comment.comment}
        </li>
      ))}
    </ul>
  );
}
