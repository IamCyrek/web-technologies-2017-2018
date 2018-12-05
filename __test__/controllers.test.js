const constants = require("../config/constants");
const controllers = require("../controllers/controllers");
const services = require("../services/services");

describe("controllers", () => {
  test("mock test 'all'", () => {
    const send = jest.fn();
    const req = {};
    const res = { send };

    controllers.all(req, res);

    expect(send.mock.calls).toHaveLength(1);
    expect(send).toBeCalledWith(services.getAll());
  });

  test("mock test 'id'", () => {
    const send = jest.fn();
    const req = { params: { id: 335983 } };
    const res = { send };

    controllers.id(req, res);

    expect(send.mock.calls).toHaveLength(1);
    expect(send).toBeCalledWith(services.getById(335983));
  });

  test("mock test 'title'", () => {
    const send = jest.fn();
    const req = { params: { title: "Venom" } };
    const res = { send };

    controllers.title(req, res);

    expect(send.mock.calls.length).toBe(1);
    expect(send).toBeCalledWith(services.getByTitle("Venom"));
  });

  test("mock test 'pagination'", () => {
    const send = jest.fn();
    const req = { params: { offset: 10, limit: 2 } };
    const res = { send };

    controllers.pagination(req, res);

    expect(send.mock.calls.length).toBe(1);
    expect(send).toBeCalledWith(services.getByPagination(10, 2));
  });

  test("mock test 'sortingWithDirection'", () => {
    const send = jest.fn();
    const req = {
      params: { field: "id", direction: constants.DESCENDING_ORDER }
    };
    const res = { send };

    controllers.sortingWithDirection(req, res);

    expect(send.mock.calls.length).toBe(1);
    expect(send).toBeCalledWith(
      services.getBySorting("id", constants.DESCENDING_ORDER)
    );
  });

  test("mock test 'sorting'", () => {
    const send = jest.fn();
    const req = {
      params: { field: "id" }
    };
    const res = { send };

    controllers.sorting(req, res);

    expect(send.mock.calls.length).toBe(1);
    expect(send).toBeCalledWith(
      services.getBySorting("id", constants.ASCENDING_ORDER)
    );
  });
});
