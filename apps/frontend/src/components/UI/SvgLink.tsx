import { useState } from "react";

type SvgLinkProps = {
  color: string;
  hoverColor?: string;
  path: string;
  href: string;
};

const SvgLink = ({ color, path, hoverColor, href }: SvgLinkProps) => {
  const [hoverActive, setHoverActive] = useState(false);

  const fillColor = hoverColor != undefined && hoverActive ? hoverColor : color;

  return (
    <a href={href} target="_blank">
      <svg
        onMouseOver={() => {
          setHoverActive(true);
        }}
        onMouseLeave={() => {
          setHoverActive(false);
        }}
        height="2rem"
        width="2rem"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 382 382"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path style={{ fill: fillColor }} d={path}></path>{" "}
        </g>
      </svg>
    </a>
  );
};

export default SvgLink;
