import * as React from "react";

const SvgLike = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m7.48 18.35 3.1 2.4c.4.4 1.3.6 1.9.6h3.8c1.2 0 2.5-.9 2.8-2.1l2.4-7.3c.5-1.4-.4-2.6-1.9-2.6h-4c-.6 0-1.1-.5-1-1.2l.5-3.2c.2-.9-.4-1.9-1.3-2.2-.8-.3-1.8.1-2.2.7l-4.1 6.1"
      stroke="#8E95A9"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M2.38 18.35v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9Z"
      stroke="#8E95A9"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgLike;
