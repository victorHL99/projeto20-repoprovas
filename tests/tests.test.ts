import supertest from "supertest";
import app from "../src/app";
import client from "../src/config/database";
import { testFactory } from "../tests/factories/testFactory";


describe("Create Tests suite", () => {

  it("Should create a new test", async () => {
    const test = testFactory.createTestData();

    const response = await supertest(app).post("/tests").send(test);

    expect(response.status).toBe(201);
  });

});

describe("Get Tests suite", () => {
  it("Should get all tests by disciplines", async () => {
    const response = await supertest(app).get(`/tests/disciplines`);
    expect(response.statusCode).toBe(200);
  });

  it("Should get all tests by Teacher", async () => {
    const response = await supertest(app).get(`/tests/teacher`);
    expect(response.statusCode).toBe(200);
  });
});