import calendarApi from "../../src/api/calendarApi";

describe("Tests in calendarApi", () => {
  //' 1
  test("should have default config", () => {
    expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
  });

  //' 2
  test("should have x-token header in all requests", async () => {
    const token = "ABC-123-XYZ";
    localStorage.setItem("token", token);
    const res = await calendarApi.get("/auth");

    expect(res.config.headers["x-token"]).toBe(token);
  });
});
