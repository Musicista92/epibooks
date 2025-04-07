import { render, screen, fireEvent } from "@testing-library/react";
import AllTheBooks from "./AllTheBooks";
import books from "../data/books.json";

test("filtra il libro 'harry'", () => {
  render(
    <AllTheBooks
      searchQuery="harry"
      onBookSelect={() => {}}
      selectedBook={null}
    />
  );

  const titles = screen.getAllByText(/harry/i);
  expect(titles.length).toBeGreaterThan(0);
});