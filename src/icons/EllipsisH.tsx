import React from 'react';

function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M14.188 12.25c0 .95-.774 1.688-1.688 1.688-.95 0-1.688-.739-1.688-1.688 0-.914.739-1.688 1.688-1.688a1.71 1.71 0 011.688 1.688zm4.218-1.688c.914 0 1.688.774 1.688 1.688 0 .95-.774 1.688-1.688 1.688-.949 0-1.687-.739-1.687-1.688 0-.914.738-1.688 1.687-1.688zm-11.812 0c.914 0 1.687.774 1.687 1.688 0 .95-.773 1.688-1.687 1.688-.95 0-1.688-.739-1.688-1.688 0-.914.739-1.688 1.688-1.688z"
      ></path>
    </svg>
  );
}

export default Icon;
