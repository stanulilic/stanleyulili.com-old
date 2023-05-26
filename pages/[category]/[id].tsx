import React, { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import Image from "next/image";
import sizeOf from "image-size";
import { join } from "path";

const md = require("markdown-it")({}).use(
  require("@digitalocean/do-markdownit"),
  {}
);
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
  function useNextImageComponent(imagePath, width, height) {
    return ReactDOMServer.renderToString(
      <Image
        priority
        src={imagePath}
        alt="Picture of the author"
        width={width}
        height={height}
      />
    );
  }

  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    const token = tokens[idx];
    const imagePath = token.attrs[0][1];
    try {
      const { width, height } = sizeOf(join("public", imagePath));
      return useNextImageComponent(imagePath, width, height);
    } catch (e) {
      console.log(`An error ${e} was thrown`);
    }
  };
  const contentHtml = md.render(postData.contentMD);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        {postData.canonicalUrl && (
          <link rel="canonical" href={postData.canonicalUrl} key="canonical" />
        )}
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
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
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
