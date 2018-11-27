const services = require("../services/services");
const constants = require("../config/constants");

describe("services", () => {
  describe("getAll()", () => {
    test("isArray", () => {
      const movies = services.getAll();

      expect(Array.isArray(movies)).toBe(true);
    });

    test("is have properties", () => {
      const movies = services.getAll();

      movies.forEach(movie => {
        expect(movie).toHaveProperty("vote_count");
        expect(movie).toHaveProperty("id");
        expect(movie).toHaveProperty("video");
        expect(movie).toHaveProperty("vote_average");
        expect(movie).toHaveProperty("title");
        expect(movie).toHaveProperty("popularity");
        expect(movie).toHaveProperty("poster_path");
        expect(movie).toHaveProperty("original_language");
        expect(movie).toHaveProperty("original_title");
        expect(movie).toHaveProperty("genre_ids");
        expect(movie).toHaveProperty("backdrop_path");
        expect(movie).toHaveProperty("adult");
        expect(movie).toHaveProperty("overview");
        expect(movie).toHaveProperty("release_date");
      });
    });
  });

  describe("getById(id)", () => {
    test("isObject where id is 335983", () => {
      const movie = services.getById(335983);

      expect(typeof movie).toBe("object");
    });

    test("is have properties with right value for movie with id 335983", () => {
      const movie = services.getById(335983);

      expect(movie).toHaveProperty("vote_count");
      expect(movie).toHaveProperty("id", 335983);
      expect(movie).toHaveProperty("video", false);
      expect(movie).toHaveProperty("vote_average");
      expect(movie).toHaveProperty("title", "Venom");
      expect(movie).toHaveProperty("popularity");
      expect(movie).toHaveProperty(
        "poster_path",
        "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg"
      );
      expect(movie).toHaveProperty("original_language", "en");
      expect(movie).toHaveProperty("original_title");
      expect(movie).toHaveProperty("genre_ids");
      expect(movie).toHaveProperty(
        "backdrop_path",
        "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg"
      );
      expect(movie).toHaveProperty("adult", false);
      expect(movie).toHaveProperty("overview");
      expect(movie).toHaveProperty("release_date", "2018-10-03");
    });

    test("validation(id -1)", () => {
      const movie = services.getById(-1);

      expect(movie).toBeUndefined();
    });
  });

  describe("getByTitle(title)", () => {
    test("isArray where title is 'venom'", () => {
      const movies = services.getByTitle("venom");

      expect(Array.isArray(movies)).toBe(true);
    });

    test("is have propertie with right value for movie with title 'venom'", () => {
      const movies = services.getByTitle("Venom");

      expect(movies.length).toBe(3);
      expect(movies[0]).toHaveProperty("title", "Venom");
    });

    test("validation where title is 'a'", () => {
      const movies = services.getByTitle("a");

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBeGreaterThan(100);
    });

    test("validation where title is incorrect", () => {
      const movies = services.getByTitle("venomssss");

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBe(0);
    });
  });

  describe("getByPagination(offset, limit)", () => {
    test("isArray where pagination offset 10 and limit 2", () => {
      const movies = services.getByPagination(10, 2);

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBe(2);
    });

    test("isArray where pagination offset 10 and limit 0", () => {
      const movies = services.getByPagination(10, -2);

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBe(0);
    });
  });

  describe("getBySorting(field, direction)", () => {
    test("isArray after sorting with field id and ascending order", () => {
      const movies = services.getBySorting("id", constants.ASCENDING_ORDER);

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBeGreaterThan(1);
      expect(movies[0].id < movies[1].id).toBe(true);
    });

    test("isArray after sorting with field id and descending order", () => {
      const movies = services.getBySorting("id", constants.DESCENDING_ORDER);

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBeGreaterThan(1);
      expect(movies[0].id > movies[1].id).toBe(true);
    });
  });
});
