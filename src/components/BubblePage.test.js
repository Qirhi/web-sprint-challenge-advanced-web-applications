import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BubblePage from "./BubblePage";
import { axiosWithAuth as mockAxiosWithAuth } from "../utils/axiosWithAuth";
import { mockResponse } from "../mocks/mockResponse";
// jest.mock('axios')

test("Renders BubblePage without errors", () => {
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  render(<BubblePage />);
  // mockAxiosWithAuth.mockResolvedValueOnce(mockResponse);

  // await wait();

  expect(screen.getAllByTestId("circle")).toHaveLength(1);
  
});
