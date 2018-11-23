const services = require("../services/services");

describe("services", () => {
  describe("getAll()", () => {
    test("isArray", () => {
      const movies = services.getAll();

      expect(Array.isArray(movies)).toBe(true);
    });

    test("isHaveProperties", () => {
      const movies = services.getAll();

      movies.forEach(movie => {
        expect(movie).toHaveProperty("id");
      });
    });
  });
});
