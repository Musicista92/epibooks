import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllTheBooks from "./AllTheBooks";
import books from "../data/books.json";

test("Renderizza tante Card quante sono le entry nel JSON", () => {
  render(
    <MemoryRouter>
      <AllTheBooks
        searchQuery=""
        onBookSelect={() => {}}
        selectedBook={null}
      />
    </MemoryRouter>
  );

  const cards = screen.getAllByRole("img"); 
  expect(cards.length).toBe(books.length);
});