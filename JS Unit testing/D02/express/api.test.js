const request = require("supertest");
const app = require("./app");

describe("api testing", () => {
  test("should get users and login", async () => {
    const usersRequest = request(app).get("/users");

    const loginRequest = request(app).post("/login").send({
      username: "mazen",
      password: "Mazen@2003",
    });

    const [usersResponse, loginResponse] = await Promise.all([
      usersRequest,
      loginRequest,
    ]);

    expect(usersResponse.status).toBe(200);
    expect(loginResponse.status).toBe(201);

    expect(Array.isArray(usersResponse.body.users)).toBe(true);

    expect(usersResponse.body.users.length).toBe(2);

    expect(loginResponse.body).toHaveProperty("message", "login success");
    expect(loginResponse.body).toHaveProperty("token", "fake-jwt-token");
  });
});
