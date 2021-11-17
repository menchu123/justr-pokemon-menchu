// src/mocks/handlers.js
import { rest } from "msw";

const handlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon", async (req, res, ctx) => {
    const resp = res(
      ctx.json({
        results: [
          {
            name: "Lapris",
            id: 1,
            url: "https://pokeapi.co/api/v2/pokemon/131/",
          },
          {
            name: "Chansey",
            id: 2,
            url: "https://pokeapi.co/api/v2/pokemon/113/",
          },
        ],
      })
    );
    return resp;
  }),
];

export default handlers;
