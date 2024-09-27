import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../routes/_index";
import AboutPage from "../../routes/about";

jest.mock("@remix-run/react", () => {
  const actual = jest.requireActual("@remix-run/react");
  return {
    ...actual,
    useNavigate: jest.fn(),
    useParams: jest.fn(),
  };
});

test("renders home page and navigates to about page", () => {
  // Use MemoryRouter to simulate navigation
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </MemoryRouter>
  );

  // Verify that the home page is rendered
  expect(screen.getByText(/Big Title/i)).toBeInTheDocument();

  // Simulate navigation by changing the route
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </MemoryRouter>
  );

  // Verify that the about page is rendered
  expect(screen.getByText(/About/i)).toBeInTheDocument();
});
