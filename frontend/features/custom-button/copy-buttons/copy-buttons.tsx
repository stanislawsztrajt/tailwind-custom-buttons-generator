import React, { VFC } from "react";

import useCopyButtons from "./copy-buttons.hook";

interface Props {
  classList?: string;
  customClassList?: string;
  text?: string;
}

const CopyButtons: VFC<Props> = ({ classList, customClassList, text }) => {
  const { copyClassList } = useCopyButtons();

  return (
    <div className="flex flex-col items-center justify-center p-4 text-white lg:flex-row">
      <button
        onClick={() =>
          copyClassList(`${classList} ${customClassList !== undefined ? customClassList : ""}`)
        }
        className="mt-2 bg-yellow-500 copy-button"
        id="copy-custom-button-as-class"
      >
        copy only class w-40 bg-...
      </button>
      <button
        onClick={() =>
          copyClassList(
            `<button class="${classList} ${
              customClassList !== undefined ? customClassList : ""
            }">${text}</button>`
          )
        }
        className="mt-2 bg-red-600 lg:ml-4 copy-button"
        id="copy-custom-button-as-html"
      >
        copy as HTML {'<button class="..."></button>'}
      </button>
      <button
        onClick={() =>
          copyClassList(
            `<button className="${classList} ${
              customClassList !== undefined ? customClassList : ""
            }">${text}</button>`
          )
        }
        className="mt-2 bg-blue-500 lg:ml-4 copy-button"
        id="copy-custom-button-as-jsx"
      >
        copy as JSX {'<button className="..."></button>'}
      </button>
    </div>
  );
};

export default CopyButtons;
