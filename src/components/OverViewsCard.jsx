import React from "react";

export default function OverViewsCard(props) {
  return (
    <article className="rounded-[5px] bg-[#F1F3FA] p-[24px] dark:bg-[#252B42]">
      <div className="flex items-center justify-between">
        <p className="font-[700] text-[14px] text-[#63687D] dark:text-[#8C98C6]">
          {props.title ?? "N/A"}
        </p>

        {<img src={`./images/${props.social}.svg`} alt={props.social} />}
      </div>

      <div className="flex items-center justify-between mt-[22px]">
        <span className="font-[700] text-[32px] text-[#1D1F29] dark:text-white">
          {props.count ?? "N/A"}
        </span>

        <div className="flex items-center gap-[4px]">
          {props.statsTo && (
            <img
              src={`./images/stats-${props.statsTo}.svg`}
              className="w-[8px]"
              aria-hidden="true"
            />
          )}

          <span
            className={`font-[700] text-[12px] ${props.statsTo === "up" ? "text-[#1EB589]" : "text-[#DC414C]"}`}
          >
            {props.statsPercent ?? "N/A"}%
          </span>
        </div>
      </div>
    </article>
  );
}
