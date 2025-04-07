import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const SingleBook = ({ book, onBookSelect, isSelected }) => {
  return (
    <Card style={{ height: "100%" }}>
      <Card.Img
        variant="top"
        src={book.img}
        onClick={() => onBookSelect(book)}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "300px",
          objectFit: "cover",
          border: isSelected ? "3px solid red" : "none",
          cursor: "pointer"
        }}
      />
     <Card.Body className="d-flex flex-column justify-content-between" style={{ height: "100%" }}>
  <div>
    <Card.Title>{book.title}</Card.Title>
    <Link to={`/details/${book.asin}`} className="btn btn-info mt-2">
      dettagli
    </Link>
  </div>
</Card.Body>
    </Card>
  );
};

export default SingleBook;