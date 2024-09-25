import { render, screen } from "@testing-library/react";
import Index from "../routes/_index";

test("renders the component with the correct text", () => {
  render(<Index />);
  expect(screen.getByText("Feira")).toBeInTheDocument();
});
