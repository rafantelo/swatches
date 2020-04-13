const swatchMiddleware = require("./swatch");
const httpMocks = require("node-mocks-http");

test("A request with correct body", async () => {
  const request = httpMocks.createRequest({
    method: "POST",
    url: "/",
    body: {
      active: true,
      name: "aaa",
      price: 15,
      image: "",
      thumb: "",
      color: "#111111"
    }
  });
  const response = httpMocks.createResponse();
  const result = await new Promise(resolve => {
    swatchMiddleware.validateSwatchParams(request, response, err => {
        if (err) {
          resolve(err);
        } else {
          resolve(response.status);
        }
    });
  });
  expect(typeof result).toBe("function");
});


test("A request with incorrect body", async () => {
  const request = httpMocks.createRequest({
    method: "POST",
    url: "/",
    body: {
      active: true,
      price: 15,
      image: "",
      thumb: "",
      color: "#111111"
    }
  });
  const response = httpMocks.createResponse();
  const result = await new Promise(resolve => {
    swatchMiddleware.validateSwatchParams(request, response, err => {
        if (err) {
          resolve(err);
        } else {
          resolve(response);
        }
    });
  });
  expect(result.status).toBe(400);
});

