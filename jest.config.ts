export default {
  roots: ["<rootDir>/src"],
  clearMocks: true,
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
