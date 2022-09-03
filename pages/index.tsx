import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
const Home: NextPage = () => {
  return (
    <Layout className={styles.container}>
      <h1>This is the homepage</h1>
    </Layout>
  );
};

export default Home;
