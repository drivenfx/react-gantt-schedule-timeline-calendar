import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders gstc", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ID/i);
  expect(linkElement).toBeInTheDocument();
});
