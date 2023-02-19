import React from "react";

function ProfileProfileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="66"
      height="66"
      fill="none"
      viewBox="0 0 66 66"
    >
      <circle
        cx="33"
        cy="33"
        r="31.5"
        fill="#6666FF"
        stroke="#fff"
        strokeWidth="3"
      ></circle>
      <mask
        id="mask0_49_8812"
        style={{ maskType: "alpha" }}
        width="60"
        height="60"
        x="3"
        y="3"
        maskUnits="userSpaceOnUse"
      >
        <circle cx="33" cy="33" r="30" fill="#C4C4C4"></circle>
      </mask>
      <g mask="url(#mask0_49_8812)">
        <path
          fill="#FFFFFF"
          d="M33 39c-8.63 0-16 3.786-16 18.93C17 73.08 24.325 77 33 77c8.63 0 16-3.78 16-18.93S41.677 39 33 39z"
        ></path>
      </g>
      <path
        fill="#C9CDD4"
        d="M33 35c5.552 0 10-4.45 10-10s-4.448-10-10-10c-5.55 0-10 4.45-10 10s4.45 10 10 10z"
        opacity="0.4"
      ></path>
    </svg>
  );
}

export default ProfileProfileIcon;