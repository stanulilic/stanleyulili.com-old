import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";
import { getRecentPosts, getPopularPosts } from "../lib/blog-posts";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Articles from "../components/posts";
import Footer from "../components/footer";

export async function getStaticProps() {
  const recentPosts = await getRecentPosts();
  const popularPosts = await getPopularPosts();
  return {
    props: {
      recentPosts,
      popularPosts,
    },
  };
}

const Home: NextPage = ({ recentPosts, popularPosts }) => {
  return (
    <Layout className={styles.container}>
      <Hero />
      <Articles
        data={recentPosts}
        heading="Recent Posts"
        headingClass="recent_posts"
      />
      <Articles
        data={popularPosts}
        heading="Popular Posts"
        headingClass="popular_posts"
      />
      <Footer />
    </Layout>
  );
};

export default Home;
