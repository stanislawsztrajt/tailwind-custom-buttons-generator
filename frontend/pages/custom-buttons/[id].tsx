import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import parseToTsx from "html-react-parser";

import client from "@api/apollo-client";
import { GET_CUSTOM_BUTTONS_IDS, GET_CUSTOM_BUTTON_BY_ID } from "@queries/custom-button";
import {
  IcustomButton,
  IcustomButtonResponse,
  IcustomButtonsIdsResponse,
  IcustomButtonsVariables,
} from "types/interfaces";

import useCustomButtonGenerator from "@hooks/useCustomButtonGenerator";

import { ButtonBoxThemeButtons, CopyButtons } from "@features/custom-button";

type Props = IcustomButton;

const Button: NextPage<Props> = ({ code, defaultValue }: Props) => {
  const { text, classList, isCustomButtonBoxThemeDark, setIsCustomButtonBoxThemeDark } =
    useCustomButtonGenerator(defaultValue);

  return (
    <div className="flex flex-col items-center w-full h-screen -mt-4 text-white">
      <div className="mt-6">
        <ButtonBoxThemeButtons
          isCustomButtonBoxThemeDark={isCustomButtonBoxThemeDark}
          setIsCustomButtonBoxThemeDark={setIsCustomButtonBoxThemeDark}
        />
      </div>
      <section className="flex flex-col-reverse items-center justify-center w-full h-auto gap-8 p-4 mt-20 2xl:w-3/4 2xl:flex-row 2xl:h-2/3">
        {/* live view */}
        <div
          className={`flex bg-black flex-col items-center justify-center w-full p-2 2xl:w-1/2 h-screen 2xl:h-full ${
            isCustomButtonBoxThemeDark ? "bg-gray-900" : "bg-gray-200"
          } rounded-3xl`}
        >
          <div
            className={`font-mono h-full text-2xl uppercase ${
              isCustomButtonBoxThemeDark ? "text-gray-200" : "text-gray-900"
            }`}
          >
            Live view
          </div>
          <div className="h-full -mt-14">{parseToTsx(code)}</div>
        </div>
      </section>

      <CopyButtons classList={classList} text={text} />
    </div>
  );
};

export default Button;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<IcustomButtonsIdsResponse, IcustomButtonsVariables>({
    query: GET_CUSTOM_BUTTONS_IDS,
    variables: {
      limit: 10000000,
    },
  });

  const paths = data.customButtons.data.map((customButton) => {
    return {
      params: { id: customButton.id },
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
  const { data } = await client.query<IcustomButtonResponse>({
    query: GET_CUSTOM_BUTTON_BY_ID,
    variables: {
      id: params?.id,
    },
  });

  return {
    props: data.customButton.data.attributes,
  };
};
