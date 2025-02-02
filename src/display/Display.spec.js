import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

// afterEach(rtl.cleanup);
afterEach(rtl.cleanup);

// let wrapper;
let wrapper;

// beforeEach(() => {
//   wrapper = rtl.render(<Display  />);
// });
beforeEach(() => {
  wrapper = rtl.render(<Display />);
});

// describe("Dashboard component", () => {
//   test("matches the snapshot!", () => {
//     expect(wrapper.container).toMatchSnapshot();
//   });
// });
describe("Dashboard component", () => {
  test("matches the snapshot!", () => {
    expect(wrapper.container).toMatchSnapshot();
  });
});

// test("shows gate open or closed", () => {
//   const elementWithJoshText = wrapper.queryByText(/Lock Gate/i);
//   expect(elementWithJoshText).toBeInTheDocument();
// });
test("shows gate locked or not", () => {
  expect(wrapper.queryByText(/Locked/i)).toBeInTheDocument();
});