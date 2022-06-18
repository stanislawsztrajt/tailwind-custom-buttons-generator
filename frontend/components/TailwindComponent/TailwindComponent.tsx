import React, { VFC } from "react";

interface Props {
  componentRef: any;
  classList?: string;
  text: string;
  customClassList?: string;
}

const TailwindComponent: VFC<Props> = ({ componentRef, classList, customClassList, text }) => {
  console.log("tailwind component");
  return (
    <button ref={componentRef} className={`${classList} ${customClassList}`}>
      {text}
    </button>
  );
};

export default TailwindComponent;
