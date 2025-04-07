import { render, screen, fireEvent } from "@testing-library/react";
import SingleBook from "./SingleBook";
import React from "react";

const mockBook = {
  title: "Harry Potter e la Pietra Filosofale",
  img: "https://picsum.photos/200",
  asin: "0000",
};

test("aggiunge  bordo rosso quando il libro è selezionato", () => {
  const { container } = render(
    <SingleBook
      book={mockBook}
      isSelected={true}
      onBookSelect={() => {}}
    />
  );

  const img = container.querySelector("img");
  expect(img).toHaveStyle("border: 3px solid red");
});

test("non ha bordo rosso quando il libro non è selezionato", () => {
  const { container } = render(
    <SingleBook
      book={mockBook}
      isSelected={false}
      onBookSelect={() => {}}
    />
  );

  const img = container.querySelector("img");
  expect(img).not.toHaveStyle("border: 3px solid red");
});