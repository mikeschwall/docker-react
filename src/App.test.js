import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock the entire aiservice module
jest.mock('./aiservice', () => ({
  getOpenAIResponse: jest.fn(() =>
    Promise.resolve(
      JSON.stringify([
        { title: "The Gray Man" },
        { title: "Extraction" },
        { title: "Mad Max: Fury Road" }
      ])
    )
  )
}));

test("renders welcome text", async () => {
  render(<App />);
  const linkElement = await screen.findByText(/welcome/i);
  expect(linkElement).toBeInTheDocument();
});
