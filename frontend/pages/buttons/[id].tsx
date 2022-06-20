import client from "@api/apollo-client";
import { GET_COMPONENT, GET_COMPONENTS_IDS } from "@api/queries/component";
import {
  componentId,
  Icomponent,
  IcomponentResponse,
  IcomponentsIdsResponse,
  IcomponentsVariables,
} from "types/interfaces";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import parseToTsx from "html-react-parser";
import React from "react";

import CopyButtons from "@components/CopyButtons";
import ComponentBoxThemeButtons from "components/ComponentBoxThemeButtons";

import useButtonGenerator from "@pages/button-generator/ButtonGenerator.hook";

type Props = {
  component: Icomponent;
};

const Button: NextPage<Props> = ({ component }: Props) => {
  const { text, classList, isComponentBoxThemeDark, setIsComponentBoxThemeDark } =
    useButtonGenerator(component);

  return (
    <div className="flex flex-col items-center w-full h-screen -mt-4 text-white">
      <div className="mt-6">
        <ComponentBoxThemeButtons
          isComponentBoxThemeDark={isComponentBoxThemeDark}
          setIsComponentBoxThemeDark={setIsComponentBoxThemeDark}
        />
      </div>
      <section className="flex flex-col-reverse items-center justify-center w-full gap-8 p-4 mt-20 2xl:w-3/4 2xl:flex-row 2xl:h-2/3">
        {/* live view */}
        <div
          className={`flex bg-black flex-col items-center justify-center w-full p-2 2xl:w-1/2 h-screen 2xl:h-full ${
            isComponentBoxThemeDark ? "bg-gray-900" : "bg-gray-200"
          } rounded-3xl`}
        >
          <div
            className={`font-mono h-full text-2xl uppercase ${
              isComponentBoxThemeDark ? "text-gray-200" : "text-gray-900"
            }`}
          >
            Live view
          </div>
          <div className="h-full -mt-14">{parseToTsx(component.code)}</div>
        </div>
      </section>

      <CopyButtons customClassList={classList} text={text} />
    </div>
  );
};

export default Button;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<IcomponentsIdsResponse, IcomponentsVariables>({
    query: GET_COMPONENTS_IDS,
    variables: {
      limit: 10000000,
    },
  });

  const paths = data.components.data.map((component: componentId) => {
    return {
      params: { id: component.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

type Params = {
  id: string;
};
export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const { data } = await client.query<IcomponentResponse>({
    query: GET_COMPONENT,
    variables: {
      id: params?.id,
    },
  });

  return {
    props: {
      component: data.component.data.attributes,
    },
  };
};
