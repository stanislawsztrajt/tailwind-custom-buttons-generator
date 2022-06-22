import React from "react";
import type { GetStaticProps, NextPage } from "next";

import client from "@api/apollo-client";
import { GET_CUSTOM_BUTTONS } from "@queries/custom-button";
import { IcustomButtonsResponse, IcustomButtonsVariables, IcustomButtonsListProps } from "types/interfaces";
import { CustomButtonList } from "@features/custom-button";

const IndexPage: NextPage<IcustomButtonsListProps> = ({ customButtons }: IcustomButtonsListProps) => {
  return <CustomButtonList customButtons={customButtons}/>;
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
