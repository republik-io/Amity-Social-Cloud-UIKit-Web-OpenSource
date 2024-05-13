import React from 'react';

const Svg = ({ fill = "#1054DE", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="16" cy="16.4961" r="16" fill={fill} />
    <path d="M22.3758 15.5698C22.3758 16.3198 22.256 17.0073 22.0164 17.6323C21.7768 18.2573 21.4383 18.7443 21.0008 19.0933C20.5633 19.4422 20.0555 19.6167 19.4773 19.6167C19.0919 19.6167 18.7482 19.5256 18.4461 19.3433C18.1492 19.1558 17.9383 18.911 17.8133 18.6089H17.6883C17.4331 18.9214 17.1232 19.1688 16.7586 19.3511C16.394 19.5282 15.9878 19.6167 15.5398 19.6167C14.618 19.6167 13.8914 19.3407 13.3602 18.7886C12.8289 18.2313 12.5633 17.4735 12.5633 16.5151C12.5633 15.4266 12.907 14.5438 13.5945 13.8667C14.2872 13.1896 15.2039 12.8511 16.3445 12.8511C16.7664 12.8511 17.2534 12.8927 17.8055 12.9761C18.3576 13.0542 18.8081 13.1558 19.157 13.2808L18.9773 17.1011C18.9773 17.8302 19.1753 18.1948 19.5711 18.1948C19.9044 18.1948 20.1701 17.9526 20.368 17.4683C20.5659 16.9787 20.6648 16.3407 20.6648 15.5542C20.6648 14.7157 20.4904 13.9761 20.1414 13.3354C19.7977 12.6896 19.3081 12.1974 18.6727 11.8589C18.0424 11.5151 17.3185 11.3433 16.5008 11.3433C15.4539 11.3433 14.5398 11.562 13.7586 11.9995C12.9773 12.437 12.381 13.062 11.9695 13.8745C11.5581 14.687 11.3523 15.6245 11.3523 16.687C11.3523 18.1297 11.7352 19.2365 12.5008 20.0073C13.2716 20.7729 14.3862 21.1558 15.8445 21.1558C16.4279 21.1558 17.0529 21.0907 17.7195 20.9604C18.3862 20.8302 19.019 20.6532 19.618 20.4292V21.937C18.5138 22.4058 17.2768 22.6401 15.907 22.6401C13.9279 22.6401 12.3836 22.1193 11.2742 21.0776C10.1701 20.036 9.61797 18.5881 9.61797 16.7339C9.61797 15.4474 9.90182 14.2782 10.4695 13.2261C11.0424 12.174 11.8523 11.3537 12.8992 10.7651C13.9461 10.1714 15.1414 9.87451 16.4852 9.87451C17.631 9.87451 18.6544 10.1089 19.5555 10.5776C20.4565 11.0464 21.1518 11.7131 21.6414 12.5776C22.131 13.4422 22.3758 14.4396 22.3758 15.5698ZM14.3758 16.5464C14.3758 17.6453 14.8237 18.1948 15.7195 18.1948C16.1831 18.1948 16.5372 18.0308 16.782 17.7026C17.032 17.3693 17.1831 16.8276 17.2352 16.0776L17.3367 14.3511C17.0971 14.299 16.7977 14.2729 16.4383 14.2729C15.7872 14.2729 15.2794 14.4761 14.9148 14.8823C14.5555 15.2886 14.3758 15.8433 14.3758 16.5464Z" fill="white" />
  </svg>
);

export default Svg;