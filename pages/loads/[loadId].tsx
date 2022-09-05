import React from "react";
import { GetStaticProps } from "next";

export default function LoadDetailPage({ loadId }: { loadId?: string }) {
  return <div>Hi Load {loadId ?? "NOTHING"}</div>;
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      loadId: ctx.params?.loadId,
    },
  };
};
