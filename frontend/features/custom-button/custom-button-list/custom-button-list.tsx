import React, { VFC } from 'react';

import { IcustomButtonsListProps } from 'types/interfaces';
import { CustomButtonItem } from '@features/custom-button';

const CustomButtonList: VFC<IcustomButtonsListProps> = ({ customButtons }) =>{
  const customButtonsMap = customButtons?.map(({ id, attributes }, index) => {
    return <CustomButtonItem key={id} id={id} attributes={attributes} index={index}/>;
  });

  return <div className="grid grid-cols-1 mt-10 gap-x-10 gap-y-2 xl:grid-cols-2">{ customButtonsMap }</div>;
}

export default CustomButtonList