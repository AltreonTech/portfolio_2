import { type SVGProps } from "react";

export default function Gemini(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1em"
      style={{
        flex: "none",
        lineHeight: 1,
      }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      {...props}
    >
      <title>{"React"}</title>
      <g fill="#61DAFB">
        <circle cx="12" cy="12" r="1.5" />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="1"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="1"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="1"
          transform="rotate(120 12 12)"
        />
      </g>
    </svg>
  );
}
