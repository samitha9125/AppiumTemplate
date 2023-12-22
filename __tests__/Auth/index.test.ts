import { client } from "../../jest.setup";
import { action } from "../helpers";

describe("Appium with Jest automation testing", () => {
  test("First test", async function () {
    await action(client, "click", "sign-in-button");
    await action(client, "setValue", "sign-in-email", "joe@doe.com");
    await action(client, "setValue", "sign-in-password", "User@123");
    await action(client, "click", "sign-in-next-button");
  });
});
