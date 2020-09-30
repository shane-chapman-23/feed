import request from "supertest";
import server from "../server";

import { getFavourites } from "../db";

jest.mock("../db", () => ({
  getFavourites: jest.fn(),
}))

describe("/api/favourites/:id", () => {
  test("returns favourite recipe", () => {
    expect.assertions(2)
    getFavourites.mockImplementation(() =>
      Promise.resolve([{ id: 1, recipe_name: "Beef Kebabs" }])
    )
    return request(server)
      .get("/api/favourites/:id")
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.length).toBe(1)
      })
  })
})
