// importe o mock da biblioteca google-maps-react-mock
import React from "react";
import { IMockModalContainer } from "./src/utils/interfaces/base";

// global mocks
jest.mock(
  "./src/components/ModalContainer/ModalContainer",
  () =>
    ({ children }: IMockModalContainer) =>
      <div>{children}</div>
);
jest.mock("google-map-react", () => ({ children }: IMockModalContainer) => (
  <div>{children}</div>
));
jest.mock("./src/res/images/location-marker.png", () => "mockImage");
jest.mock("./src/utils/Constants", () => ({}));

jest.mock("axios");

jest.mock("./src/api/config", () => ({
  mainAPI: {
    get: jest.fn(),
    post: jest.fn(),
    delete: jest.fn(),
  },
}));

global.navigator = {
  ...global.navigator,
  userAgent: "node.js",
  geolocation: {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn(),
    clearWatch: jest.fn(),
  },
};
