import React, { ChangeEvent, VFC } from "react";
import Link from "next/link";

import useHeader from "./header.hook";

const Header: VFC = () => {
  const { setSearchInputValue } = useHeader();

  return (
    <nav className="w-full bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <a className="flex items-center mb-4 font-medium text-white title-font md:mb-0">
                <svg
                  className="w-10 h-10 p-2 text-white bg-purple-800 rounded-full"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />{" "}
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />{" "}
                  <polyline points="7.5 19.79 7.5 14.6 3 12" />{" "}
                  <polyline points="21 12 16.5 14.6 16.5 19.79" />{" "}
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />{" "}
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                <span className="ml-3 text-xl">Tailwind&nbsp;button&nbsp;generator</span>
              </a>
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="w-full md:flex md:items-center md:justify-between">
          <div className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
            <Link href="/">
              <a className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">
                About
              </a>
            </Link>

            <Link href="/custom-button-generator">
              <a className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">
                Create custom button
              </a>
            </Link>
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Search"
              onClick={() => console.log("change")}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setSearchInputValue(event.target.value)
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
