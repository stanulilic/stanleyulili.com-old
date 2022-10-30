import NextLink from "next/link";
import { isArticleNew } from "../lib/dates";
import Date from "./date";

export default function Articles({ data, heading }) {
  return (
    <section>
      <div className="wrapper posts_section">
        <h2 className="section_title">
          <span>{heading}</span>
          <NextLink href="/articles">
            <a className="section-button">View all</a>
          </NextLink>
        </h2>
        <div className="articles">
          {data.map(({ id, date, title, categories, page_views }) => (
            <div className="article" key={id}>
              <NextLink href={`${categories[0].toLowerCase()}/${id}`}>
                <a>
                  <article className="article_row">
                    <h3>{title}</h3>
                    <Date dateString={date} />
                  {isArticleNew(date) && (
                    <span className="new_article">New!</span>
                  )}
                  </article>
                </a>
              </NextLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
