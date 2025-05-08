import { render, screen } from "@testing-library/react";
import App from "./App";
import axios from "axios";

// Mock axios BEFORE any tests
jest.mock('axios');

test("renders learn react link", async () => {
  axios.post.mockResolvedValue({
    data: {
      choices: [
        {
          message: {
            content: JSON.stringify([
              { title: "The Gray Man" },
              { title: "Extraction" },
              { title: "Mad Max" }
            ])
          }
        }
      ]
    }
  });

  render(<App />);
  const linkElement = await screen.findByText(/welcome/i);
  expect(linkElement).toBeInTheDocument();
});
