import { GetServerSideProps } from "next";
import * as React from "react";

function DashboardEquity({ dummy }: { dummy: boolean }) {
  return <>server side props: {dummy.toString()}</>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      dummy: true,
    },
  };
};

export default DashboardEquity;
