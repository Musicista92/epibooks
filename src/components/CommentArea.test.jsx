import { render, screen } from "@testing-library/react";
import AllTheBooks from "./AllTheBooks";
import books from "../data/books.json";
import { MemoryRouter } from "react-router-dom";
import { useState } from "react";

function WrapperComponent() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <MemoryRouter>
      <AllTheBooks
        searchQuery=""
        selectedBook={selectedBook}
        onBookSelect={setSelectedBook}
      />
    </MemoryRouter>
  );
}

test("non sono presenti i  commenti all'avvio perchè non è stato selezionato alcun libro", () => {
  render(<WrapperComponent />);
  const comments = screen.queryAllByTestId("single-comment");
  expect(comments.length).toBe(0);
});