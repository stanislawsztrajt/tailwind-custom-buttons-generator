import Link from "next/link";
import React, { VFC } from "react";

const Footer: VFC = () => {
  return (
    <footer id="footer" className="text-gray-400 bg-gray-800 shadow mt-96 shadow-stone-50">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <a className="flex items-center justify-center font-medium text-white title-font md:justify-start">
            <div>
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
            </div>
            <span className="ml-3 text-xl">Tailwind&nbsp;button&nbsp;generator</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">Create your own buttons and post them</p>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white title-font">Home</h2>
            <nav className="mb-10 list-none">
              <li>
                <Link href="/">
                  <a className="text-gray-400 cursor-pointer hover:text-white">Home link</a>
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white title-font">
              About
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link href="/about">
                  <a className="text-gray-400 cursor-pointer hover:text-white">About link</a>
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white title-font">
              Custom button generator
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link href="/custom-button-generator">
                  <a className="text-gray-400 cursor-pointer hover:text-white">
                    Custom button generator link
                  </a>
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
