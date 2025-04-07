import { useParams } from "react-router-dom";
import books from "../data/books.json";
import CommentArea from "./CommentArea";
import { Card, Container } from "react-bootstrap";

const BookDetails = () => {
  const { asin } = useParams();
  const book = books.find((b) => b.asin === asin);

  if (!book) {
    return (
      <Container className="mt-5 text-center">
        <h2>Libro non trovato 😢</h2>
      </Container>
    );
  }

  return (
    <Container className="mt-4 d-flex flex-column align-items-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      <CommentArea book={book} />
    </Container>
  );
};

export default BookDetails;