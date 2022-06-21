import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import parseToTsx from "html-react-parser";

import client from "@api/apollo-client";
import { GET_CUSTOM_BUTTONS } from "@queries/custom-button";
import { IcustomButtonsResponse, IcustomButtonsVariables } from "types/interfaces";

interface Props {
  customButtons: {
    id: string;
    attributes: {
      name: string;
      description: string;
      code: string;
    };
  }[];
}

const IndexPage: NextPage<Props> = ({ customButtons }: Props) => {
  const customButtonsMap = customButtons.map(({ attributes, id }, index) => {
    return (
      <div key={id} className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}  w-full px-5 py-10 text-gray-400`}>
        <div className="flex flex-col justify-start px-4 mb-10 text-center sm:w-2/3">
          <h2 className="mt-6 mb-3 text-2xl font-medium text-gray-100 title-font">
            {attributes.name}
          </h2>
          <p className="text-base leading-relaxed">{attributes.description}</p>
          <Link href={`/custom-buttons/${id}`}>
            <button className="flex px-5 py-2 mx-auto mt-6 text-lg text-indigo-400 underline border-0 rounded hover:text-indigo-500 focus:outline-none0">
              Go to copy
            </button>
          </Link>
          <div className="flex flex-col items-center h-40 mt-4">
            <span className="font-thin">Preview</span>
            <div className="mt-1 overflow-hidden w-96 sm:w-auto">{parseToTsx(attributes.code)}</div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="grid grid-cols-1 gap-10 mt-16 xl:grid-cols-2">{ customButtonsMap }</div>;
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<IcustomButtonsResponse, IcustomButtonsVariables>({
    query: GET_CUSTOM_BUTTONS,
    variables: {
      limit: 1000,
    },
  });

  return {
    props: {
      customButtons: data.customButtons.data
    },
  };
};
