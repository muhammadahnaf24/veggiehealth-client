// src/components/Alert.js
import React from "react";

const Alert = ({ message, variant = "info", onClose, className = "" }) => {
  const baseStyle =
    "p-4 rounded-lg flex justify-between items-center text-sm font-semibold mb-4";
  const styles = {
    success: `${baseStyle} bg-green-100 text-green-700`,
    error: `${baseStyle} bg-red-100 text-red-700`,
    warning: `${baseStyle} bg-yellow-100 text-yellow-700`,
    info: `${baseStyle} bg-blue-100 text-blue-700`,
  };

  return (
    <div className={`${styles[variant]} ${className}`}>
      <span className="flex-1 text-center">{message}</span>{" "}
      {/* Flex-1 untuk teks */}
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 text-lg font-bold focus:outline-none"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
