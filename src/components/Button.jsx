import React from "react";

export const Button = ({ label, onClick, className = '' }) => {
  return (
    <button className={`px-4 text-base w-fit font-semibold py-2 min-w-[125px] text-center bg-[#ff6b21] hover:bg-[#b66841] shadow-lg cursor-pointer rounded-lg text-white ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}