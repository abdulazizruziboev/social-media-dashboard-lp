import React from "react";

export default function TopFollowersCard(props) {
  console.log(props);
  return (
    <article
      className={`bg-[#F1F3FA] pt-[32px] pb-[24px] px-[16px] rounded-[5px] relative dark:bg-[#252B42]`}
    >
      <div
        className="absolute top-0 left-0 w-full h-[4px]"
        style={{ background: props.accentColor ?? "black" }}
      ></div>

      <div className="flex items-center justify-center gap-[8px]">
        {props.social && (
          <img src={`./images/${props.social}.svg`} alt={props.social} />
        )}
        <p className="font-[700] text-[12px] text-[#63687D] dark:text-[#8C98C6]">
          {props.username ?? "N/A"}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mt-[28px]">
        <h2 className="font-[700] text-[56px] text-[#1D1F29] leading-[100%] dark:text-white">
          {props.subscribers ?? "N/A"}
        </h2>
        <p className="font-[400] text-[12px] text-[#63687D] uppercase tracking-[5px] mt-[8px] dark:text-[#8C98C6]">
          {props.subscribersText ?? "N/A"}
        </p>
      </div>

      <div className="flex justify-center items-center gap-[4px] mt-[25px]">
        {props.statsTo && (
          <img
            src={`./images/stats-${props.statsTo}.svg`}
            className="w-[8px]"
            aria-hidden="true"
          />
        )}
        <p
          className={`${props.statsTo === "up" ? "text-[#1EB589]" : "text-[#DC414C]"}`}
        >
          {props.statsNum} Today
        </p>
      </div>
    </article>
  );
}
