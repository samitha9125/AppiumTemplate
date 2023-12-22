import path from "path";
import fs from "fs";

/**
 * @description Check whether the CONFIG environment variable is passed with the command execution.
 * @Accepted values: android | ios
 */

if (!process.env.CONFIG) {
  throw new Error(
    "CONFIG environment variable is not defined. Please execute 'yarn test android' or 'yarn test ios''"
  );
} else if (!/android|ios/.test(process.env.CONFIG)) {
  throw new Error(
    "CONFIG environment variable is not valid. Please execute 'yarn test android' or 'yarn test ios''"
  );
}

/**
 * @description Obtain the configuration file based on the CONFIG environment variable
 */
const filePath = `./config/${process.env.CONFIG}.config.json`;
const configFile = path.resolve(__dirname, filePath);

if (!fs.existsSync(configFile)) {
  throw new Error(`Configuration file not found: ${configFile}`);
}

/**
 * @description Read the configuration file and export the value.
 */

const json = JSON.parse(fs.readFileSync(configFile, "utf8"));
const configurations = {
  ...json,
  "appium:app": path.resolve(__dirname, json["appium:app"]),
};

export default configurations;
