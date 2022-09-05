import React from "react";
import { GetStaticProps } from "next";

export default function LoadDetailPage({ loadId }: { loadId?: string }) {

  if (true) {
    throw new Error("Loading");
  }

  return <div>Hi Load {loadId ?? "NOTHING"}</div>;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      loadId: ctx.params?.loadId,
    },
  };
};
