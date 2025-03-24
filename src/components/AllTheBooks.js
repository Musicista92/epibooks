import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import books from "../data/books.json";
import SingleBook from "./SingleBook";

const AllTheBooks = () => {
  const [searchTerm, setSearchTerm] = useState(""); 

  return (
    <Container className="mt-4">
      {}
      <input
        type="text"
        placeholder="Cerca un libro..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-3"
      />

      {}
      <Row>
        {books
          .filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((book) => (
            <Col key={book.asin} md={4} lg={3} className="mb-4">
              <SingleBook book={book} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;