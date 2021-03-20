import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BubblePage from "./BubblePage";
import mockAxiosWithAuth from "../utils/axiosWithAuth";
import { mockResponse } from "../mocks/mockResponse";

test("Renders BubblePage without errors", () => {
  mockAxiosWithAuth.mockResolvedValueOnce(mockResponse);
  render(<App />);

  
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading

// * [ ] Finish the test in `BubblePage.test.js` to test that your app is fetching the bubble data from the API