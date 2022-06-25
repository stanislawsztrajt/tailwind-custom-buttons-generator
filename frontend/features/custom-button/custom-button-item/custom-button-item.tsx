import React, { VFC } from "react";
import parseToTsx from "html-react-parser";
import Link from "next/link";

interface Props {
  id: string;
  attributes: {
    name: string;
    description: string;
    code: string;
  };
  index: number;
}

const CustomButtonItem: VFC<Props> = ({ id, attributes, index }) => {
  return (
    <div
      className={`flex justify-center ${
        index % 2 === 0 ? "xl:justify-end" : "xl:justify-start"
      } w-full px-5 py-10 text-gray-400`}
    >
      <div className="flex flex-col justify-start px-4 text-center sm:w-2/3">
        <h2 className="mt-6 mb-3 text-2xl font-medium text-gray-100 title-font">
          {attributes.name}
        </h2>
        <p className="text-base leading-relaxed">{attributes.description}</p>
        <Link href={`/custom-buttons/${id}`}>
          <button
            id={`${index === 0 ? "custom-button-item-link" : ""}`}
            className="flex px-5 py-2 mx-auto mt-6 text-lg text-indigo-400 underline border-0 rounded hover:text-indigo-500 focus:outline-none0"
          >
            Go to copy
          </button>
        </Link>
        <div className="flex flex-col items-center h-40 mt-4">
          <span className="font-thin">Preview</span>
          <div className="mt-1 overflow-hidden w-96 sm:w-auto">{parseToTsx(attributes.code)}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomButtonItem;
