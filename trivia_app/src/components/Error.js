import React from "react";

import LinkButton from "./LinkButton";
import Layout from "./Layout";
import ContentCard from "./ContentCard";

const Loading = () => {
  return (
    <Layout>
      <ContentCard>
        <h1>Look Like We have an Error</h1>
        <LinkButton link={{ name: "Error.. try again", location: "/" }} />;
      </ContentCard>
    </Layout>
  );
};
export default Loading;
