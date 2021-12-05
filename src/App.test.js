import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders todoForm", () => {
  render(<App />);
  const todoForm = screen.getByText(/add task/i);
  expect(todoForm).toBeInTheDocument();
});
