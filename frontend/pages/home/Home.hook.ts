import { useRef, useEffect, useState } from "react";

import { IclassName, Icomponent } from "types/interfaces";

const useHomeHook = (component: Icomponent) => {
  const componentRef = useRef<HTMLButtonElement>();
  const [text, setText] = useState<string>("Button");

  const [customClassList, setCustomClassList] = useState<string>("");
  const [classList, setClassList] = useState<string>();
  const [classListObject, setClassListObject] = useState<IclassName>(component.defaultValue);

  useEffect(() => {
    setClassList(document.getElementById("button")?.className);
  }, []);

  const generateNewValue = (key: string, value: string) => {
    // parse the value from JSON into an object, because value of <option></option> 
    // prevents you from passing an object, only a string
    const newClassListObject: IclassName = { ...classListObject, [key]: JSON.parse(value) }

    const classNameArray: string[] = Object.entries(newClassListObject).map((className) => {
      return `${className[1].prefix}${className[1].value}`;
    });

    setClassList(classNameArray.join(" "));
    setClassListObject(newClassListObject);
  };

  return {
    componentRef,
    text,
    setText,
    customClassList,
    setCustomClassList,
    classList,
    generateNewValue,
  };
};

export default useHomeHook;
