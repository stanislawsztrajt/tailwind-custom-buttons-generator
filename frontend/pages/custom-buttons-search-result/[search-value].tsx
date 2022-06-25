import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { GET_CUSTOM_BUTTONS_BY_SEARCH_VALUE } from "@queries/custom-button";
import { IcustomButtonsResponse } from "types/interfaces";
import { useQuery } from "@apollo/client";
import CustomButtonList from "@features/custom-button/custom-button-list";
import { Loading } from "@features/ui";

interface IcustomButtonSearchValue {
  searchValue: string | string[] | undefined;
}

const ButtonsSearchResult: NextPage = () => {
  const router = useRouter();
  const searchValue = router.query["search-value"];

  const { data, loading } = useQuery<IcustomButtonsResponse, IcustomButtonSearchValue>(
    GET_CUSTOM_BUTTONS_BY_SEARCH_VALUE,
    { variables: { searchValue } }
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {data ? (
            <>
              {data.customButtons.data.length > 0 ? (
                <CustomButtonList customButtons={data.customButtons.data} />
              ) : (
                <div
                  id="not-found-custom-buttons"
                  className="mt-64 text-4xl text-center text-gray-300 lg:mt-80"
                >
                  Cannot find any buttons for{" "}
                  <span className="font-semibold text-white">{searchValue}</span>
                </div>
              )}
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default ButtonsSearchResult;
