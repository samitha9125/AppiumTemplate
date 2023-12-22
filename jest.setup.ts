import { RemoteOptions, remote } from "webdriverio";

import configurations from "./e2e.config";
import { beforeAll, afterAll, jest } from "@jest/globals";
jest.retryTimes(3);

let client: WebdriverIO.Browser;

const config: RemoteOptions = {
  port: parseInt(process.env.APPIUM_PORT),
  waitforTimeout: 60000,
  logLevel: "error",
  capabilities: configurations,
};

beforeAll(async () => {
  client = await remote(config);
});

afterAll(async () => {
  await client.deleteSession();
});

export { client };
