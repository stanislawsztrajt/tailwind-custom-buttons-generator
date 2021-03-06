import React, { VFC } from "react";

const Loading: VFC = () => {
  return (
    <div id="loading" className="flex justify-center mt-48 text-blue-500 lg:mt-72">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-36 h-36 animate-spin"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
        />
      </svg>
    </div>
  );
};

export default Loading;
