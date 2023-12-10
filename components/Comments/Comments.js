import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { mutate } from "swr";
import Image from "next/image";

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
    <ul className="list-none p-0">
      {comments.map((comment) => (
        <li
          key={comment._id}
          className="bg-gray-800 text-white rounded-lg my-4 overflow-hidden relative"
        >
          {editingCommentId === comment._id ? (
            <div className="p-4">
              <textarea
                className="w-full p-2 text-black"
                cols={50}
                rows={10}
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
              />
              <div className="flex justify-between mt-2 ">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleSave(comment._id)}
                >
                  Save
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setEditingCommentId(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-start space-x-4 p-4">
              <img
                className="w-12 h-12 rounded-full"
                src={comment.userimage}
                alt={comment.username}
              />
              <div className="flex-1">
                <strong>@{comment.username}</strong> commented on {comment.date}
                <p className="italic">`{comment.comment}`</p>
                {comment.username === session?.user.name && (
                  <div className="absolute top-2 right-4 flex space-x-2">
                    <button
                      className="p-1"
                      onClick={() => {
                        handleEdit(comment);
                      }}
                    >
                      <Image
                        src="https://i.ibb.co/nbLJ2kQ/edit.png"
                        alt="Edit"
                        width={20}
                        height={20}
                      />
                    </button>
                    <button
                      className="p-1"
                      onClick={() => handleDelete(comment._id)}
                    >
                      <Image
                        src="https://i.ibb.co/F85nyhC/bin.png"
                        alt="Delete"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
