import { useState } from "react";
import { Card } from "react-bootstrap";

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false); 

  const toggleSelection = () => {
    setSelected(!selected);
  };

  return (
    <Card style={{ height: "100%" }}>
      <Card.Img
        variant="top"
        src={book.img}
        onClick={toggleSelection} 
        style={{
            width: "100%", 
            height: "auto", 
            maxHeight: "300px", 
            objectFit: "cover",
            border: selected ? "3px solid red" : "none",
            cursor: "pointer"
        }}
      />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;