import React, { VFC } from "react";

interface Props {
  classList?: string;
  text?: string;
  customClassList?: string;
}

const TailwindComponent: VFC<Props> = ({ classList, customClassList, text }) => {
  return <button className={`${classList} ${customClassList}`}>{text}</button>;
};

export default TailwindComponent;
