import * as React from "react";

const PartekatuTear: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 69.3 76.5"
    xmlSpace="preserve"
    {...props}
  >
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1={-8.104}
      y1={29.656}
      x2={61.088}
      y2={29.656}
      gradientTransform="rotate(-90 36.95 29.656)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#1870d5",
        }}
      />
      <stop
        offset={0.205}
        style={{
          stopColor: "#2179d8",
        }}
      />
      <stop
        offset={0.539}
        style={{
          stopColor: "#3991df",
        }}
      />
      <stop
        offset={0.958}
        style={{
          stopColor: "#61b9ea",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#65bdeb",
        }}
      />
    </linearGradient>
    <path
      d="M11 40.1c0 19.1 15.5 34.6 34.6 34.6 9.6 0 17.3-7.7 17.3-17.3s-7.7-17.3-17.3-17.3c-9.6 0-17.3-7.7-17.3-17.3S36 5.5 45.6 5.5C26.5 5.5 11 21 11 40.1z"
      style={{
        fill: "url(#a)",
      }}
    />
  </svg>
);

export default PartekatuTear;
