import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import Layout from "./Layout";
import ContentCard from "./ContentCard";

const Loading = () => {
  return (
    <Layout>
      <ContentCard>
        <h1>Loading..</h1>
      </ContentCard>
    </Layout>
  );
};
export default Loading;
