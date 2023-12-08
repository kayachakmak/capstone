import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { mutate } from "swr";
import styled from "styled-components";

const SpeechBalloon = styled.li`
  border: 2px solid ${(props) => props.borderColor};
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 15px;
  position: relative;
  background-color: #f0f0f0;
  &:after {
    content: "";
    position: absolute;
    border: 10px solid transparent;
    border-top-color: #f0f0f0;
    top: 100%;
    left: 20px;
  }
`;

function getRandomColor() {
  const colors = [
    "#FF6347",
    "#4682B4",
    "#32CD32",
    "#FFD700",
    "#DA70D6",
    "#FF69B4",
    "#87CEEB",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

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

    if (response.ok) {
      mutate(`/api/restaurants/${id}`);
      setEditingCommentId(null);
    }
  }

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {comments.map((comment) => (
        <SpeechBalloon key={comment._id} borderColor={getRandomColor()}>
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
        </SpeechBalloon>
      ))}
    </ul>
  );
}
