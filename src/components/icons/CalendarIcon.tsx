import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="#fff"
    className="calendar-icon_svg__fill-current"
    viewBox="0 0 18 18"
    {...props}
  >
    <path d="M15.75 2.981h-1.463v-.619a.654.654 0 0 0-.647-.646.636.636 0 0 0-.646.646v.62H4.978v-.62a.654.654 0 0 0-.647-.646.636.636 0 0 0-.647.646v.62H2.25c-.956 0-1.772.787-1.772 1.771v9.788c0 .956.788 1.771 1.772 1.771h13.5c.956 0 1.772-.787 1.772-1.771V4.725c0-.956-.816-1.744-1.772-1.744M1.772 8.212h2.39v2.785h-2.39zm3.656 0h2.953v2.785H5.428zm2.953 4.05v2.757H5.428v-2.757zm1.266 0H12.6v2.757H9.647zm0-1.265V8.212H12.6v2.785zm4.19-2.785h2.391v2.785h-2.39zM2.25 4.247h1.462v.59c0 .338.282.647.647.647a.636.636 0 0 0 .647-.647v-.59h8.044v.59c0 .338.281.647.647.647a.636.636 0 0 0 .647-.647v-.59h1.406c.281 0 .506.225.506.506v2.194H1.772V4.753c0-.281.197-.506.478-.506m-.478 10.266v-2.279h2.39v2.757H2.25c-.281.028-.478-.197-.478-.479m13.978.506h-1.913v-2.757h2.391v2.279c.028.253-.197.478-.478.478" />
  </svg>
);
export default SvgCalendarIcon;