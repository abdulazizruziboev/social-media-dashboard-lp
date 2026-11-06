import React from "react";

export default function Switch(props) {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className={`h-[24px] w-[48px] px-[4px] flex items-center rounded-[12px] cursor-pointer transition-colors duration-300
        ${
          props.checked
            ? "justify-end bg-linear-to-r from-[#388FE7] to-[#40DB82]"
            : "justify-start bg-[#AEB3CB] hover:bg-linear-to-r hover:from-[#388FE7] hover:to-[#40DB82]"
        }`}
    >
      <div className="h-[18px] w-[18px] rounded-full bg-white"></div>
    </button>
  );
}
