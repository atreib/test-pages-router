import { GetServerSideProps } from "next";
import * as React from "react";
import { NextSeo } from "next-seo";

function DashboardEquity({ dummy }: { dummy: boolean }) {
  return (
    <>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
      />
      server side props: {dummy.toString()}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      dummy: true,
    },
  };
};

export default DashboardEquity;
