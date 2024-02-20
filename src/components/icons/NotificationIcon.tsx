import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="notification-icon_svg__fill-current notification-icon_svg__duration-300 notification-icon_svg__ease-in-out"
    viewBox="0 0 18 18"
    {...props}
  >
    <path d="m16.2 14.934-.563-.872a.93.93 0 0 1-.168-.534v-5.85c0-1.66-.703-3.206-1.997-4.36a6.54 6.54 0 0 0-3.825-1.63v-.563A.654.654 0 0 0 9 .478a.654.654 0 0 0-.647.647v.534c-.056 0-.112 0-.169.028-3.262.366-5.71 2.982-5.71 6.104v5.737c-.027.281-.083.422-.14.506l-.534.9a.86.86 0 0 0 0 .9c.169.253.45.422.76.422H8.38v.619c0 .337.281.647.647.647a.654.654 0 0 0 .647-.647v-.619h5.794c.309 0 .59-.169.759-.422a.81.81 0 0 0-.028-.9m-12.966.057.197-.338c.169-.281.253-.619.31-1.013V7.79c0-2.474 1.968-4.556 4.584-4.837 1.603-.169 3.178.31 4.331 1.322 1.013.9 1.575 2.11 1.575 3.403v5.85c0 .422.113.816.366 1.21l.168.253z" />
  </svg>
);
export default SvgNotificationIcon;
