module.exports = {
  testTimeout: 60000,
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testMatch: ["**/__tests__/**/*.test.ts"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
};
