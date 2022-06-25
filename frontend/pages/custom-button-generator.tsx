import React, { memo } from "react";
import type { GetStaticProps, NextPage } from "next";
import parseToTsx from "html-react-parser";

import client from "@api/apollo-client";
import { GET_CUSTOM_BUTTON_GENERATOR } from "@queries/custom-button";
import { IcustomButton, IcustomButtonResponse } from "types/interfaces";

import { DEFAULT_CUSTOM_BUTTON_ID } from "constants/index";

import { ButtonBoxThemeButtons, CopyButtons, useCustomButton } from "@features/custom-button";
import {
  CustomButton,
  DivWithAllTailwindValues,
  TailwindOptions,
} from "@features/custom-button/custom-button-generator";

const boxShadowStyles = { boxShadow: "0 0 2em rgb(30, 58, 138)" };

type Props = IcustomButton;

const MemeoizedTailwindOptions = memo(TailwindOptions);
const MemoizedDivWithAllTailwindValues = memo(DivWithAllTailwindValues);

const CustomButtonGenerator: NextPage<Props> = ({ defaultValue, code, name }: Props) => {
  const {
    text,
    setText,
    customClassList,
    setCustomClassList,
    classList,
    isCustomButtonBoxThemeDark,
    setIsCustomButtonBoxThemeDark,
    generateNewValue,
    postCustomButton,
  } = useCustomButton(defaultValue);

  return (
    <div className="flex flex-col items-center w-full -mt-4 text-white 2xl:h-screen">
      <div className="flex flex-col-reverse items-center justify-center w-full gap-8 p-4 mt-20 2xl:w-3/4 2xl:flex-row 2xl:h-3/4">
        {/* live view */}
        <section
          className={`flex bg-black flex-col items-center justify-center p-2 w-full 2xl:w-1/2 h-screen 2xl:h-full ${
            isCustomButtonBoxThemeDark ? "bg-gray-900" : "bg-gray-200"
          } rounded-3xl`}
        >
          <div
            className={`font-mono text-2xl uppercase ${
              isCustomButtonBoxThemeDark ? "text-gray-200" : "text-gray-900"
            }`}
          >
            Live view
          </div>
          <div className="flex items-center h-full -mt-10">
            <CustomButton classList={classList} customClassList={customClassList} text={text} />
          </div>
          <div className="hidden">{parseToTsx(code)}</div>
        </section>

        {/* choices */}
        <section className="w-full p-6 bg-gray-900 2xl:p-4 2xl:min-h-full rounded-3xl 2xl:w-1/2">
          <ButtonBoxThemeButtons
            isCustomButtonBoxThemeDark={isCustomButtonBoxThemeDark}
            setIsCustomButtonBoxThemeDark={setIsCustomButtonBoxThemeDark}
          />

          <h1 className="-mt-2 font-mono text-2xl text-center uppercase">{name}</h1>
          <div className="flex flex-col items-center justify-center mt-2 text-lg text-black">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="font-medium text-white">Text in</div>
              <input
                type="text"
                placeholder="Click on me!"
                id="custom-button-value"
                maxLength={50}
                className="w-full p-1 duration-200 border-2 rounded outline-none lg:w-1/2 focus:border-blue-500"
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
            </div>

            <div className="flex flex-col items-center justify-center w-full mt-2">
              <div className="font-medium text-white">Custom classes</div>
              <input
                type="text"
                id="custom-button-custom-class"
                placeholder="focus:border-red-500 bg..."
                maxLength={750}
                className="w-full p-1 duration-200 border-2 rounded outline-none lg:w-1/2 focus:border-blue-500"
                value={customClassList}
                onChange={(event) => setCustomClassList(event.target.value)}
              />
            </div>

            <div className="mt-4 text-lg font-medium text-white">Values</div>
            <MemeoizedTailwindOptions
              defaultValue={defaultValue}
              generateNewValue={generateNewValue}
            />
          </div>
        </section>
      </div>

      <CopyButtons classList={classList} customClassList={customClassList} text={text} />

      <MemoizedDivWithAllTailwindValues />

      <button
        style={boxShadowStyles}
        onClick={postCustomButton}
        id="post-custom-button-button"
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

export default CustomButtonGenerator;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<IcustomButtonResponse>({
    query: GET_CUSTOM_BUTTON_GENERATOR,
    variables: { id: DEFAULT_CUSTOM_BUTTON_ID },
  });

  return {
    props: data.customButton.data.attributes,
  };
};
