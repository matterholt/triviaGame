import React from "react";

import emoji from "react-easy-emoji";

import Layout from "../components/Layout";
import ContentCard from "../components/ContentCard";
import LinkButton from "../components/LinkButton";

const Home = () => (
  <Layout>
    <ContentCard>
      <h1>Welcome to the Trivia Challenge</h1>
      <p>You will be precented with 10 True or False questions</p>
      <p>Can you score {emoji("💯")}</p>
      <LinkButton link={{ name: "Begin", location: "/Quiz" }} />
    </ContentCard>
  </Layout>
);
export default Home;
