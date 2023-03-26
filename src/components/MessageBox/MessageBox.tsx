// components/MessageBox.js
import React, { useEffect, useState } from "react";

type Props = {
  type: "success" | "error";
  message: string;
  duration?: number;
};

const MessageBox = ({ type, message, duration = 3000 }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const getMessageBoxStyles = (type: "success" | "error") => {
    switch (type) {
      case "success":
        return "bg-green-100 border-green-400 text-green-700";
      case "error":
      default:
        return "bg-red-100 border-red-400 text-red-700";
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <div
      className={`fixed top-4 right-4 z-50 border px-4 py-3 rounded  transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${getMessageBoxStyles(type)}`}
      role="alert"
    >
      <strong className="font-bold text-center">
        {type === "success" ? "Success" : "Error"}:
      </strong>
      <div className="block sm:inline">{message}</div>
    </div>
  );
};

export default MessageBox;
