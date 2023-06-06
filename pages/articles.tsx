import React, { useEffect } from "react";
import { groupBy, sortBy } from "lodash";
import NextLink from "next/link";
import Layout from "../components/layout";
import ParseDate from "../components/date";
import {
  getAllPostIds,
  getAllPostCategories,
  getAllPostsSortedByDate,
} from "../lib/blog-posts";
import Head from "next/head";
import Footer from "../components/footer";

export async function getStaticProps() {
  const posts = await getAllPostsSortedByDate();

  const postsByYear = groupBy(posts, (post) =>
    new Date(post.date).getFullYear()
  );

  const years = Object.keys(postsByYear).reverse();
  const categories = getAllPostCategories();
  return {
    props: {
      postsByYear,
      years,
      categories,
    },
  };
}

export default function Blog({ postsByYear, years, categories }) {
  return (
    <Layout>
      <Head>
        <title>All blog posts</title>
      </Head>
      <main>
        <div>
          <section className="wrapper">
            <div className="content">
              <h1>Articles</h1>
              <ul className="categories_nav">
                {categories.map((item) => (
                  <li className="nav-item" key={item.category}>
                    <NextLink href={`categories/${item.category}`}>
                      <strong>{item.category}</strong>
                      <span className="category__count">
                        {item.category_count}
                      </span>
                    </NextLink>
                  </li>
                ))}
              </ul>
              {years.map((year) => (
                <section key={year} className="content__yeargroup">
                  <h2 className="content__year">{year}</h2>
                  <div className="content__articles">
                    {postsByYear[year].map(
                      ({ id, categories, title, date }) => (
                        <div className="content__article" key={id}>
                          <NextLink
                            href={`${categories[0].toLowerCase()}/${id}`}
                          >
                            <article className="content_row">
                              <h3>{title}</h3>
                              <ParseDate dateString={date} />
                            </article>
                          </NextLink>
                        </div>
                      )
                    )}
                  </div>
                </section>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
