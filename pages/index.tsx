import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { getRecentPosts } from "../lib/recentPosts";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Articles from "../components/posts";

export async function getStaticProps() {
  const recentPosts = getRecentPosts();
  return {
    props: {
      recentPosts,
    },
  };
}

const Home: NextPage = ({ recentPosts }) => {
  return (
    <Layout className={styles.container}>
      <Hero />
      <Articles data={recentPosts} heading="Recent Posts" />
    </Layout>
  );
};

export default Home;
