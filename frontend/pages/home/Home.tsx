import React, { VFC, useEffect } from "react";
import { NextRouter, useRouter } from "next/router";

const Home: VFC = () => {
  const router: NextRouter = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return <></>;
};

export default Home;
