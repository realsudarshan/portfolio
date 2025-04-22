import { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden
    focusable={false}
    {...props}
  >
    <rect width="100" height="100" rx="50" fill="#f6f6f6" />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="60"
      fontWeight="bold"
      fill="#FC1FD7"
      fontFamily="Arial, sans-serif"
    >
      S
    </text>
  </svg>
);

export default Logo;
