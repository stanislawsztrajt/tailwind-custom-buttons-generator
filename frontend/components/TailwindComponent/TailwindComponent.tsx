import React, { VFC } from "react";

interface Props {
  componentRef: HTMLButtonElement;
  classList?: string;
  text: string;
  customClassList?: string;
}

const TailwindComponent: VFC<Props> = ({ componentRef, classList, customClassList, text }) => {
  return (
    <button ref={componentRef} className={`${classList} ${customClassList}`}>
      {text}
    </button>
  );
};

export default TailwindComponent;
