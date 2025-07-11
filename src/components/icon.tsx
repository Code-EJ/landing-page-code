import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const Icon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    {/* Example: Simple star icon */}
    <polygon points="12 2 15 8.5 22 9.3 17 14 18.5 21 12 17.8 5.5 21 7 14 2 9.3 9 8.5 12 2" />
  </svg>
);

export default Icon;
