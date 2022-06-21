export interface IclassName {
  width: {
    prefix: string;
    value: string;
  };
  height: {
    prefix: string;
    value: string;
  };
  paddingY: {
    prefix: string;
    value: string;
  };
  paddingX: {
    prefix: string;
    value: string;
  };
  textSize: {
    prefix: string;
    value: string;
  };
  textColor: {
    prefix: string;
    value: string;
  };
  backgroundColor: {
    prefix: string;
    value: string;
  };
  rounded: {
    prefix: string;
    value: string;
  };
  hover: {
    prefix: string;
    value: string;
  };
  duration: {
    prefix: string;
    value: string;
  };
  border: {
    prefix: string;
    value: string;
  };
  borderColor: {
    prefix: string;
    value: string;
  };
  borderType: {
    prefix: string;
    value: string;
  };
}

export interface IcustomButton {
  name: string;
  description?: string;
  code: string;
  defaultValue: IclassName;
}

export interface IcustomButtonResponse {
  customButton: {
    data: {
      id: string;
      attributes: IcustomButton;
    };
  };
}

export interface IcustomButtonsVariables {
  limit: number;
}

export interface IcustomButtonsIdsResponse {
  customButtons: {
    data: {
      id: string
    }[]
  };
}

export interface IcustomButtonsResponse {
  customButtons: {
    data: {
      id: string;
      attributes: {
        id: string;
        attributes: {
          name: string;
          description: string;
          code: string;
        };
      };
    }[];
  };
}

export interface ItailwindValue {
  prefix: string;
  key: string;
  values: string[];
}

export interface ItailwindValueObject {
  prefix: string;
  value: string;
}
