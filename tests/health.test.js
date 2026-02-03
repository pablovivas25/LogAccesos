const request = require("supertest");
const app = require("../app");

describe("users api", () => {
  it("return status ok all users", async () => {
    const res = await request(app).get("/api/user/");

    expect(res.statusCode).toBe(200);
   // expect(res.body).toEqual({ status: "ok" });
  });

  it("return status ok id user",async ()=>{
    const res=await request(app).get("/api/user/1");

    expect(res.statusCode).toBe(200);
  })
});
