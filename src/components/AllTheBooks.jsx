import { Container, Row, Col } from "react-bootstrap";
import books from "../data/books.json";
import SingleBook from "./SingleBook";

const AllTheBooks = ({ searchQuery, onBookSelect, selectedBook }) => {
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <Row>
        {filteredBooks.map((book) => (
          <Col key={book.asin} md={4} lg={3} className="mb-4">
            <SingleBook
              book={book}
              onBookSelect={onBookSelect}
              isSelected={book.asin === selectedBook?.asin}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;