import React, { VFC, ChangeEvent } from "react";

import { IclassName, ItailwindValue, ItailwindValueObject } from "types/interfaces";
import tailwindValuesJSON from "data/tailwindValues.json";

import { getValueObjectByStringKey } from "helpers/custom-button";

interface Props {
  defaultValue: IclassName;
  generateNewValue: (key: string, value: string) => void;
}

const tailwindValues: ItailwindValue[] = Object.values(tailwindValuesJSON).map((tailwindValue) => {
  return tailwindValue;
});

const TailwindOptions: VFC<Props> = ({ defaultValue, generateNewValue }) => {
  const tailwindOptions = tailwindValues.map(({ key, prefix, values }: ItailwindValue) => {
    const tailwindValueObject: ItailwindValueObject = getValueObjectByStringKey(key, defaultValue);

    const valuesMap = values.map((value, index) => {
      return (
        <option
          key={index + prefix}
          className="rounded"
          value={`{ "prefix": "${prefix}", "value": "${value}" }`}
        >
          {`${prefix}${value}`}
        </option>
      );
    });

    return (
      <select
        className="w-full mt-1 text-base lg:w-2/3"
        id={`${prefix === "w-" ? "tailwind-options-select" : null}`}
        key={key + prefix}
        defaultValue={`{ "prefix": "${tailwindValueObject.prefix}", "value": "${tailwindValueObject.value}" }`}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          generateNewValue(key, event.target.value)
        }
      >
        {valuesMap}
      </select>
    );
  });

  return <>{tailwindOptions}</>;
};

export default TailwindOptions;
