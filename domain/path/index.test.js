const relativeDestination = require("./");
jest.mock("../absolutePath");
const absolutePath = require("../absolutePath");

test("should append the path if it's the project root", () => {
  absolutePath.mockImplementation(() => "project");
  expect(relativeDestination("src/atoms")).toEqual("project/src/atoms");
});

test("if the path is the source then merge src", () => {
  absolutePath.mockImplementation(() => "project/src");
  expect(relativeDestination("src/atoms")).toEqual("project/src/atoms");
});

test("if the path is the same then return same", () => {
  absolutePath.mockImplementation(() => "project/src/atoms");
  expect(relativeDestination("src/atoms")).toEqual("project/src/atoms/");
});
