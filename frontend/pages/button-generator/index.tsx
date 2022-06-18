import React, { memo } from "react";
import type { GetStaticProps, NextPage } from "next";
import parseToTsx from "html-react-parser";

import { ApolloQueryResult } from "@apollo/client";
import client from "@api/apollo-client";
import { GET_COMPONENT } from "@api/queries/component";

import { Icomponent, IcomponentResponse } from "types/interfaces";

import Component from "components/TailwindComponent";
import TailwindOptions from "components/TailwindOptions";
import CopyButtons from "components/CopyButtons";
import DivWithAllTailwindValues from "components/DivWithAllTailwindValues";

import useButtonGenerator from "./ButtonGenerator.hook";

const MemeoizedTailwindOptions = memo(TailwindOptions);
const MemoizedDivWithAllTailwindValues = memo(DivWithAllTailwindValues);

type Props = {
  component: Icomponent;
};

const ButtonGenerator: NextPage<Props> = ({ component }: Props) => {
  const {
    componentRef,
    text,
    setText,
    customClassList,
    setCustomClassList,
    classList,
    isDarkBoxTheme,
    setIsDarkBoxTheme,
    generateNewValue,
  } = useButtonGenerator(component);

  return (
    <div className="flex flex-col items-center w-full h-screen -mt-4 text-white">
      <div className="flex flex-col-reverse items-center justify-center w-full gap-8 p-4 mt-20 2xl:w-3/4 2xl:flex-row 2xl:h-2/3">
        {/* live view */}
        <div
          className={`flex bg-black flex-col items-center justify-center w-full 2xl:w-1/2 h-screen 2xl:h-full ${
            isDarkBoxTheme ? "bg-gray-900" : "bg-gray-200"
          } rounded-3xl`}
        >
          <Component
            componentRef={componentRef}
            classList={classList}
            customClassList={customClassList}
            text={text}
          />
          <div className="hidden">{parseToTsx(component.code)}</div>
        </div>

        {/* choices */}
        <div className="w-full p-6 bg-gray-900 2xl:p-4 2xl:h-full rounded-3xl 2xl:w-1/2">
          <div className="absolute flex flex-row left-10">
            <svg
              onClick={() => setIsDarkBoxTheme(false)}
              xmlns="http://www.w3.org/2000/svg"
              className={`p-2 text-yellow-500 duration-100 bg-gray-200 cursor-pointer hover:opacity-90 w-14 h-14 rounded-2xl ${
                isDarkBoxTheme ? "opacity-70" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <svg
              onClick={() => setIsDarkBoxTheme(true)}
              xmlns="http://www.w3.org/2000/svg"
              className={`p-2 ml-2 text-yellow-300 duration-100 bg-gray-700 cursor-pointer hover:opacity-90 w-14 h-14 rounded-2xl ${
                isDarkBoxTheme ? "" : "opacity-70"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </div>
          <h1 className="text-3xl text-center uppercase">{component.name}</h1>
          <div className="flex flex-col items-center justify-center mt-2 text-lg text-black">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="font-medium text-white">Text in</div>
              <input
                type="text"
                placeholder="Click on me!"
                className="w-full p-1 duration-200 border-2 rounded outline-none lg:w-1/2 focus:border-blue-500"
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
            </div>

            <div className="flex flex-col items-center justify-center w-full mt-2">
              <div className="font-medium text-white">Custom classes</div>
              <input
                type="text"
                placeholder="focus:border-red-500 bg..."
                className="w-full p-1 duration-200 border-2 rounded outline-none lg:w-1/2 focus:border-blue-500"
                value={customClassList}
                onChange={(event) => setCustomClassList(event.target.value)}
              />
            </div>

            <div className="mt-4 text-lg font-medium text-white">Values</div>
            <MemeoizedTailwindOptions
              defaultValueComponent={component.defaultValue}
              generateNewValue={generateNewValue}
            />
          </div>
        </div>
      </div>

      <CopyButtons classList={classList} customClassList={customClassList} text={text} />

      <div>
        <MemoizedDivWithAllTailwindValues />
      </div>
    </div>
  );
};

export default ButtonGenerator;

export const getStaticProps: GetStaticProps = async () => {
  const { data }: ApolloQueryResult<IcomponentResponse> = await client.query({
    query: GET_COMPONENT,
    variables: { id: "1" },
  });

  return {
    props: {
      component: data.component.data.attributes,
    },
  };
};
