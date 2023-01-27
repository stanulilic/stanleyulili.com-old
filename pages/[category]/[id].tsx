import React, { useEffect } from "react";

import Layout from "../../components/layout";
import NextLink from "next/link";
import { getAllPostIds, getPostData } from "../../lib/blog-posts";
import Head from "next/head";
import Date from "../../components/date";
import Footer from "../../components/footer";
import { Subscribe } from "../../components/subscribe";
import AuthorBio from "../../components/bio";

/*
const prism = require("prismjs");
require("prismjs/components/prism-python");
*/

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  /*
  useEffect(() => {
    prism.highlightAll();
  }, []);
  */
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <header>
          <div className="wrapper">
            <h1 className="">{postData.title}</h1>
            <div className="post-author">
              By Stanley Ulili on <Date dateString={postData.date} />
              {postData.last_modified_at && (
                <span>
                  (Updated on <Date dateString={postData.last_modified_at} />)
                </span>
              )}
            </div>
            <p>A short description for the article</p>
          </div>
        </header>

        <div className="wrapper">
          <div className="post-content">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
          <Subscribe />
          <div className="post-metadata">
            {postData.tags.map((tag) => (
              <NextLink href={`/tags/${tag}`} key={tag}>
                {tag}
              </NextLink>
            ))}
          </div>
          <AuthorBio />
        </div>
      </article>
      <Footer />
    </Layout>
  );
}
