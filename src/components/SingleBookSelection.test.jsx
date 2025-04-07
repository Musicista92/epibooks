import { render, screen, fireEvent } from "@testing-library/react";
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

test("il bordo rosso appare solo sul libro selezionato", () => {
  render(<WrapperComponent />);

  const images = screen.getAllByRole("img");

  fireEvent.click(images[0]);
  expect(images[0]).toHaveStyle("border: 3px solid red");
  expect(images[1]).not.toHaveStyle("border: 3px solid red");

  fireEvent.click(images[1]);
  expect(images[0]).not.toHaveStyle("border: 3px solid red");
  expect(images[1]).toHaveStyle("border: 3px solid red");
});