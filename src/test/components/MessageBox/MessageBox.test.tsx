import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MessageBox from "@/components/MessageBox";

describe("MessageBox", () => {
  it("renders a success message box with the provided message", () => {
    const message = "Success!";
    render(<MessageBox type="success" message={message} />);

    expect(screen.getByText("Success:")).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveClass(
      "bg-green-100 border-green-400 text-green-700"
    );
  });

  it("renders an error message box with the provided message", () => {
    const message = "Error!";
    render(<MessageBox type="error" message={message} />);

    expect(screen.getByText("Error:")).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveClass(
      "bg-red-100 border-red-400 text-red-700"
    );
  });

  it("hides the message box after the specified duration", async () => {
    const message = "Success!";
    const duration = 1000;
    jest.useFakeTimers();

    render(<MessageBox type="success" message={message} duration={duration} />);

    expect(screen.getByRole("alert")).toHaveClass("opacity-100");

    act(() => {
      jest.advanceTimersByTime(duration);
    });

    expect(screen.getByRole("alert")).toHaveClass("opacity-0");

    jest.useRealTimers();
  });
});
