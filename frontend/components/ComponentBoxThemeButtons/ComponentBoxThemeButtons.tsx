import React, { VFC, Dispatch } from "react";

interface Props {
  isComponentBoxThemeDark: boolean;
  setIsComponentBoxThemeDark: Dispatch<React.SetStateAction<boolean>>;
}

const ComponentBoxThemeButtons: VFC<Props> = ({
  isComponentBoxThemeDark,
  setIsComponentBoxThemeDark,
}) => {
  return (
    <div className="absolute flex flex-row left-10">
      <svg
        onClick={() => setIsComponentBoxThemeDark(false)}
        xmlns="http://www.w3.org/2000/svg"
        className={`p-2 text-yellow-500 duration-100 bg-gray-200 cursor-pointer hover:opacity-90 w-14 h-14 rounded-2xl ${
          isComponentBoxThemeDark ? "opacity-70" : ""
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <svg
        onClick={() => setIsComponentBoxThemeDark(true)}
        xmlns="http://www.w3.org/2000/svg"
        className={`p-2 ml-2 text-yellow-300 duration-100 bg-gray-700 cursor-pointer hover:opacity-90 w-14 h-14 rounded-2xl ${
          isComponentBoxThemeDark ? "" : "opacity-70"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </div>
  );
};

export default ComponentBoxThemeButtons;
