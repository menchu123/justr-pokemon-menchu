import "whatwg-fetch";
import { render, screen } from "@testing-library/react";
import Pokemon from "../pages/pokemon";

describe("Given a Pokemon page", () => {
  describe("When it is rendered", () => {
    test("Then it should render a title and a list", () => {
      render(<Pokemon />);
      const title = screen.getByRole("heading", { name: "Pokemon CSR" });
      const list = screen.getByRole("list");

      expect(title).toBeInTheDocument();
      expect(list).toBeInTheDocument();
    });
  });
});
