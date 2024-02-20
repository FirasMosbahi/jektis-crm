import * as React from "react";
import type { SVGProps } from "react";
const SvgSidebarTrigger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="#fff"
    className="sidebar-trigger_svg__fill-current"
    viewBox="0 0 20 18"
    {...props}
  >
    <path d="M19 8.175H2.987l6.375-6.488a.84.84 0 0 0 0-1.2.84.84 0 0 0-1.2 0L.4 8.364a.84.84 0 0 0 0 1.2l7.762 7.874c.15.15.375.263.6.263a.92.92 0 0 0 .6-.225.84.84 0 0 0 0-1.2L3.025 9.863H19c.45 0 .825-.375.825-.825 0-.488-.375-.863-.825-.863" />
  </svg>
);
export default SvgSidebarTrigger;
