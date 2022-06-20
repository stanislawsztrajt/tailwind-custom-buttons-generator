import React, { VFC } from "react";

import useCopyButtons from "./CopyButtons.hook";

interface Props {
  classList?: string;
  customClassList?: string;
  text?: string;
}

const CopyButtons: VFC<Props> = ({ classList, customClassList, text }) => {
  const { copyClassList } = useCopyButtons();

  return (
    <div className="flex flex-col items-center justify-center p-4 text-white lg:mt-10 lg:flex-row">
      <button
        onClick={() => copyClassList(`${classList} ${customClassList}`)}
        className="mt-2 bg-yellow-500 copy-button"
      >
        copy only class w-40 bg-...
      </button>
      <button
        onClick={() =>
          copyClassList(`<button class="${classList} ${customClassList}">${text}</button>`)
        }
        className="mt-2 bg-red-600 lg:ml-4 copy-button"
      >
        copy as HTML {'<button class="..."></button>'}
      </button>
      <button
        onClick={() =>
          copyClassList(`<button className="${classList} ${customClassList}">${text}</button>`)
        }
        className="mt-2 bg-blue-500 lg:ml-4 copy-button"
      >
        copy as JSX {'<button className="..."></button>'}
      </button>
    </div>
  );
};

export default CopyButtons;
