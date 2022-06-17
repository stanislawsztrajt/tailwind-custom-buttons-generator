import React, { VFC, ChangeEvent } from 'react'

import { getValueObjectByStringKey } from 'helpers/component';
import { Icomponent, ItailwindValue, ItailwindValueObject } from 'types/interfaces';

interface Props {
  // tailwindValues in the props, because I may be expanding the app
  tailwindValues: ItailwindValue[];
  component: Icomponent;
  generateNewValue: (key: string, value: string) => void;
}

const TailwindOptions: VFC<Props> = ({ tailwindValues, component, generateNewValue }) =>{
  const tailwindOptions = tailwindValues.map((tailwindValue: ItailwindValue) => {
    const tailwindValueObject: ItailwindValueObject = getValueObjectByStringKey(tailwindValue.key, component.defaultValue);
    const valuesMap = tailwindValue.values.map((value, index) => {
      return (
        <option 
          key={index + tailwindValue.prefix} 
          value={`{ "prefix": "${tailwindValue.prefix}", "value": "${value}" }`}
          selected={tailwindValueObject.value === value}
        >
          {`${tailwindValue.prefix}${value}`}
        </option>
      );
    });


    return (
      <select
        className=""
        key={tailwindValue.key}
        onChange={(event: ChangeEvent<HTMLSelectElement>) => generateNewValue(tailwindValue.key, event.target.value)}
      >
        { valuesMap }
      </select>
    );
  });

  return <>{tailwindOptions}</>
}

export default TailwindOptions