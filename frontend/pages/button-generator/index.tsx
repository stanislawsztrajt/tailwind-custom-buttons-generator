import React, { memo } from "react";
import type { GetStaticProps, NextPage } from "next";
import parseToTsx from "html-react-parser";

import client from "@api/apollo-client";
import { GET_COMPONENT } from "@api/queries/component";

import { Icomponent, IcomponentResponse } from "types/interfaces";

import Component from "components/TailwindComponent";
import TailwindOptions from "components/TailwindOptions";
import CopyButtons from "components/CopyButtons";
import DivWithAllTailwindValues from "components/DivWithAllTailwindValues";
import ComponentBoxThemeButtons from "components/ComponentBoxThemeButtons";

import useButtonGenerator from "./ButtonGenerator.hook";

const styles = { boxShadow: "0 0 2em rgb(30, 58, 138)" };

type Props = {
  component: Icomponent;
};

const MemeoizedTailwindOptions = memo(TailwindOptions);
const MemoizedDivWithAllTailwindValues = memo(DivWithAllTailwindValues);

const ButtonGenerator: NextPage<Props> = ({ component }: Props) => {
  const {
    text,
    setText,
    customClassList,
    setCustomClassList,
    classList,
    generateNewValue,
    isComponentBoxThemeDark,
    setIsComponentBoxThemeDark,
    postComponent,
  } = useButtonGenerator(component);

  return (
    <div className="flex flex-col items-center w-full h-screen -mt-4 text-white">
      <div className="flex flex-col-reverse items-center justify-center w-full gap-8 p-4 mt-20 2xl:w-3/4 2xl:flex-row 2xl:h-2/3">
        {/* live view */}
        <section
          className={`flex bg-black flex-col items-center justify-center p-2 w-full 2xl:w-1/2 h-screen 2xl:h-full ${
            isComponentBoxThemeDark ? "bg-gray-900" : "bg-gray-200"
          } rounded-3xl`}
        >
          <div
            className={`font-mono text-2xl uppercase ${
              isComponentBoxThemeDark ? "text-gray-200" : "text-gray-900"
            }`}
          >
            Live view
          </div>
          <div className="flex items-center h-full -mt-10">
            <Component classList={classList} customClassList={customClassList} text={text} />
          </div>
          <div className="hidden">{parseToTsx(component.code)}</div>
        </section>

        {/* choices */}
        <section className="w-full p-6 bg-gray-900 2xl:p-4 2xl:min-h-full rounded-3xl 2xl:w-1/2">
          <ComponentBoxThemeButtons
            isComponentBoxThemeDark={isComponentBoxThemeDark}
            setIsComponentBoxThemeDark={setIsComponentBoxThemeDark}
          />

          <h1 className="-mt-2 font-mono text-2xl text-center uppercase">{component.name}</h1>
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
        </section>
      </div>

      <CopyButtons classList={classList} customClassList={customClassList} text={text} />

      <MemoizedDivWithAllTailwindValues />

      <button
        style={styles}
        onClick={postComponent}
        className="fixed z-50 flex items-center justify-center px-8 py-3 text-lg font-semibold text-white transition duration-150 bg-blue-900 rounded-lg cursor-pointer bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-10 md:right-10 hover:bg-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1 w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Post your button
      </button>
    </div>
  );
};

export default ButtonGenerator;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<IcomponentResponse>({
    query: GET_COMPONENT,
    variables: { id: "1" },
  });

  return {
    props: {
      component: data.component.data.attributes,
    },
  };
};
