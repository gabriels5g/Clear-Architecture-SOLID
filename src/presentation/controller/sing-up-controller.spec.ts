import { SingUpController } from "./sing-up";
import { MissingParamError } from "../errors/missing-param-error";

describe("Sign Controller ", () => {
  it("Should return 400 if no name is provided", () => {
    const sut = new SingUpController();
    const httpsRequest = {
      body: {
        email: "any_email",
        password: "any_pass",
        passwordConfirmation: "any_password",
      },
    };
    const httpResponse = sut.handle(httpsRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("name"));
  });

  it("Should return 400 if no email is provided", () => {
    const sut = new SingUpController();
    const httpsRequest = {
      body: {
        name: "any_name",
        password: "any_pass",
        passwordConfirmation: "any_password",
      },
    };
    const httpResponse = sut.handle(httpsRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("email"));
  });
});
