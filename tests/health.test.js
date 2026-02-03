const request = require("supertest");
const app = require("../app");

describe("users api", () => {
  it("return status ok test", async () => {
    const res = await request(app).get("/api/user/test");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });

});
