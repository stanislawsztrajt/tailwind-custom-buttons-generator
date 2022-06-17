import React from "react";
import type { GetStaticProps, NextPage } from "next";
import parseToTsx from "html-react-parser";
import { ApolloQueryResult } from "@apollo/client";
import client from "@api/apollo-client";
import { GET_COMPONENT } from "@api/queries/component";

import tailwindValuesJSON from "data/tailwindValues.json";

import {
  Icomponent,
  IcomponentResponse,
  ItailwindValue,
} from "types/interfaces";

import Component from "components/TailwindComponent";
import TailwindOptions from "components/TailwindOptions";
import DivWithAllTailwindValues from "components/DivWithAllTailwindValues";

import useHomeHook from "pages/home/Home.hook";

const tailwindValues: ItailwindValue[] = Object.values(tailwindValuesJSON).map(tailwindValue => { return tailwindValue })

type Props = {
  component: Icomponent;
};

const Home: NextPage<Props> = ({ component }: Props) => {
  const {
    componentRef,
    text,
    setText,
    customClassList,
    setCustomClassList,
    classList,
    generateNewValue,
  } = useHomeHook(component);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-white">
      <div className="flex flex-row items-center justify-center w-3/4 gap-8 p-4 mt-20 h-2/3">
        {/* live view */}
        <div className="flex flex-col items-center justify-center w-1/2 h-full border">
          <Component
            componentRef={componentRef}
            classList={classList}
            customClassList={customClassList}
            text={text}
          />
          <div className="hidden">
            {parseToTsx(component.code)}
          </div>
        </div>
        {/* choices */}
        <div className="w-1/2 h-full p-4 border">
          <h1 className="text-3xl">{component.name}</h1>
          <div className="flex flex-col text-black">
            <div>
              <label>Text</label>
              <input
                type="text"
                placeholder="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
            </div>

            <div>
              <label htmlFor="">Custom classes</label>
              <input
                type="text"
                value={customClassList}
                onChange={(event) => setCustomClassList(event.target.value)}
              />
            </div>

            <TailwindOptions 
              tailwindValues={tailwindValues} 
              component={component} 
              generateNewValue={generateNewValue}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full p-6">
        <div className="w-2/3 p-8 text-center border">
          copy to clipboard &nbsp;
          {classList} {customClassList}
        </div>
      </div>

      <div>
        <DivWithAllTailwindValues />
      </div>
    </div>
  );
};

export default Home;

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
