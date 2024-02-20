import * as React from "react";
import type { SVGProps } from "react";
const SvgProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="#fff"
    className="profile-icon_svg__fill-current"
    viewBox="0 0 18 18"
    {...props}
  >
    <path d="M9 7.79c2.081 0 3.769-1.63 3.769-3.656C12.769 2.11 11.08.478 9 .478S5.231 2.11 5.231 4.134s1.688 3.657 3.77 3.657m0-6.018c1.378 0 2.503 1.069 2.503 2.39S10.378 6.554 9 6.554s-2.503-1.069-2.503-2.39S7.622 1.772 9 1.772M10.828 9.056H7.172c-3.01 0-5.456 2.475-5.456 5.485v2.334c0 .337.281.647.647.647a.636.636 0 0 0 .647-.647v-2.334c0-2.307 1.884-4.22 4.218-4.22h3.628c2.307 0 4.22 1.885 4.22 4.22v2.334c0 .337.28.647.646.647a.636.636 0 0 0 .647-.647v-2.334c-.084-3.01-2.531-5.485-5.54-5.485" />
  </svg>
);
export default SvgProfileIcon;
