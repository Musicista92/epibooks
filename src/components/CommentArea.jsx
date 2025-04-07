import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const CommentArea = ({ book }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newRate, setNewRate] = useState(1);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${book.asin}/comments`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMWU0ODFlMTQwNjAwMTUzMTRkYmIiLCJpYXQiOjE3NDI4Mzc4NjksImV4cCI6MTc0NDA0NzQ2OX0.k3ADMveGT5B_WSUp85sGpkk19vDdU28kmQKr_OnNbic",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Errore recensioni");
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Errore fetch delle recensioni:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [book.asin]);

  const handleSubmit = async () => {
    const review = {
      comment: newComment,
      rate: newRate,
      elementId: book.asin,
    };

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMWU0ODFlMTQwNjAwMTUzMTRkYmIiLCJpYXQiOjE3NDI4Mzc4NjksImV4cCI6MTc0NDA0NzQ2OX0.k3ADMveGT5B_WSUp85sGpkk19vDdU28kmQKr_OnNbic",
          },
          body: JSON.stringify(review),
        }
      );

      if (response.ok) {
        setNewComment("");
        setNewRate(1);
        fetchComments();
      } else {
        throw new Error("Errore nell'invio del commento");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  const handleDelete = async (commentId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMWU0ODFlMTQwNjAwMTUzMTRkYmIiLCJpYXQiOjE3NDI4Mzc4NjksImV4cCI6MTc0NDA0NzQ2OX0.k3ADMveGT5B_WSUp85sGpkk19vDdU28kmQKr_OnNbic",
          },
        }
      );

      if (response.ok) {
        fetchComments();
      } else {
        throw new Error("Errore cancellazione del commento");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return (
    <div
      className="mt-3 p-3 border rounded bg-light"
      style={{
        minHeight: "150px",
        width: "100%",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h5>Recensioni</h5>
      <ul>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center" data-testid="single-comment">
              <span>
                <strong>{comment.rate}/5</strong> - {comment.comment}
              </span>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(comment._id)}
              >
                Cancella
              </Button>
            </li>
          ))
        ) : (
          <li className="list-group-item">Nessuna recensione disponibile</li>
        )}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="mt-3">
          <textarea
            className="form-control mb-2"
            placeholder="Scrivi una recensione..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>

          <select
            className="form-select mb-2"
            value={newRate}
            onChange={(e) => setNewRate(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n} ⭐
              </option>
            ))}
          </select>

          <button className="btn btn-primary w-100" type="submit">
            Invia la recensione
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentArea;