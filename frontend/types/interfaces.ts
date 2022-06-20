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
}

export interface Icomponent {
  name: string;
  description: string;
  code: string;
  defaultValue: IclassName;
}

export interface IcomponentResponse {
  component: {
    data: {
      id: string;
      attributes: Icomponent;
    };
  };
}

export interface IcomponentsVariables {
  limit: number;
}

export interface componentId {
  id: string;
}

export interface IcomponentsIdsResponse {
  components: {
    data: componentId[];
  };
}

export interface IcomponentsResponse {
  components: {
    data: {
      id: string;
      attributes: Icomponent;
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
