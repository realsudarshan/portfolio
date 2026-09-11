import { ImgHTMLAttributes } from 'react';

const Logo = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src="/apple-touch-icon.png"
    alt="Sudarshan Dhakal Logo"
    width="100"
    height="100"
    {...props}
  />
);

export default Logo;
