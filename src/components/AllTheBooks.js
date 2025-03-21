import { Container, Row, Col, Card } from "react-bootstrap";
import books from "../data/books.json"; // Importiamo i libri dal JSON

const AllTheBooks = () => (
  <Container className="mt-4">
    <Row>
      {books.map((book) => (
        <Col key={book.asin} md={4} lg={3} className="mb-4">
          
          <Card style={{ height: "100%" }}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default AllTheBooks;