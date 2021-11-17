import "whatwg-fetch";
import { render, screen, waitFor } from "@testing-library/react";
import Pokemon from "../pages/pokemon";
import server from "../__mocks__/server";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

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

  describe("When it's rendered", () => {
    test("Then it should show the names of the pokemons loaded", async () => {
      render(<Pokemon />);

      waitFor(() => {
        const pokemon1 = screen.findByText("Lapris");
        expect(pokemon1).toBeInTheDocument();
      });
    });
  });
});
