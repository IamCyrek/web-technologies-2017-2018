const request = require("supertest");
const server = require("../server");
const constants = require("../config/constants");

describe("Integration test", () => {
  test("GET /all", done => {
    request(server)
      .get("/all")
      .then(response => {
        expect(response.statusCode).toBe(200);

        const movies = response.body;
        expect(Array.isArray(movies)).toBe(true);
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

        done();
      });
  });

  test("GET /id/335983", done => {
    request(server)
      .get("/id/335983")
      .then(response => {
        expect(response.statusCode).toBe(200);

        const movie = response.body;
        expect(typeof movie).toBe("object");
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

        done();
      });
  });

  test("GET /id/-1", done => {
    request(server)
      .get("/id/-1")
      .then(response => {
        expect(response.statusCode).toBe(400);

        const movie = response.body;
        expect(typeof movie).toBe("object");
        expect(movie).toHaveProperty("isJoi", true);
        expect(movie).toHaveProperty("name", "ValidationError");
        expect(movie).toHaveProperty("details");
        expect(movie).toHaveProperty("_object");

        done();
      });
  });

  test("GET /title/Venom", done => {
    request(server)
      .get("/title/Venom")
      .then(response => {
        expect(response.statusCode).toBe(200);

        const movies = response.body;
        expect(Array.isArray(movies)).toBe(true);
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

        done();
      });
  });

  test("GET /pagination/10&3", done => {
    request(server)
      .get("/pagination/10&3")
      .then(response => {
        expect(response.statusCode).toBe(200);

        const movies = response.body;
        expect(Array.isArray(movies)).toBe(true);
        expect(movies.length).toBe(3);
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

        done();
      });
  });

  test("GET /pagination/-1&3", done => {
    request(server)
      .get("/pagination/-1&3")
      .then(response => {
        expect(response.statusCode).toBe(400);

        const movie = response.body;
        expect(typeof movie).toBe("object");
        expect(movie).toHaveProperty("isJoi", true);
        expect(movie).toHaveProperty("name", "ValidationError");
        expect(movie).toHaveProperty("details");
        expect(movie).toHaveProperty("_object");

        done();
      });
  });

  test("GET /pagination/10&0", done => {
    request(server)
      .get("/pagination/10&0")
      .then(response => {
        expect(response.statusCode).toBe(400);

        const movie = response.body;
        expect(typeof movie).toBe("object");
        expect(movie).toHaveProperty("isJoi", true);
        expect(movie).toHaveProperty("name", "ValidationError");
        expect(movie).toHaveProperty("details");
        expect(movie).toHaveProperty("_object");

        done();
      });
  });

  test("GET /pagination/10&11", done => {
    request(server)
      .get("/pagination/10&11")
      .then(response => {
        expect(response.statusCode).toBe(400);

        const movie = response.body;
        expect(typeof movie).toBe("object");
        expect(movie).toHaveProperty("isJoi", true);
        expect(movie).toHaveProperty("name", "ValidationError");
        expect(movie).toHaveProperty("details");
        expect(movie).toHaveProperty("_object");

        done();
      });
  });

  test("GET /sort/id", done => {
    request(server)
      .get("/sort/id")
      .then(response => {
        expect(response.statusCode).toBe(200);

        const movies = response.body;
        expect(Array.isArray(movies)).toBe(true);
        expect(movies.length).toBeGreaterThan(1);

        for (let i = 0; i < movies.size - 1; i++)
          expect(movies[i].id < movies[i + 1].id).toBe(true);

        done();
      });
  });

  test("GET /sort/id/" + constants.ASCENDING_ORDER, done => {
    request(server)
      .get("/sort/id/" + constants.ASCENDING_ORDER)
      .then(response => {
        expect(response.statusCode).toBe(200);

        const movies = response.body;
        expect(Array.isArray(movies)).toBe(true);
        expect(movies.length).toBeGreaterThan(1);

        for (let i = 0; i < movies.size - 1; i++)
          expect(movies[i].id < movies[i + 1].id).toBe(true);

        done();
      });
  });

  test("GET /sort/id/" + constants.DESCENDING_ORDER, done => {
    request(server)
      .get("/sort/id/" + constants.DESCENDING_ORDER)
      .then(response => {
        expect(response.statusCode).toBe(200);

        const movies = response.body;
        expect(Array.isArray(movies)).toBe(true);
        expect(movies.length).toBeGreaterThan(1);

        for (let i = 0; i < movies.size - 1; i++)
          expect(movies[i].id > movies[i + 1].id).toBe(true);

        done();
      });
  });

  test("GET /sort/id/fajsdlkf", done => {
    request(server)
      .get("/sort/id/fajsdlkf")
      .then(response => {
        expect(response.statusCode).toBe(400);

        const movie = response.body;
        expect(typeof movie).toBe("object");
        expect(movie).toHaveProperty("isJoi", true);
        expect(movie).toHaveProperty("name", "ValidationError");
        expect(movie).toHaveProperty("details");
        expect(movie).toHaveProperty("_object");

        done();
      });
  });
});
