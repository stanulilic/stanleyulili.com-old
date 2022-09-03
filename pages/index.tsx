import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Hero from "../components/hero";

const Home: NextPage = () => {
  return (
    <Layout className={styles.container}>
      <Hero />
    </Layout>
  );
};

export default Home;
