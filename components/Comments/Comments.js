import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { mutate } from "swr";

export default function Comments({ comments }) {
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedComment, setEditedComment] = useState("");

  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();
  async function handleDelete(ID) {
    const response = await fetch(`/api/comments/${ID}`, {
      method: "DELETE",
    });
    if (response.ok) {
      mutate(`/api/restaurants/${id}`);
    }
  }
  const handleEdit = (comment) => {
    setEditingCommentId(comment._id);
    setEditedComment(comment.comment);
  };

  async function handleSave(ID) {
    const update = { comment: editedComment };

    const response = await fetch(`/api/comments/${ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    });
    console.log("update", update);
    if (response.ok) {
      mutate(`/api/restaurants/${id}`);
      setEditingCommentId(null);
    }
  }

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment._id}>
          {editingCommentId === comment._id ? (
            <>
              <textarea
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
              />
              <button onClick={() => handleSave(comment._id)}>Save</button>
              <button onClick={() => setEditingCommentId(null)}>Cancel</button>
            </>
          ) : (
            <p>
              {comment.username} commented: {comment.comment}
              {comment.username === session?.user.name && (
                <>
                  <button
                    onClick={() => {
                      handleEdit(comment);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete(comment._id)}>x</button>
                </>
              )}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
