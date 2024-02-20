import * as React from "react";
import type { SVGProps } from "react";
const SvgUpdateIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000"
    className="update-icon_svg__icon update-icon_svg__flat-line"
    data-name="Flat Line"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M4 12a8 8 0 0 1 14.93-4"
      style={{
        fill: "none",
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <path
      d="M20 12a8 8 0 0 1-14.93 4M14 8h5V3"
      data-name="primary"
      style={{
        fill: "none",
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <path
      d="M10 16H5v5"
      data-name="primary"
      style={{
        fill: "none",
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);
export default SvgUpdateIcon;
